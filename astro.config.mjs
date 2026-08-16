import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shelfbee.app",
  outDir: "./docs",
  build: {
    format: "file",
  },
  vite: {
    server: {
      allowedHosts: true
    },
  },
});