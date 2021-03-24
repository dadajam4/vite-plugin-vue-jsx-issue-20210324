import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import vueJsx from './.customs/plugin-vue-jsx'; // Use fixed plugin.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const viteSSR = require('vite-ssr/plugin');

export default defineConfig({
  plugins: [viteSSR(), vue(), vueJsx()],
});
