import type { Thief } from "@/data/thieves";

/** Build the canonical X profile URL for a handle. */
export function xProfileUrl(handle: string): string {
  return `https://x.com/${handle.replace(/^@/, "")}`;
}

/** Display name with a guaranteed fallback to the handle. */
export function displayName(thief: Thief): string {
  return thief.name?.trim() || thief.handle;
}

/** Format an ISO date (e.g. "2026-06-07") as "Jun 7, 2026". Safe on bad input. */
export function formatCaughtOn(iso?: string): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
