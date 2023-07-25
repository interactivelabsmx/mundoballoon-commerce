/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.tsx',
    alias: [{ find: /^(.*)\.graphql$/, replacement: '$1.graphql.ts' }],
    coverage: {
      lines: 10,
      statements: 10,
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
      '@graphql': path.resolve(__dirname, './graphql'),
      '@hooks': path.resolve(__dirname, './hooks'),
      '@layouts': path.resolve(__dirname, './layouts'),
      '@lib': path.resolve(__dirname, './lib'),
      '@pages': path.resolve(__dirname, './pages'),
      '@providers': path.resolve(__dirname, './providers'),
      'firebase-admin': path.resolve(
        __dirname,
        './/node_modules/firebase-admin/lib',
      ),
    },
  },
});
