export const SITE_NAME = "SiLak Davao";

export const SITE_DESCRIPTION =
  "Swimming and freediving instruction in Davao, focused on breath control, water safety, and aquatic confidence for beginners, families, and advanced divers.";

const PRODUCTION_SITE_URL = "https://www.silakadventure.com";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "production"
    ? PRODUCTION_SITE_URL
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

export const SITE_URL = rawSiteUrl;

export const SITE_TITLE = "SiLak Davao | Swimming & Freediving Instruction in Davao";

/** Title and description used for link previews (Open Graph and Twitter). */
export const SOCIAL_TITLE = "SiLak Davao | Swimming & Freediving School";
export const SOCIAL_DESCRIPTION =
  "Swimming and freediving lessons in Davao City, focused on confidence, safety, and progressive learning in the water.";

/** Dedicated 1200x630 social preview, cropped from the homepage hero photo. */
export const SOCIAL_IMAGE = {
  url: "/images/social/silak-social-preview-reef.jpg",
  width: 1200,
  height: 630,
  alt: "Freediver gliding over a coral reef in clear blue water",
};

/**
 * Shared Open Graph metadata. Every page uses the same title, description
 * and preview image; `path` sets og:url to that page's own canonical URL so
 * a shared subpage link is not treated as the homepage.
 */
export function openGraphFor(path: string) {
  return {
    type: "website" as const,
    siteName: SITE_NAME,
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: path,
    images: [SOCIAL_IMAGE],
  };
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/swimming", label: "Swimming" },
  { href: "/freediving", label: "Freediving" },
  { href: "/junior", label: "Junior" },
  { href: "/about", label: "About" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/instructor", label: "Instructor" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61557089507037",
  instagram: "https://www.instagram.com/silakadventures",
  instagramHandle: "@silakadventures",
} as const;

export const LOCATION = "Davao City, Philippines";
