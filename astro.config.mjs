import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/Mywebsite',
  site: 'https://TheDevAlan.github.io',
  outDir: './docs',
  integrations: [mdx(), sitemap(), tailwind()]
});