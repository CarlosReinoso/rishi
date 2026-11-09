import { NextResponse } from "next/server";
import {
  CmsError,
  discardDraft,
  getDraft,
  getHistory,
  publishDraft,
  restoreBefore,
} from "@/utils/cms/site";
import {
  endSession,
  isLoggedIn,
  safeEqual,
  startSession,
} from "@/utils/cms/session";

export const dynamic = "force-dynamic";

const fail = (message, status) => NextResponse.json({ error: message }, { status });

function handleError(error) {
  if (error instanceof CmsError) return fail(error.message, 400);
  console.error("Editor error:", error);
  return fail("Something went wrong. Please try again.", 500);
}

export async function GET(request, { params }) {
  const { action } = await params;
  if (action !== "status") return fail("Not found", 404);
  if (!(await isLoggedIn())) return fail("Please log in", 401);

  try {
    const [draft, history] = await Promise.all([getDraft(), getHistory()]);
    return NextResponse.json({ draft, history });
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request, { params }) {
  const { action } = await params;
  const body = await request.json().catch(() => ({}));

  if (action === "login") {
    if (!safeEqual(body.password, process.env.CMS_PASSWORD)) {
      return fail("That password isn't right.", 401);
    }
    await startSession();
    return NextResponse.json({ ok: true });
  }

  if (!(await isLoggedIn())) return fail("Please log in", 401);

  try {
    if (action === "logout") await endSession();
    else if (action === "publish") await publishDraft(body.summary);
    else if (action === "discard") await discardDraft();
    else if (action === "restore") await restoreBefore(body.sha);
    else return fail("Not found", 404);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleError(error);
  }
}
