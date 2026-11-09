import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "cms_session";
const SESSION_SECONDS = 60 * 60 * 24 * 30;

const digest = (value) => createHash("sha256").update(String(value)).digest();

export function safeEqual(a, b) {
  if (!a || !b) return false;
  return timingSafeEqual(digest(a), digest(b));
}

function sign(expiry) {
  return createHmac("sha256", process.env.CMS_SESSION_SECRET)
    .update(String(expiry))
    .digest("hex");
}

export async function isLoggedIn() {
  if (!process.env.CMS_SESSION_SECRET) return false;
  const store = await cookies();
  const [expiry, signature] = (store.get(COOKIE_NAME)?.value || "").split(".");
  return Number(expiry) > Date.now() && safeEqual(signature, sign(expiry));
}

export async function startSession() {
  const expiry = Date.now() + SESSION_SECONDS * 1000;
  const store = await cookies();
  store.set(COOKIE_NAME, `${expiry}.${sign(expiry)}`, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
