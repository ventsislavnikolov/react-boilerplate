import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['/sb-preview/runtime.js'],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      stories: '/src/stories',
    },
  },
});
