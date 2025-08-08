
# DraftPilot (starter)

Modern, lightweight **fantasy football draft simulator** (snake) built with **Next.js (App Router)** + **TypeScript** + **Tailwind**.

## What’s included
- App shell with dark-first UI tokens (green/cyan) + light mode fallback
- API route stubs:
  - `GET /api/adp` — merged ADP + tiers (cacheable)
  - `POST /api/draft/new` — create a new draft session
  - `POST /api/draft/:id/pick` — make a pick (auto or manual)
  - `POST /api/draft/:id/undo` — revert last pick
  - `GET /api/draft/:id/state` — get current draft state
  - `GET /api/draft/:id/export.csv` — export draft results
- Core types + bot scaffolding (ADP tiers, roster need, scarcity, run detection, bye balance)
- Default league: **12 teams • 1QB / 2WR / 2RB / 1TE / 1FLEX / 7 BENCH • half-PPR**
- Pick timer defaults: **45s**, auto-pick at 0 (configurable via env or UI later)

## Quickstart
```bash
pnpm i            # or: npm i / yarn
pnpm dev          # starts Next.js dev server
```
> Node 18+ recommended.

## Roadmap (MVP)
- Wire FantasyPros ADP (primary) + FantasyNerds fallback
- Implement bot scoring function in `src/lib/bot.ts`
- Build live draft board with queues and timer
- CSV export + Sleeper league import prototype

## Config
- Env vars (create `.env.local` as needed):
```
NEXT_PUBLIC_BRAND_NAME=DraftPilot
NEXT_PUBLIC_TIMER_DEFAULT=45
NEXT_PUBLIC_AUTO_PICK=true
ADP_REFRESH_HOURS=6
FANTASYPROS_API_KEY=
```

## License
MIT (or your choice). This is a starter scaffold you can modify freely.
