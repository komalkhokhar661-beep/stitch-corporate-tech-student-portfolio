import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyToRootDist() {
  return {
    name: 'copy-to-root-dist',
    closeBundle() {
      try {
        const srcDir = path.resolve(__dirname, 'dist');
        const destDir = path.resolve(__dirname, '..', 'dist');
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true, force: true });
          console.log('✅ Successfully mirrored build output to root /dist');
        }
      } catch (err) {
        console.warn('Mirror to root dist warning:', err);
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), copyToRootDist()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://stitch-corporate-tech-student-portfolio.onrender.com',
        changeOrigin: true
      }
    }
  }
});
