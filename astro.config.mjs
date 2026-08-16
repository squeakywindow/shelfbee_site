import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shelfbee.app",
  outDir: "./docs",
  vite: {
    server: {
      allowedHosts: true
    },
  },
});