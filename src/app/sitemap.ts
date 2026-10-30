import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// URLs only. lastmod is deliberately omitted: this site has no per-page
// modification record, and a build-time timestamp would tell search engines
// every page changed on every deploy, which is untrue and teaches them to
// ignore the field.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/freediving",
    "/swimming",
    "/junior",
    "/instructor",
    "/about",
    "/reviews",
    "/book",
    "/merchandise",
  ];

  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
