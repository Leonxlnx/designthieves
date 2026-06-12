// ─────────────────────────────────────────────────────────────────────────────
// Design Thieves — the data source.
//
// This is the ONLY file you need to edit to add a new entry. Append an object
// to the `thieves` array below and the site updates automatically.
//
// Newest entries should go at the TOP of the array (they render in order).
// ─────────────────────────────────────────────────────────────────────────────

export type Thief = {
  /** X / Twitter handle, WITHOUT the leading "@". e.g. "jack" */
  handle: string;
  /** Optional display name. Falls back to the handle if omitted. */
  name?: string;
  /** What they took / why they're on the list. Keep it to a sentence. */
  note: string;
  /** Who or what they ripped off (optional). */
  stolenFrom?: string;
  /** ISO date string for when they were caught, e.g. "2026-06-07" (optional). */
  caughtOn?: string;
  /** Link to the receipts — the offending post or thread (optional). */
  evidenceUrl?: string;
  /** GitHub username — shown as a profile link when provided (optional). */
  github?: string;
};

// The ledger. Add new catches here — newest at the top.
//
// The notes below are neutral placeholders; refine the `note`, add a
// `stolenFrom`, a `name`, or swap `evidenceUrl` for a direct link to the
// offending post when you have the receipts.
export const thieves: Thief[] = [
  {
    handle: "ayushrout12",
    name: "Ayush Rout",
    note: "Straight-up cloned multiple projects: tryjasmine.dev → trylotus.dev, arjunshah.xyz → ayushrout.xyz, style-stealer → style-robber, MathPrac → MathIQ+, paypasser → his own repo. Some originals had no MIT license.",
    stolenFrom: "@arjunkshah21 & friends",
    caughtOn: "2026-06-12",
    evidenceUrl: "https://github.com/ayushrout12",
    github: "ayushrout12",
  },
  {
    handle: "alxui_ux",
    note: "Flagged for passing off other designers' UI work as their own.",
    caughtOn: "2026-06-07",
    evidenceUrl: "https://x.com/alxui_ux",
  },
  {
    handle: "JonyMac_ux",
    note: "Flagged for passing off other designers' UI work as their own.",
    caughtOn: "2026-06-07",
    evidenceUrl: "https://x.com/JonyMac_ux",
  },
  {
    handle: "Crevion218669",
    note: "Flagged for passing off other designers' UI work as their own.",
    caughtOn: "2026-06-07",
    evidenceUrl: "https://x.com/Crevion218669",
  },
];
