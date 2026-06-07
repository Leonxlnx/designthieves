# Design Thieves

A minimal, single-page website that lists "design thieves" caught on X (Twitter) —
accounts that lift, trace, and repost other people's design work as their own.

Live: [designthieves-on-x.vercel.app](https://designthieves-on-x.vercel.app)

Built with [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS,
and designed to be hosted on [Vercel](https://vercel.com).

## Adding a profile

This is the whole point of the project: adding a thief takes **one edit**.

Open [`src/data/thieves.ts`](src/data/thieves.ts) and append an object to the
`thieves` array (newest at the top):

```ts
{
  handle: "their_x_handle",        // required — without the leading "@"
  name: "Display Name",            // optional — falls back to the handle
  note: "What they took.",         // required — keep it to a sentence
  stolenFrom: "@original_creator", // optional
  caughtOn: "2026-06-07",          // optional — ISO date
  evidenceUrl: "https://x.com/...",// optional — link to the receipts
},
```

That's it. The list, the count, and the profile links all update automatically.
Only `handle` and `note` are required; everything else is optional.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run lint     # eslint
npm run build    # production build
npm run start    # serve the production build
```

## Deploying to Vercel

The repo is a standard Next.js app, so deployment is zero-config:

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Keep the defaults (Framework: **Next.js**, build: `next build`).
3. Deploy. Future pushes to `main` deploy automatically; PRs get preview URLs.

## Project structure

```
src/
  app/
    layout.tsx       # metadata + fonts
    page.tsx         # the ledger page
    globals.css      # theme tokens (paper / ink palette, light + dark)
    icon.svg         # favicon
  components/
    ThiefRow.tsx     # one row in the ledger
  data/
    thieves.ts       # ← the only file you edit to add profiles
  lib/
    thieves.ts       # small helpers (X URL, date formatting)
```
