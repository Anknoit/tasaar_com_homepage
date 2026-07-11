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
at `/blog/<slug>/` (slug = filename without the numeric prefix). Frontmatter:

```markdown
---
title: The post title
category: networks | energy | ai | company
excerpt: One or two sentences shown on the card.
date: 2026-07-15
---

The post body, in plain markdown.
```

Optional fields: `cover:` picks the card artwork (constellation, waveform,
stack, route, spike, orbit, orbitLarge — defaults by category),
`featured: true` pins a post to the big featured slot, and `draft: true`
keeps a post as an unlinked "Coming soon" card with no page.

To publish: write the file, remove `draft: true`, add `date:`, commit and
push — Netlify rebuilds and the post is live. Newest published post is
featured automatically unless another is pinned.
