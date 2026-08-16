import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shelfbee.app",
  outDir: "./docs",
  build: {
    format: "preserve",
  },
  vite: {
    server: {
      allowedHosts: true
    },
  },
});