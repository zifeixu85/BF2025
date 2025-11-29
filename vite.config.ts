import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Vercel's "Create React App" preset expects the output to be in 'build'
    // Vite defaults to 'dist', so we override it here.
    outDir: 'build',
  },
});