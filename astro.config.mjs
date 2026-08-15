import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trendingshop.com.ar',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://trendingshop.com.ar/',
    }),
  ],
});
