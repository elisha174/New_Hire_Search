import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 4000, // Use Render's PORT or default to 4000
    host: true, // Allow external access (important for Render)
  },
});
