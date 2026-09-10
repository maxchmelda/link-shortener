# Short Link Generator

A URL shortener built with Next.js, featuring an animated interactive dot-field background, instant link generation with collision-safe code generation, and automatic cleanup of stale links via a Postgres cron job.

**Live at [link.maxch.dev](https://link.maxch.dev)**

![Short Link Generator screenshot](public/screenshot.png)

## Features

- Paste a URL, get a short link back in a copyable dialog
- Client- and server-side URL validation (rejects non-domain-looking input)
- Collision-aware short code generation — retries with a longer code after repeated collisions
- Redirect route that resolves a short code and 302s to the original URL
- `last_clicked_at` tracked on every visit via `after()`, without blocking the redirect
- Daily cron job (pg_cron) that deletes links unclicked for 30+ days
- Animated interactive dot-field background (canvas + SVG glow, cursor-reactive)
- Dark theme, glassmorphism UI, responsive down to mobile widths
- UI built with Tailwind CSS and shadcn-style components

## Project Structure

- [app/page.tsx](app/page.tsx) — main entry page
- [app/[code]/route.ts](app/[code]/route.ts) — resolves a short code and redirects to the original URL
- [app/api/links/route.ts](app/api/links/route.ts) — creates a new short link
- [app/not-found/page.tsx](app/not-found/page.tsx) — shown when a short code doesn't resolve
- [components/CreateLink.tsx](components/CreateLink.tsx) — URL input + shorten form
- [components/LinkDisplayModal.tsx](components/LinkDisplayModal.tsx) — dialog showing the generated link with copy-to-clipboard
- [components/ErrorMessage.tsx](components/ErrorMessage.tsx) — dismissing toast for form errors
- [components/DotField.tsx](components/DotField.tsx) — animated interactive dot-field background
- [lib/generateCode.ts](lib/generateCode.ts) — random short code generator
- [lib/isUrlValid.ts](lib/isUrlValid.ts) — URL validation and normalization
- [lib/supabase.ts](lib/supabase.ts) — Supabase client

## Tech Stack

Next.js 16, React 19, TypeScript, Tailwind CSS, Supabase, react-icons

## Backend / Data

Links are stored in a `links` table in Supabase (Postgres):

| column           | type          | notes                          |
| ---------------- | ------------- | ------------------------------- |
| `code`           | `text`        | primary key, the short code      |
| `original_url`   | `text`        | normalized, absolute URL         |
| `created_at`     | `timestamptz` |                                   |
| `last_clicked_at`| `timestamptz` | updated on every redirect visit  |

**RLS:** `UPDATE` is allowed for both `anon` and `authenticated` roles with no restriction (`USING (true) WITH CHECK (true)`), so `last_clicked_at` can be bumped straight from the redirect route using the public client.

**Cleanup cron:** a `pg_cron` job (`delete-old-links`) runs daily at 03:00 UTC and deletes any row where `last_clicked_at < now() - interval '30 days'`, so links that stop being used eventually get garbage-collected.
