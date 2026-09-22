import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bjbeyond.pro";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tech/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/tech/ultrahuman-ring-pro/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
