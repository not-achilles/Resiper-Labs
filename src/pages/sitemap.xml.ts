import type { APIRoute } from "astro";
import { url } from "../lib/url";

const paths = ["/", "/capabilities/"];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("http://localhost");
  const entries = paths
    .map((p) => `  <url><loc>${new URL(url(p), origin).href}</loc></url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
