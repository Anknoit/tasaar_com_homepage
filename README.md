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

- `app/` — routes: `/` (home), `/blog`, `/products/navnet`, `/products/platform3`
- `app/globals.css` — the entire design system (dark void + gold/teal/crimson tokens)
- `components/` — Nav, StatusBar, blog list, and client-side effect wrappers
- `lib/` — three.js scenes (hero starfield, product objects)
- Blog posts are placeholder data in `components/BlogList.js` for now
