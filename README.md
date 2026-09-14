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
[Agape Triangle Chinese Church 仁爱三角区华人教会](https://www.youtube.com/channel/UC5YlBdzDiyQZmmMvbHmH-rg)
(channel ID `UC5YlBdzDiyQZmmMvbHmH-rg`, handle `@AgapeTriangleChineseChurch`). This is
actually the **original** channel: it appeared dead in August 2026 (every video 404'd
via oEmbed), so the church switched to an interim channel
(`UChNchT0M7AVIId48CS1mWBg`, "ATCC 仁愛三角區華人教會") — but as of September 2026 the
original channel is back, with its full upload history intact back to February 2026
(more than the interim channel ever had), plus new uploads through September 13. The
interim channel's individual videos have meanwhile started going private one at a
time. If sermon links break again, don't assume a typo or a dead channel — check
**both** channel IDs' RSS feeds
(`https://www.youtube.com/feeds/videos.xml?channel_id=<id>`) or uploads playlists
(`https://www.youtube.com/playlist?list=UU<id-without-UC-prefix>`); a channel that
looked dead before may have come back.

When matching a highlights clip to its Sunday, don't rely on upload-order adjacency
alone — clips and full recordings aren't always adjacent in the uploads list, and a
gap Sunday (no full recording at all) can leave an orphaned clip sitting next to an
unrelated week's entry. Confirm with actual metadata instead:

- Compare each full recording's description text (`curl -s
  "https://www.youtube.com/watch?v=<id>" | grep -o '"shortDescription":"[^"]*"'`)
  against candidate clip titles.
- When descriptions are empty or ambiguous, compare `publishDate` instead (`curl -s
  "https://www.youtube.com/watch?v=<id>" | grep -o '"publishDate":"[^"]*"'`) — a clip
  published the same week as a full recording belongs to it, regardless of where it
  sits in upload order (uploads happen in batches, out of calendar order).

This caught two real bugs when rebuilding the list in September 2026: the site's July
19 entry was paired with a clip for an unrelated, unidentified Sunday; and an
adjacency-only guess would have wrongly assigned a clip actually published the week of
March 8 to February 22 instead. `publishDate` matching also revealed that April 26,
2026 genuinely got **two** highlight clips (both published the same day) — hence
`clips` being an array, not a single optional field.

Each Sunday usually gets a full worship recording (titled `主日崇拜 ｜ YYYY年M月D号`)
plus a condensed highlights clip (浓缩短片) named after the message — occasionally more
than one clip, rarely (so far) zero.

To add a Sunday, prepend one entry to `sundayWorship` in `src/content/sermons.ts`
(newest first):

- `url` — the full worship recording; `summary` — the message title (usually in the
  video's YouTube description), with an English translation.
- `clips` — an array of matching highlights videos (usually zero or one entry; see
  above for when there's more than one). Match by description or publish date, not
  position.
- Entry titles use `日` (e.g. `2026年7月5日`), not the `号` used on YouTube.
- Highlights clips that have **no** corresponding full worship recording are not
  listed. Known gap Sundays with no full recording at all (as of 2026-09-13): March 1,
  March 29, April 5, August 16, 2026.
- The sermons pages group entries by month (`getSundayWorshipByMonth` in
  `sermons.ts`) for a more compact layout — no action needed when adding an entry,
  grouping is automatic from each entry's `date`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it via GitHub Pages (takes ~1–2 minutes).

**Important:** the repo's Pages setting (Settings → Pages → Build and deployment →
Source) must be **"GitHub Actions"**. If it is ever switched to "Deploy from a branch",
every deploy fails (GitHub tries to Jekyll-build the raw Astro source and errors with
`Invalid YAML front matter`) while the site silently keeps serving the last good deploy.
Only the repository owner account can change this setting. This happened once in
July 2026.

## Status (as of 2026-09-13)

- The channel the church was using since late August
  (`UChNchT0M7AVIId48CS1mWBg`) started losing individual videos to "private" — the
  September 6 and August 30 full recordings and the August 30, September 6, and July
  19 highlight clips had all gone private. Meanwhile the *original* channel
  (`UC5YlBdzDiyQZmmMvbHmH-rg`), previously thought dead, turned out to be back with
  its full history intact (see above). Rebuilt the sermon list from that channel.
- The list now runs the full available archive, **February 15 through September 13,
  2026** (25 Sundays) — initially rebuilt only back to June 28, but extended to the
  full archive per a follow-up request. July 5, July 12, and August 2 have full
  recordings on the new channel that didn't exist before and were added; so do all of
  February–June. March 1, March 29, April 5, and August 16 still have no full
  recording anywhere and remain unlisted (April 26 has an orphaned clip from one of
  these gap Sundays' near-neighbors — see the description/publish-date matching notes
  above). August 23 has no equivalent on the new channel, so that entry still points
  at the old channel (`h4CX9fytNsk`), which is still playable — worth rechecking next
  time links break.
- Found and fixed two mismatched clips from a previous rebuild: the July 19 entry was
  paired with a clip for an unrelated Sunday, and a naive adjacency guess for the
  archive extension would have wrongly assigned a clip actually published the week of
  March 8 to February 22 instead. See the matching method notes above.
- The sermon list UI was redesigned for compactness (25 entries no longer fit
  comfortably as large cards): grouped by month, one slim row per Sunday instead of a
  padded card, with the day number/abbreviation on the left and small pill links
  (full recording + clip(s)) on the right. `sermons.ts`'s `clips` is now an array per
  entry (was a single optional `clip`) to support Sundays with more than one recap
  clip.
- Privacy policy and terms pages carry real content (replaced placeholders, July 2026);
  worth a review by the church.
- Favicons, apple-touch-icon, web manifest icons, and sitemap.xml are in place; the old
  committed build output was removed from the repo root.
