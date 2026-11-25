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

The static site is generated in `dist/`. GitHub Actions publishes it whenever `main` is updated. In the repository settings, enable **Pages → Build and deployment → GitHub Actions**. The `public/CNAME` file keeps the custom domain attached on deployment; confirm the matching DNS records at your domain provider.

## Personalize

Edit the page copy and social links in `src/pages/index.astro`. Replace the generic profile text and social destinations with your details, and update the email address if needed. The project is configured for the custom domain `joelmarte.com`, so no repository-specific `base` path is needed.
