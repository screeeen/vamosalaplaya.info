import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/vamosalaplaya.info/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        themorethemerrier: resolve(__dirname, 'themorethemerrier.html'),
      },
    },
  },
});
