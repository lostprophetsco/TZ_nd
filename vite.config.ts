import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
      include: ['**/src/assets/images/icons/**/*.svg'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
});
