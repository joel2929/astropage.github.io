# joelmarte.com

A small personal site built with Astro and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The static site is generated in `dist/`. GitHub Actions publishes it whenever `main` is updated. Pages is enabled with **GitHub Actions** as the publishing source. The preview is hosted at `https://joel2929.github.io/astropage.github.io/`.

## Personalize

Edit the page copy and social links in `src/pages/index.astro`. Replace the generic profile text and social destinations with your details, and update the email address if needed. The project is built with a repository base path for previewing. Before attaching `joelmarte.com` to this repo, change `base` in `astro.config.mjs` to `/` and then move the custom domain setting from the existing Pages repo. Keep the Cloudflare DNS records pointed at GitHub Pages.
