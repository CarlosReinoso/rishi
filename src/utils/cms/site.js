const API_URL = process.env.CMS_GITHUB_API_URL || "https://api.github.com";
const LIVE_BRANCH = process.env.CMS_LIVE_BRANCH || "master";
const DRAFT_BRANCH = "draft";
const PUBLISH_PREFIX = "Publish: ";
const MAX_TEXT_LENGTH = 5000;

export const EDITABLE_FILES = {
  "src/components/SpeechHeroesHero.js": "Home: top banner",
  "src/components/WelcomeSection.js": "Home: welcome",
  "src/components/AboutSection.js": "Home: about",
  "src/components/MusicSection.js": "Home: music",
  "src/components/CharactersSection.js": "Home: characters",
  "src/components/BookSection.js": "Home and Book page: the book",
  "src/components/WorkshopsSection.js": "Home: workshops",
  "src/components/ResourcesSection.js": "Home: resources",
  "src/components/ContactSection.js": "Home: contact",
  "src/components/Footer.js": "Footer on every page",
  "src/app/about/page.js": "About Us page",
  "src/app/book/page.js": "Get the Book page",
  "src/app/media/page.js": "In the Media page",
  "src/app/faq/page.js": "FAQ page",
  "src/app/newsletter/page.js": "Newsletter page",
  "src/app/contact/page.js": "Contact Us page",
  "src/constants.js": "Menu, email address and social links",
};

