import devtools from "solid-devtools/vite";
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  devOverlay: false,
  ssr: process.argv.includes("build"),
  vite: {
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
      imagetools({
        defaultDirectives: (url) => {
          // Only process local image files, not external URLs
          if (url.searchParams.has("w")) {
            return new URLSearchParams({
              format: "avif;webp",
              quality: "80",
              as: "picture",
            });
          }
          return new URLSearchParams();
        },
      }),
    ],
    // @kahitsan/ksui ships SolidJS .tsx source (the `solid` export condition),
    // so vite-plugin-solid must compile it rather than esbuild pre-bundling it,
    // and solid-js must resolve to a single instance.
    resolve: { dedupe: ["solid-js"] },
    ssr: { noExternal: ["@kahitsan/ksui"] },
    optimizeDeps: { exclude: ["@kahitsan/ksui"] },
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
