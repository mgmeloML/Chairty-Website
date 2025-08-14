import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Chairty-Website/', // 👈 This is the important bit for GitHub Pages
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
      usePolling: true,
    },
  },
});
