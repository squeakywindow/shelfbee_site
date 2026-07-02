import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shelfbee.app",
  vite: {
    server: {
      allowedHosts: true
    },
  },
});