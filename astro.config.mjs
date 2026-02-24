import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://atccstreaming.github.io',
  base: '/ATCC',
  integrations: [tailwind()],
});
