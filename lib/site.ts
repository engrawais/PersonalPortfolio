/**
 * Public site origin for links (set NEXT_PUBLIC_SITE_URL on Vercel / in .env.local).
 * Share path is URL-safe (no spaces): Muhammad Awais → muhammad-awais, Software Engineer → software-engineer.
 */
export const SHARE_PATH = "/muhammad-awais/software-engineer/";

export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  const base = raw.replace(/\/$/, "");
  return base || "https://your-vercel-link.vercel.app";
}

export function getPortfolioShareUrl(): string {
  const origin = getSiteOrigin();
  const path = SHARE_PATH.startsWith("/") ? SHARE_PATH : `/${SHARE_PATH}`;
  return `${origin}${path}`;
}
