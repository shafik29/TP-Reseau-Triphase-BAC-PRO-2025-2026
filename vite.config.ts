import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TP-Reseau-Triphase-BAC-PRO-2025-2026/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
