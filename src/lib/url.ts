/**
 * Prefix a root-relative path with the configured base path, so internal links
 * work both at a domain root and under a sub-path such as /Resiper-Labs/.
 * Fragment-only and absolute URLs are returned unchanged.
 */
export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
