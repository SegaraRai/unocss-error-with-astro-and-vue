import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  trailingSlash: 'never',
  integrations: [vue(), UnoCSS()],
});
