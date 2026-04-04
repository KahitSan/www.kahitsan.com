<h1 align="center">www.kahitsan.com</h1>

<p align="center">
  The marketing website for <a href="https://kahitsan.com">KahitSan</a>, built with SolidStart and deployed to Cloudflare Pages.
</p>

---

## Getting Started

```bash
npm install
npm run dev       # starts dev server on port 3457
npm run build     # builds static site with SSR prerendering
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and pushes the output to the `deploy` branch. Cloudflare Pages serves from the `deploy` branch.

## Based On

This project was bootstrapped with **[solidjs-crossplatform-starter](https://github.com/llupRisinglll/solidjs-crossplatform-starter)** -- a SolidJS starter for building cross-platform apps that share components across web, desktop, and mobile from a single codebase.
