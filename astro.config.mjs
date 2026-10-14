import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://doob-dofus.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
