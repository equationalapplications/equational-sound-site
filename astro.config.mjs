import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Staging: https://equationalapplications.github.io/equational-sound-site/
// Cutover (set in the deploy workflow env): SITE_ORIGIN=https://equationalsound.com SITE_BASE=/
const SITE_ORIGIN = process.env.SITE_ORIGIN ?? 'https://equationalapplications.github.io';
const SITE_BASE = process.env.SITE_BASE ?? '/equational-sound-site';

export default defineConfig({
  site: SITE_ORIGIN,
  base: SITE_BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
