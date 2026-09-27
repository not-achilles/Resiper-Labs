// @ts-check
import { defineConfig } from "astro/config";

// Hosting: GitHub Pages project site at https://<owner>.github.io/Resiper-Labs/
// (owner decision, 2026-09-27). To move to a custom domain later, set
// SITE_URL=https://resiperlabs.com and SITE_BASE=/ in the deploy workflow.
/** @type {Record<string, string | undefined>} */
const env = /** @type {any} */ (globalThis).process?.env ?? {};
const SITE_URL = env["SITE_URL"];
const SITE_BASE = env["SITE_BASE"] ?? "/Resiper-Labs";

export default defineConfig({
  ...(SITE_URL ? { site: SITE_URL } : {}),
  base: SITE_BASE,
  output: "static",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  devToolbar: { enabled: false },
});
