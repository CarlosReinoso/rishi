"use client";
import { useCallback, useEffect, useState } from "react";

const POLL_MS = 10000;

const primaryButton =
  "rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300";
const quietButton =
  "rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition hover:border-black disabled:cursor-not-allowed disabled:opacity-50";

async function post(action, body) {
  const response = await fetch(`/api/editor/${action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body || {}),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Something went wrong.");
  return data;
}

function formatDate(value) {
  return new Date(value).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Login({ onDone }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await post("login", { password });
      onDone();
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm"
      >
        <h1 className="font-playfair text-3xl font-bold">Website Editor</h1>
        <p className="mt-2 text-gray-600">The Speech Heroes</p>
        <label htmlFor="password" className="mt-6 block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3"
          autoFocus
        />
        {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={busy || !password} className={`${primaryButton} mt-6 w-full`}>
          {busy ? "Logging in…" : "Log in"}
        </button>
      </form>
    </main>
  );
}

function PreviewState({ preview }) {
  if (preview.state === "ready") {
    return (
      <a
        href={preview.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-teal-700 underline"
      >
        Open preview in a new tab
      </a>
    );
  }
  if (preview.state === "failed") {
    return (
      <p className="font-medium text-red-700">
        This preview couldn&apos;t be built, so it can&apos;t be published. Ask
        Claude to fix it, or discard these changes.
      </p>
    );
  }
  return <p className="text-gray-600">Preparing your preview, about a minute…</p>;
}

export default function EditorPage() {
  const [state, setState] = useState("loading");
  const [draft, setDraft] = useState(null);
  const [history, setHistory] = useState([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState(null);
  const [confirming, setConfirming] = useState(null);

  const refresh = useCallback(async () => {
    const response = await fetch("/api/editor/status", { cache: "no-store" });
    if (response.status === 401) {
      setState("login");
      return;
    }
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setMessage({ type: "error", text: data.error || "Couldn't load the editor." });
      setState("ready");
      return;
    }
    setDraft(data.draft);
    setHistory(data.history);
    setState("ready");
  }, []);

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, POLL_MS);
    return () => clearInterval(timer);
  }, [refresh]);

  const run = async (action, body, successText) => {
    setBusy(true);
    setMessage(null);
    setConfirming(null);
    try {
      await post(action, body);
      setMessage({ type: "success", text: successText });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
    await refresh();
    setBusy(false);
  };

  if (state === "loading") {
    return <main className="min-h-screen bg-gray-50" />;
  }
  if (state === "login") {
    return <Login onDone={refresh} />;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-black">
      <div className="mx-auto max-w-2xl">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-playfair text-4xl font-bold">Website Editor</h1>
            <p className="mt-1 text-gray-600">The Speech Heroes</p>
          </div>
          <button
            className={quietButton}
            onClick={async () => {
              await post("logout");
              setState("login");
            }}
          >
            Log out
          </button>
        </header>

        {message && (
          <p
            role="status"
            className={`mt-6 rounded-lg px-4 py-3 ${
              message.type === "error"
                ? "bg-red-50 text-red-800"
                : "bg-green-50 text-green-800"
            }`}
          >
            {message.text}
          </p>
        )}

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Changes waiting to go live</h2>

          {!draft ? (
            <p className="mt-3 text-gray-600">
              Nothing waiting. Open Claude and describe what you&apos;d like to
              change, for example: &ldquo;Update the first FAQ answer to
              say…&rdquo;
            </p>
          ) : (
            <>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {draft.changes.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                Affects: {draft.pages.join(", ")}
              </p>
              <div className="mt-4">
                <PreviewState preview={draft.preview} />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  className={primaryButton}
                  disabled={busy || draft.preview.state !== "ready"}
                  onClick={() =>
                    run("publish", {}, "Published. The live site updates in about a minute.")
                  }
                >
                  Publish
                </button>
                {confirming === "discard" ? (
                  <button
                    className={`${quietButton} border-red-300 text-red-700`}
                    disabled={busy}
                    onClick={() => run("discard", {}, "Changes discarded.")}
                  >
                    Yes, discard them
                  </button>
                ) : (
                  <button
                    className={quietButton}
                    disabled={busy}
                    onClick={() => setConfirming("discard")}
                  >
                    Discard
                  </button>
                )}
              </div>
            </>
          )}
        </section>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Published changes</h2>
          {history.length === 0 ? (
            <p className="mt-3 text-gray-600">Nothing published from here yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-gray-100">
              {history.map((item) => (
                <li key={item.sha} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="break-words font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{formatDate(item.date)}</p>
                  </div>
                  {confirming === item.sha ? (
                    <button
                      className={`${quietButton} border-red-300 text-red-700`}
                      disabled={busy}
                      onClick={() =>
                        run("restore", { sha: item.sha }, "Gone back. The live site updates in about a minute.")
                      }
                    >
                      Yes, go back now
                    </button>
                  ) : (
                    <button
                      className={quietButton}
                      disabled={busy || Boolean(draft)}
                      title={draft ? "Publish or discard your waiting changes first" : undefined}
                      onClick={() => setConfirming(item.sha)}
                    >
                      Go back to before this
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
          {history.length > 0 && (
            <p className="mt-3 text-sm text-gray-500">
              Going back also removes anything published after that point.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
