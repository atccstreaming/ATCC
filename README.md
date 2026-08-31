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
[ATCC 仁愛三角區華人教會](https://www.youtube.com/channel/UChNchT0M7AVIId48CS1mWBg)
(channel ID `UChNchT0M7AVIId48CS1mWBg`). The previous channel,
`@AgapeTriangleChineseChurch`, was taken down sometime before August 2026 — every
video ID that pointed there now 404s. If sermon links break again, check whether the
channel moved again before assuming a typo.

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

## Status (as of 2026-08-30)

- The old YouTube channel (`@AgapeTriangleChineseChurch`) went down; every sermon link
  on the site pointed to a dead video. Rebuilt the sermon list from the new channel
  (see above), which only had 6 full recordings available: **June 28, July 19, July 26,
  August 9, August 23, and August 30, 2026**. Everything before June 28 was removed
  since no replacement video exists for those Sundays.
- July 12, August 2, and August 16 have no full worship recording on the new channel
  (only orphaned highlights clips with no obvious date match) and are not listed, per
  the existing rule that a clip without a corresponding full recording isn't shown.
  Worth asking the church whether those recordings exist anywhere.
- Privacy policy and terms pages carry real content (replaced placeholders, July 2026);
  worth a review by the church.
- Favicons, apple-touch-icon, web manifest icons, and sitemap.xml are in place; the old
  committed build output was removed from the repo root.
