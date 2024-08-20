import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests
      '/api1': {
        target: 'https://serverapi-2.vercel.app', // The backend server URL
        changeOrigin: true,
        secure: false, // If the backend server is using HTTPS, set this to true
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: rewrite the URL path
      }
    }
  }
});
