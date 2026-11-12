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

The alpha is published by direct asset upload to Pages. Native Git deployment requires the Cloudflare GitHub application to be installed for the `bursara-schoolie` organisation. Once connected, use build command `npm run build`, output directory `dist`, and root directory `/`.

Company contact links use the published Streak Technologies support email and telephone numbers. The website contains no contact form, advertising scripts, or application credentials.
