import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  devOverlay: false,
  ssr: true,
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    // Static preset: no server, pure static files for Cloudflare Pages
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/spaces",
        "/panganiban",
        "/panganiban/pricing",
        "/diversion",
        "/community",
        "/announcements",
        "/announcement/pricing-update-nov-2025",
        "/account",
        "/404",
      ],
      crawlLinks: false,
    },
  },
});
