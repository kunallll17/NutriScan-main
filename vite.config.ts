import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist/spa",
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    sourcemap: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  // Only include the Express plugin in development
  ...(mode === 'development' ? {
    plugins: [react(), expressPlugin()]
  } : {
    plugins: [react()]
  })
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      // Make sure API routes don't interfere with client-side routing
      server.middlewares.use((req, res, next) => {
        // Only handle API routes, let Vite handle the rest
        if (req.url?.startsWith("/api")) {
          app(req, res, next);
        } else {
          next();
        }
      });
    },
  };
}
