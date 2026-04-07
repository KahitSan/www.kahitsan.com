import devtools from "solid-devtools/vite";
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  devOverlay: false,
  ssr: process.argv.includes("build"),
  vite: {
    define: {
      "import.meta.env.VITE_API_URL": JSON.stringify(
        process.env.VITE_API_URL || "http://localhost:4001",
      ),
      "import.meta.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY || ""),
    },
    plugins: [
      devtools({
        autoname: true,
        locator: {
          targetIDE: "vscode",
          componentLocation: true,
          jsxLocation: true,
        },
      }),
      tailwindcss(),
    ],
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
