import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Ensure proper SPA routing in development
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        bypass: (req) => {
          // Return index.html for all non-asset requests
          if (!req.url.includes('.')) {
            return '/index.html';
          }
        },
      },
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));