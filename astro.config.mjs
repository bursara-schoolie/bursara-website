import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://bursara.com', output: 'static', trailingSlash: 'always', build: { format: 'directory' } });
