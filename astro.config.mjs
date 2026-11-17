// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sayantandutta.com',
  integrations: [
    sitemap({
      /**
       * The A/B variants and the review room already send `noindex`, so
       * listing them in the sitemap asked search engines to come and look at
       * pages that then tell them to go away. The sitemap is now just the
       * nine pages that are actually the site.
       */
      filter: (page) => !/\/(v|lab)\//.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});