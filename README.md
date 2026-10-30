# Kefday Café — website

A one-page Next.js site (App Router, TypeScript) for Kefday Café, Areekode.

```
app/layout.tsx          fonts (next/font), metadata, root HTML
app/page.tsx            page assembly + JSON-LD for search engines
app/globals.css         design system and layout
app/icon.svg            favicon (K monogram)
app/opengraph-image.jpg link-preview image
components/             one file per section (Hero, Story, Menu, …)
lib/site.ts             address, phone numbers, links — edit contact details here
lib/menu.ts             menu categories and items — edit the menu here
public/                 wordmark SVG and logo
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://kefday.in`) so link previews use the right domain.

## Before going live

- **Photos:** every image is a stock placeholder from Unsplash (`unsplash(...)` calls in `components/` and `lib/menu.ts`). Put Kefday's own photos in `public/` and point those `src` values at them, for example `/photos/latte.jpg`. Once no Unsplash images remain, delete `images.remotePatterns` in `next.config.ts`.
- **Menu:** the items in `lib/menu.ts` are drafts built from dishes mentioned on Kefday's socials plus common café staples. Confirm them. The menu shows no prices on purpose; to add one later, give an item a `price`, for example `price: '₹180'`.
- **Phone numbers:** `+91 96564 03757` (reservations / WhatsApp) and `+91 85904 94901` (celebrations) come from Kefday's Instagram. Check both are current.
- **Map:** the embed searches "Kefday Cafe, Mukkam Road, Areekode". Check that the pin lands on the café.

## Deploy

Vercel is the simplest option: import the GitHub repo and it deploys with no settings. Netlify and Cloudflare Pages also support Next.js.
