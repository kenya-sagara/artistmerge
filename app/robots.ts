import type { MetadataRoute } from "next";

// Required for `output: "export"` static export
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://artistmerge.jp/sitemap.xml",
    host: "https://artistmerge.jp",
  };
}
