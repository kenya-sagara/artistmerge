// Prefix a static asset path (e.g. /images/foo.jpg) with the configured basePath.
// Required for next/image with unoptimized:true under output:'export' + basePath,
// since Next.js does not auto-prepend basePath to public/ assets in that mode.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) path = "/" + path;
  return `${base}${path}`;
}
