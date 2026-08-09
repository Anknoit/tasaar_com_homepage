# tasaar.com

Tasaar company site — Next.js (App Router), fully static export.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # writes plain HTML/CSS/JS to ./out
```

The site is exported statically (`output: 'export'` in next.config.mjs) —
no server and no serverless functions. Netlify builds with `npm run build`
and publishes `./out` (see netlify.toml).

## Structure

- `app/` — routes: `/` (home), `/blog`, `/blog/<slug>`, `/products/navnet`, `/products/platform3`
- `app/globals.css` — the entire design system (dark void + gold/teal/crimson tokens)
- `components/` — Nav, StatusBar, blog list, and client-side effect wrappers
- `lib/` — three.js scenes (hero starfield, product objects) and the blog loader
- `content/blog/*.md` — blog posts

## Writing a blog post

Every markdown file in `content/blog/` becomes a card on `/blog` and a page
at `/blog/<slug>/` (slug = filename without the numeric prefix).

For a complete Markdown parameter reference, template, and AI generation prompt, see [`BLOG_TEMPLATE.md`](./BLOG_TEMPLATE.md).

Frontmatter parameters:

```markdown
---
title: The post title
author: Ankit Jha
category: networks | energy | ai | company
excerpt: One or two sentences shown on the card.
date: 2026-07-15
featured: true
draft: false
coverImage: /blog-covers/nms_cover.png
tags: ["network monitoring", "observability"]
---
```

Optional fields: `cover:` picks the card artwork (constellation, waveform,
stack, route, spike, orbit, orbitLarge — defaults by category),
`coverImage:` points to a featured banner image URL (used on the post page & OpenGraph social cards),
`featured: true` pins a post to the featured slot, and `draft: true`
keeps a post as an unlinked "Coming soon" card with no page.

To publish: write the file in `content/blog/`, remove `draft: true`, add `date:`, commit and
push — Netlify rebuilds and the post is live. Newest published post is
featured automatically unless another is pinned.

