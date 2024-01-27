import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['zod', 'react-dom', '@radix-ui/colors', '@radix-ui/react-toast'],
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
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
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    exclude: [...configDefaults.exclude, './tests/e2e/*'],
  },
});
