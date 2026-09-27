# Resiper Labs

Website for **Resiper Labs Private Limited**, an engineering-led technology company working across infrastructure, cyber security, applications, data, AI and connected industrial systems.

Live: https://not-achilles.github.io/Resiper-Labs/

## Stack

- [Astro](https://astro.build) (static output) and TypeScript
- Hand-authored CSS with design tokens (`src/styles/tokens.css`)
- Self-hosted fonts (Newsreader, Hanken Grotesk, IBM Plex Mono; SIL Open Font License)
- No UI framework and minimal JavaScript

## Develop

```bash
npm ci
npm run dev
```

The dev server serves the site under the base path, at `http://localhost:4321/Resiper-Labs/`.

## Checks

```bash
npm run ci
```

This runs the type check, the formatting check and a production build.

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).

To use a custom domain later, set `SITE_URL` (for example `https://resiperlabs.com`) and `SITE_BASE=/` in the workflow, then configure the domain in the repository's Pages settings.

## Content

Copy lives in `src/content/site.ts`.
