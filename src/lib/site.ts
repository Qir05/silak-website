export const SITE_NAME = "SiLak Davao";

export const SITE_DESCRIPTION =
  "Swimming and freediving instruction in Davao, focused on breath control, water safety, and aquatic confidence for beginners, families, and advanced divers.";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const SITE_URL = rawSiteUrl;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/swimming", label: "Swimming" },
  { href: "/freediving", label: "Freediving" },
  { href: "/junior", label: "Junior" },
  { href: "/about", label: "About" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61557089507037",
  instagram: "https://www.instagram.com/silakadventures",
  instagramHandle: "@silakadventures",
} as const;

export const LOCATION = "Davao City, Philippines";
