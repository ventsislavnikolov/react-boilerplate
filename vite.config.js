import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    {
      ...eslint({
        failOnWarning: true,
        failOnError: true,
      }),
      apply: 'build',
    },
    {
      ...eslint({
        failOnWarning: false,
        failOnError: true,
      }),
      apply: 'serve',
      enforce: 'post',
    },
  ],
  css: {
    postcss: {},
  },
  resolve: {
    alias: {
      store: '/src/store',
      assets: '/src/assets',
      router: '/src/router',
      stories: '/src/stories',
      components: '/src/components',
      translations: '/src/translations',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    exclude: [...configDefaults.exclude, './tests/e2e/*'],
  },
});
