import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access to the app on your local network
  },
  build: {
    outDir: 'dist', // Ensure this matches your publish directory on Netlify
    sourcemap: true, // Enable sourcemaps for debugging (optional)
  },
  // Add any other configurations you might need
});
