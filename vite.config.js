import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        servers: resolve(__dirname, "servers/index.html"),
        cli: resolve(__dirname, "cli/index.html"),
        client: resolve(__dirname, "client/index.html"),
        serverLibraries: resolve(__dirname, "server-libraries/index.html"),
        oauth: resolve(__dirname, "oauth/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        terms: resolve(__dirname, "terms/index.html")
      }
    }
  }
});
