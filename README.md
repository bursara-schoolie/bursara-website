# Bursara website

Bursara’s navy product website, built with Astro and hosted on Cloudflare Pages. A product by [Streak Technologies Ltd](https://streaktechnologies.com).

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Use Node.js 24 or newer. The static build output is `dist/`. Generated files and credentials are excluded from Git.

## Hosting

- Public site: https://bursara.com
- Pages project: `bursara-website`
- Production branch: `main`
- Application: https://app.bursara.com

Pushing `main` to GitHub triggers an automatic Cloudflare Pages build and production deployment. The connected repository is `bursara-schoolie/bursara-website`. Pages uses Node.js 24, build command `npm run build`, output directory `dist`, and root directory `/`.

Company contact links use the published Streak Technologies support email and telephone numbers. The website contains no contact form, advertising scripts, or application credentials.

## Product pages and help

Product and institution content is defined in `src/data/pages.ts` and rendered at readable directory URLs. Shared metadata, navigation and footer live in `src/layouts/Site.astro` and `src/components/`.

The illustrated user guide reads `src/data/manual-chapters.json`. Its index is `/help/`; each chapter has `/help/<slug>/`. Guide screenshots are public files under `/help/images/`, and the complete manual is `/downloads/bursara-user-manual.pdf`; the self-contained offline edition is `/downloads/bursara-user-manual.html`.

`/sitemap.xml` is generated from product and guide data. URLs use trailing slashes. The 404 page is excluded from indexing. The build includes a `bursara-release` metadata value from `CF_PAGES_COMMIT_SHA` for deployment verification.
