import type { MetadataRoute } from "next";
import { works } from "@/lib/works";

// Required for `output: "export"` static export
export const dynamic = "force-static";

const SITE_URL = "https://artistmerge.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/why/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/platform/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/works/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/vision/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${SITE_URL}/works/${work.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...workPages];
}
