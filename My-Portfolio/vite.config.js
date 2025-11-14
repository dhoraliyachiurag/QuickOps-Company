// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/QuickOps-Company',
});
