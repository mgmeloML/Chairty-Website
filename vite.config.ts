import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    // Add watch options to ignore node_modules and reduce file watchers
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
      usePolling: true,
    },
  },
});