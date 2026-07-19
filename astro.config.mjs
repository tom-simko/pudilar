import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://pudilar.com',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