// Claude may only change wording, so anything that looks like code is refused.
const BLOCKED_CODE = [
  /\brequire\s*\(/,
  /\beval\s*\(/,
  /\bfetch\s*\(/,
  /\bFunction\s*\(/,
  /\bimport\s*\(/,
  /^\s*import\s.+\sfrom\s/m,
  /\b(process|window|document|globalThis)\s*[.[]/,
  /=>/,
  /dangerouslySetInnerHTML/,
  /<\s*(script|iframe|object|embed)\b/i,
  /javascript:/i,
  /\bon[A-Z]\w*\s*=/,
];

export class CmsError extends Error {}

const isEditable = (path) => Object.hasOwn(EDITABLE_FILES, path);
const labelFor = (path) => EDITABLE_FILES[path] || path;

function commitIdentity() {
  return {
    name: process.env.CMS_COMMIT_NAME,
    email: process.env.CMS_COMMIT_EMAIL,
  };
}

async function github(path, { method = "GET", body, allowMissing } = {}) {
  const response = await fetch(
    `${API_URL}/repos/${process.env.CMS_GITHUB_REPO}${path}`,
    {
      method,
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.CMS_GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: body ? JSON.stringify(body) : undefined,
    }
  );

  if (allowMissing && response.status === 404) return null;
  if (!response.ok) {
    const error = new Error(`GitHub ${method} ${path}: ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.status === 204 ? null : response.json();
}

async function branchSha(branch) {
  const ref = await github(`/git/ref/heads/${branch}`, { allowMissing: true });
  return ref?.object.sha ?? null;
}

async function ensureDraft() {
  if (await branchSha(DRAFT_BRANCH)) return;
  await github("/git/refs", {
    method: "POST",
    body: {
      ref: `refs/heads/${DRAFT_BRANCH}`,
      sha: await branchSha(LIVE_BRANCH),
    },
  });
}

async function moveLiveTo(tree, parent, message) {
  const identity = commitIdentity();
  const commit = await github("/git/commits", {
    method: "POST",
    body: { message, tree, parents: [parent], author: identity, committer: identity },
  });
  await github(`/git/refs/heads/${LIVE_BRANCH}`, {
    method: "PATCH",
    body: { sha: commit.sha, force: false },
  });
}

function assertEditable(path) {
  if (!isEditable(path)) {
    throw new CmsError(`"${path}" can't be edited. Use list_pages to see what can.`);
  }
}

function assertWordingOnly(text) {
  if (text.length > MAX_TEXT_LENGTH) {
    throw new CmsError("That change is too long. Please make it in smaller parts.");
  }
  if (BLOCKED_CODE.some((pattern) => pattern.test(text))) {
    throw new CmsError("Only wording can be changed here, and that text looks like code.");
  }
}

async function readFile(path, ref) {
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  const file = await github(`/contents/${encodedPath}?ref=${ref}`);
  return {
    sha: file.sha,
    text: Buffer.from(file.content, "base64").toString("utf8"),
  };
}

async function workingBranch() {
  return (await branchSha(DRAFT_BRANCH)) ? DRAFT_BRANCH : LIVE_BRANCH;
}

export function listPages() {
  return Object.entries(EDITABLE_FILES).map(([path, label]) => ({ path, label }));
}

export async function readPage(path) {
  assertEditable(path);
  return (await readFile(path, await workingBranch())).text;
}

export async function findText(query) {
  const needle = query.toLowerCase();
  const ref = await workingBranch();
  const files = await Promise.all(
    Object.keys(EDITABLE_FILES).map(async (path) => ({
      path,
      text: (await readFile(path, ref)).text,
    }))
  );

  return files.flatMap(({ path, text }) =>
    text
      .split("\n")
      .map((line, index) => ({ path, line: index + 1, text: line.trim() }))
      .filter((entry) => entry.text.toLowerCase().includes(needle))
  );
}

export async function changeText({ path, find, replace, summary }) {
  assertEditable(path);
  assertWordingOnly(replace);
  if (!find || find === replace) {
    throw new CmsError("Nothing to change.");
  }

  await ensureDraft();
  const file = await readFile(path, DRAFT_BRANCH);
  const matches = file.text.split(find).length - 1;
  if (matches === 0) throw new CmsError("That text wasn't found on this page.");
  if (matches > 1) {
    throw new CmsError(`That text appears ${matches} times. Include more of the sentence.`);
  }

  const identity = commitIdentity();
  await github(`/contents/${path.split("/").map(encodeURIComponent).join("/")}`, {
    method: "PUT",
    body: {
      message: summary,
      content: Buffer.from(file.text.replace(find, () => replace)).toString("base64"),
      sha: file.sha,
      branch: DRAFT_BRANCH,
      author: identity,
      committer: identity,
    },
  });
}

async function getPreview(sha) {
  const [deployment] = await github(`/deployments?sha=${sha}&per_page=1`);
  if (!deployment) return { state: "building", url: null };

  const [status] = await github(`/deployments/${deployment.id}/statuses?per_page=1`);
  if (status?.state === "success") {
    return { state: "ready", url: status.environment_url };
  }
  if (status?.state === "failure" || status?.state === "error") {
    return { state: "failed", url: null };
  }
  return { state: "building", url: null };
}

export async function getDraft() {
  const sha = await branchSha(DRAFT_BRANCH);
  if (!sha) return null;

  const comparison = await github(`/compare/${LIVE_BRANCH}...${DRAFT_BRANCH}`);
  if (!comparison.ahead_by) return null;

  return {
    sha,
    behindBy: comparison.behind_by,
    changes: comparison.commits.map((item) => item.commit.message),
    files: comparison.files.map((item) => item.filename),
    pages: comparison.files.map((item) => labelFor(item.filename)),
    preview: await getPreview(sha),
  };
}

export async function publishDraft(summary) {
  const draft = await getDraft();
  if (!draft) throw new CmsError("There are no changes to publish.");
  if (!draft.files.every(isEditable)) {
    throw new CmsError("This draft changes files the editor isn't allowed to publish.");
  }

  if (draft.behindBy > 0) {
    try {
      await github("/merges", {
        method: "POST",
        body: { base: DRAFT_BRANCH, head: LIVE_BRANCH },
      });
    } catch (error) {
      if (error.status === 409) {
        throw new CmsError("The live site changed in the same place as this draft. Please discard it and try again.");
      }
      throw error;
    }
    throw new CmsError("The draft was updated with the latest site. Please wait for the new preview, then publish.");
  }

  if (draft.preview.state !== "ready") {
    throw new CmsError("The preview has to finish building before you can publish.");
  }

  const [draftCommit, liveSha] = await Promise.all([
    github(`/git/commits/${draft.sha}`),
    branchSha(LIVE_BRANCH),
  ]);
  const title = summary?.trim() || draft.changes.join("; ");
  await moveLiveTo(draftCommit.tree.sha, liveSha, `${PUBLISH_PREFIX}${title}`);
  await discardDraft();
}

export async function discardDraft() {
  await github(`/git/refs/heads/${DRAFT_BRANCH}`, {
    method: "DELETE",
    allowMissing: true,
  });
}

export async function getHistory() {
  const commits = await github(`/commits?sha=${LIVE_BRANCH}&per_page=100`);
  return commits
    .filter((item) => item.commit.message.startsWith(PUBLISH_PREFIX))
    .map((item) => ({
      sha: item.sha,
      title: item.commit.message.slice(PUBLISH_PREFIX.length).split("\n")[0],
      date: item.commit.author.date,
    }));
}

// Only wording files are restored, so code fixes made since are never undone.
export async function restoreBefore(sha) {
  if (await getDraft()) {
    throw new CmsError("Publish or discard your current changes first.");
  }

  const publish = await github(`/commits/${sha}`);
  if (!publish.commit.message.startsWith(PUBLISH_PREFIX)) {
    throw new CmsError("Only published changes can be undone.");
  }

  const target = publish.parents[0].sha;
  const [comparison, targetTree, liveSha] = await Promise.all([
    github(`/compare/${target}...${LIVE_BRANCH}`),
    github(`/git/trees/${target}?recursive=1`),
    branchSha(LIVE_BRANCH),
  ]);

  const targetBlobs = new Map(targetTree.tree.map((entry) => [entry.path, entry.sha]));
  const tree = comparison.files
    .filter((file) => isEditable(file.filename))
    .map((file) => ({
      path: file.filename,
      mode: "100644",
      type: "blob",
      sha: targetBlobs.get(file.filename) ?? null,
    }));
  if (tree.length === 0) throw new CmsError("The site already matches that version.");

  const liveCommit = await github(`/git/commits/${liveSha}`);
  const newTree = await github("/git/trees", {
    method: "POST",
    body: { base_tree: liveCommit.tree.sha, tree },
  });
  const title = publish.commit.message.slice(PUBLISH_PREFIX.length).split("\n")[0];
  await moveLiveTo(newTree.sha, liveSha, `${PUBLISH_PREFIX}Went back to before "${title}"`);
}
