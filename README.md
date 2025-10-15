# Aleph Tav Fusions

Modern, static Next.js site for Aleph Tav Fusions — showcasing who we are, what we do, and how to get in touch.
LIVE at https://alephtavfusions.com/

## Overview

- Framework: Next.js App Router (static export)
- UI: React, CSS modules/plain CSS
- Output: Static site in `out/` (via `output: "export"`)
- Deployment: GitHub Pages (automated via GitHub Actions)

Key entry points:
- App layout: `src/app/layout.tsx`
- Landing page: `src/app/page.tsx`
- Components: `src/app/components/*`
- Global styles: `src/app/globals.css`, `src/app/styles/landing.css`
- Next config: `next.config.ts` (static export enabled)

## Getting Started

Prerequisites:
- Node.js 20+
- npm (or your preferred package manager)

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the static site into `out/`
- `npm run deploy` — Publish `out/` to the `gh-pages` branch using `gh-pages`

Notes:
- The project is configured for static export via `next.config.ts` (`output: "export"`, `images.unoptimized: true`, `trailingSlash: true`).

## Deployment (GitHub Pages)

This repo includes a workflow at `.github/workflows/deploy.yml` that:
1. Builds the site on push to `main`.
2. Exports static assets to `out/`.
3. Publishes `out/` to the `gh-pages` branch.

To enable Pages:
1. Push to `main` to trigger the workflow.
2. In your GitHub repository settings, go to “Pages”.
3. Select source: `Deploy from a branch` ➜ `gh-pages` ➜ `/ (root)`.

Alternative manual deploy:
```bash
npm run build
npm run deploy
```

If your site is served from a subpath (e.g., `https://<user>.github.io/<repo>/`), the current code uses relative links and unoptimized images which generally work without `basePath`. If you later introduce absolute paths, revisit `next.config.ts` accordingly.

## Project Structure

```
src/
  app/
    components/
      Navbar.tsx, Features.tsx, JoinUs.tsx, Contact.tsx, Footer.tsx
      *.css
    page.tsx
    layout.tsx
    globals.css
    styles/landing.css
public/
  logo.png, logo.svg, globe.svg, ...
```

## Customization

- Branding: Update logos in `public/` and references in components.
- Metadata: Edit site title/description in `src/app/layout.tsx`.
- Sections: Adjust copy in `src/app/components/*` and `src/app/page.tsx`.

## Troubleshooting

- Blank page on GitHub Pages: Ensure Pages is pointed at `gh-pages` and the workflow completed successfully.
- 404s on subpaths: Keep links relative or configure `basePath` if you introduce absolute routes.
- Images not loading: `images.unoptimized: true` is set; ensure paths are relative or hosted statically.

## Learn More

- Next.js Docs: https://nextjs.org/docs
- Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
