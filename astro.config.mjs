// @ts-check
import { defineConfig } from "astro/config";

// Hosting: GitHub Pages on the custom domain https://resiperlabs.com (owner
// decision, 2026-09-30). The deploy workflow sets SITE_URL and SITE_BASE=/;
// the local default keeps the /Resiper-Labs sub-path so base handling stays tested.
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
