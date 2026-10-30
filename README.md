# Kefday Café — website

A static, single-page site: no build step and no dependencies.

```
index.html              page markup and content
assets/css/styles.css   design system and layout
assets/js/main.js       nav, scroll reveals, menu tabs, live IST clock
assets/kefday-wordmark.svg   the KEFDAY wordmark, vector-traced from the logo
assets/favicon.svg      K monogram
```

## Run locally

```bash
python3 -m http.server 5180
```

Then open http://localhost:5180

## Before going live

- **Photos:** every image is a stock placeholder from Unsplash. Swap in Kefday's own photos (search `images.unsplash.com` in `index.html`).
- **Menu:** the items in `index.html` (under `<!-- Menu items -->`) are drafts built from dishes mentioned on Kefday's socials plus common café staples. Confirm them. The menu shows no prices on purpose; to add one later, see the example comment above the menu items.
- **Phone numbers:** `+91 96564 03757` (reservations / WhatsApp) and `+91 85904 94901` (celebrations) come from Kefday's Instagram. Check both are current.
- **Map:** the embed searches "Kefday Cafe, Mukkam Road, Areekode". Check that the pin lands on the café.

## Deploy

Upload the folder to any static host, such as Netlify (drag and drop), Vercel, GitHub Pages or Cloudflare Pages.
