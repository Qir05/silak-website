import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview and development deployments must never be indexed; only the
  // production build invites crawlers and points them at the sitemap.
  const isNonProduction = Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";
  if (isNonProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
