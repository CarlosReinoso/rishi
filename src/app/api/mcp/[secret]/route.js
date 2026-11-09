import { NextResponse } from "next/server";
import {
  changeText,
  CmsError,
  findText,
  getDraft,
  listPages,
  readPage,
} from "@/utils/cms/site";
import { safeEqual } from "@/utils/cms/session";

export const dynamic = "force-dynamic";

const PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26"];

const INSTRUCTIONS = `You help the owner of The Speech Heroes website change its wording. They are not technical, so never show them code or file paths.
Find the wording with find_text, read the page, then use change_text and change only words inside the existing text. Keep quotes and surrounding code exactly as they are.
Changes are saved to a private draft. After changing something, call draft_status and share the preview link when it is ready (it takes about a minute).
You cannot make changes live. Tell them to press Publish on the website's /editor page when they are happy, where they can also undo past changes.`;

const TOOLS = [
  {
    name: "list_pages",
    description: "List the parts of the website whose wording can be changed.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    run: () => listPages(),
  },
  {
    name: "find_text",
    description: "Search the whole website for some wording and see where it appears.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Words to look for" } },
      required: ["query"],
    },
    annotations: { readOnlyHint: true },
    run: ({ query }) => findText(query),
  },
  {
    name: "read_page",
    description: "Read one part of the website, as it currently stands in the draft.",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string", description: "A path from list_pages" } },
      required: ["path"],
    },
    annotations: { readOnlyHint: true },
    run: ({ path }) => readPage(path),
  },
  {
    name: "change_text",
    description: "Replace exact wording on one page. Saved to the draft, not the live site.",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string", description: "A path from list_pages" },
        find: { type: "string", description: "The exact current text, appearing once on the page" },
        replace: { type: "string", description: "The new text" },
        summary: { type: "string", description: "Short plain-English description of the change" },
      },
      required: ["path", "find", "replace", "summary"],
    },
    run: async (input) => {
      await changeText(input);
      return "Saved to the draft. Call draft_status for the preview link.";
    },
  },
  {
    name: "draft_status",
    description: "See the changes waiting to be published and the preview link.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    run: async () => {
      const draft = await getDraft();
      if (!draft) return "There are no changes waiting.";
      const { changes, pages, preview } = draft;
      return { changes, pages, preview };
    },
  },
];

const result = (id, value) => ({ jsonrpc: "2.0", id, result: value });
const rpcError = (id, code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });

async function callTool(id, { name, arguments: input = {} }) {
  const tool = TOOLS.find((item) => item.name === name);
  if (!tool) return rpcError(id, -32602, `Unknown tool: ${name}`);

  try {
    const output = await tool.run(input);
    const text = typeof output === "string" ? output : JSON.stringify(output, null, 2);
    return result(id, { content: [{ type: "text", text }] });
  } catch (error) {
    if (!(error instanceof CmsError)) console.error("MCP tool error:", error);
    const text = error instanceof CmsError ? error.message : "Something went wrong. Please try again.";
    return result(id, { content: [{ type: "text", text }], isError: true });
  }
}

async function handle({ id, method, params }) {
  if (method === "initialize") {
    const requested = params?.protocolVersion;
    return result(id, {
      protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSIONS[0],
      capabilities: { tools: {} },
      serverInfo: { name: "speech-heroes-editor", version: "1.0.0" },
      instructions: INSTRUCTIONS,
    });
  }
  if (method === "ping") return result(id, {});
  if (method === "tools/list") {
    return result(id, { tools: TOOLS.map(({ run, ...tool }) => tool) });
  }
  if (method === "tools/call") return callTool(id, params);
  return rpcError(id, -32601, `Method not found: ${method}`);
}

export async function POST(request, { params }) {
  const { secret } = await params;
  if (!safeEqual(secret, process.env.CMS_MCP_SECRET)) {
    return new NextResponse(null, { status: 404 });
  }

  const message = await request.json().catch(() => null);
  if (!message || Array.isArray(message)) {
    return NextResponse.json(rpcError(null, -32600, "Invalid request"), { status: 400 });
  }
  if (message.id === undefined) return new NextResponse(null, { status: 202 });

  return NextResponse.json(await handle(message));
}

export async function GET() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
