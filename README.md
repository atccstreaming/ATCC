# ATCC Web

Bilingual (中文 / English) website for 仁爱三角区华人教会 · Agape Triangle Chinese Church, Raleigh NC.
Built with Astro 4 + Tailwind 3, deployed on GitHub Pages at
https://www.agapetrianglechinesechurch.org

## Dev

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Where content lives

- `src/content/site.ts` — church info shared across pages: name, address, phone, email,
  meeting times, mission, beliefs, leader bio (both locales).
- `src/content/sermons.ts` — the Sunday worship video list. Both the Chinese and English
  sermon pages render from this one file.
- `src/pages/*.astro` — Chinese pages; `src/pages/en/*.astro` — English mirrors.
- `public/` — static assets (icons, images, sitemap.xml, robots.txt, CNAME).

## Updating sermon videos (most common task)

Videos are uploaded to the YouTube channel
[@AgapeTriangleChineseChurch](https://www.youtube.com/@AgapeTriangleChineseChurch).
Each Sunday usually gets a full worship recording (titled `主日崇拜 ｜ YYYY年M月D号`)
plus a condensed highlights clip (浓缩短片) named after the message.

To add a Sunday, prepend one entry to `sundayWorship` in `src/content/sermons.ts`
(newest first):

- `url` — the full worship recording; `summary` — the message title (usually in the
  video's YouTube description), with an English translation.
- `clip` — the matching highlights video, if one exists. Match clips to Sundays by
  publish date and title.
- Entry titles use `日` (e.g. `2026年7月5日`), not the `号` used on YouTube.
- Highlights clips that have **no** corresponding full worship recording are not listed.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it via GitHub Pages (takes ~1–2 minutes).

**Important:** the repo's Pages setting (Settings → Pages → Build and deployment →
Source) must be **"GitHub Actions"**. If it is ever switched to "Deploy from a branch",
every deploy fails (GitHub tries to Jekyll-build the raw Astro source and errors with
`Invalid YAML front matter`) while the site silently keeps serving the last good deploy.
Only the repository owner account can change this setting. This happened once in
July 2026.

## Status (as of 2026-07-06)

- Sermon list is current through the **July 5, 2026** service; 13 Sundays have paired
  highlights clips (Mar 8 and Feb 15 recordings have none).
- Privacy policy and terms pages carry real content (replaced placeholders, July 2026);
  worth a review by the church.
- Favicons, apple-touch-icon, web manifest icons, and sitemap.xml are in place; the old
  committed build output was removed from the repo root.
