import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joelmarte.com',
  base: '/',
  build: { format: 'preserve' },
  integrations: [sitemap()],
});
