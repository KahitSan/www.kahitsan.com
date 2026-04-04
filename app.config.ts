import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  devOverlay: false,
  ssr: process.argv.includes("build"),
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    // Static preset: no server, pure static files for Cloudflare Pages
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/solutions",
        "/community",
        "/announcements",
        "/announcement/pricing-update-nov-2025",
        "/terms",
        "/privacy",
        "/about",
        "/contact",
        "/404",
      ],
      crawlLinks: false,
    },
  },
});
