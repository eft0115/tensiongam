# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Phase 1 (init), Phase 2 (content display, homepage, ad-slot layout), and Phase 3 (static pages) are built and verified. `npm run build` passes with `generateStaticParams` static export. Do not skip ahead to Phase 4 (SEO) before Phase 3's completion criteria are actually confirmed in-browser.

## Governing documents

Read these before starting any work — they are the spec, not background reading. **`docs/` is the authoritative, current version — the identically-named files at the repo root (`SPEC.md`, `CONTENT-PLAN.md`, `WRITING-GUIDE.md`, `PAGES.md`) are stale pre-rebrand copies. Do not read or follow the root copies; they are kept only for history.**

- `docs/SPEC.md` — the authoritative build spec. Tech stack, directory structure, categories, URL design, frontmatter schema, design system, required post components, SEO requirements, and the Phase 1–6 build order with completion criteria for each phase. **Follow the Phase order exactly; do not jump ahead or widen scope.**
- `docs/CONTENT-PLAN.md` — the 30-post topic-cluster plan (5 clusters × pillar + branch posts), publishing order, and internal-linking rules between pillar/branch posts.
- `docs/WRITING-GUIDE.md` — per-post writing rules (title format, heading hierarchy, tone, required sections, frontmatter template, pre-publish checklist). Consult this whenever authoring or editing a post in `content/posts/`.
- `docs/PAGES.md` — copy for `/disclaimer`, `/privacy`, `/contact` (already implemented in `app/`). Contact email is `contact@tensiongam.com`; license number is intentionally undisclosed on `/about` for now.
- `docs/SITE-IDENTITY.md` — full `/about` page copy and the reasoning behind it (already implemented in `app/about/page.tsx`).
- `site_yeje.png` — reference screenshot for visual direction.

## Site identity and hard constraints

텐션감 (tensiongam.com) is a Korean-language musculoskeletal-health information site for readers in their 40s–60s, written by a physical therapist, monetized via AdSense. It is explicitly **not** a medical-advice or diagnosis site. The name comes from *tensegrity* (tension + structural integrity): the site's angle is that a body part's pain often isn't caused by that part alone. This shapes several non-negotiable rules — see `docs/SPEC.md` §12 ("하지 말 것") and §0 for the full list, most importantly:

- Exactly 5 categories (`back`, `shoulder`, `knee`, `recovery`, `body`) — never add/remove. (Unchanged by the rebrand.)
- Every post must include a red-flag (emergency signs) box, a disclaimer block, and an author box — no exceptions.
- No diagnostic/prescriptive claims, no "cured"/"instant results" language, no promoting specific clinics/products/procedures.
- Never present tensegrity as established medical fact — it's one explanatory model, not settled science. State that limitation on `/about`.
- Don't front the word "텐션감" in individual post titles or intros — readers don't search for it. Use it sparingly, explained in plain language when it appears at all.
- All pages fully statically generated (`generateStaticParams`, `output: 'export'` for Cloudflare Pages) — no runtime server rendering.
- Category chips must be real `<Link>`s to `/category/[slug]` pages, never client-side filtering (breaks SEO cluster structure).
- Max 3 ad slots per post, placed away from disclaimer/author/red-flag boxes.
- Don't apply for AdSense (Phase 6) before 20 published posts.

## Architecture (per SPEC.md §1–2, to be built)

- Next.js App Router, Markdown + frontmatter content in `content/posts/*.md`, parsed via `lib/posts.ts`.
- `'use client'` reserved for genuinely interactive pieces only (mobile menu, TOC scroll highlight).
- Pretendard served locally via `next/font/local`; images via `next/image`; no external font/CDN requests.
- Post frontmatter schema (title, description, slug, category, tags, publishedAt/updatedAt, coverImage, readingTime, references) is defined in `docs/SPEC.md` §5 and `docs/WRITING-GUIDE.md` §11 — follow it exactly, `description` (80–120 chars) is what renders as the search snippet and on post cards.
- Markdown body starts at `h2` (the page's only `h1` is rendered by the post template from frontmatter `title`) — this is load-bearing for both the auto-generated table of contents and SEO heading hierarchy.

## Content authoring workflow

When writing or editing a post, follow `docs/WRITING-GUIDE.md` in full (title format, heading order, tone/register, required sections including "흔한 오해 하나 바로잡기", internal linking rules between pillar and branch posts) and run through its pre-publish checklist before considering a post done. Publishing order follows `docs/CONTENT-PLAN.md`'s staged plan — branch posts first, pillar posts last per cluster, since pillar posts link out to all branch posts. The two existing sample posts in `content/posts/` predate the rebrand — re-check them against `docs/WRITING-GUIDE.md` (and drop any "한발짝"-era framing) before treating them as publish-ready.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
