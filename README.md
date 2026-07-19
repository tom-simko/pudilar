# Pudilar website

Static bilingual corporate website for Pudilar s. r. o., a privately held investment company based in Bratislava.

## Technology

- Astro with TypeScript
- Static output for GitHub Pages
- Shared components and typed English/Slovak content
- Local SVG assets and system font stacks; no external asset or analytics requests

## Local development

```bash
npm install
npm run dev
```

The development server is available at the URL printed by Astro.

## Production build and preview

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`. The project’s type check is available with `npm run check`.

## GitHub Pages deployment

`.github/workflows/deploy.yml` installs dependencies with `npm ci`, builds the site, uploads `dist/` using the official Pages artifact action, and deploys it with the official Pages deployment action. The workflow runs for pushes to `main` or `master` and can also be started manually.

The custom domain is stored in `public/CNAME` as `pudilar.com`. DNS is managed outside this repository.

## Content and legal details

English and Slovak homepage, navigation, footer and legal copy are stored in `src/content/site.ts`. Shared page structure is in `src/components/`, with route files in `src/pages/`. Update the legal company data in the `legalDetails` object in `src/content/site.ts` and keep the corresponding structured-data fields in sync if the company information changes.

## Privacy and hosting model

This site has no backend, database, CMS, authentication, analytics, advertising pixels, contact forms or form-processing service. It does not fetch financial or cryptocurrency prices and does not set non-essential cookies. All deployed output is static HTML, CSS, JavaScript and local assets.
