import type { Metadata } from "next";

export const SITE_NAME = "SiLak Davao";

export const SITE_DESCRIPTION =
  "SiLak Davao is a swimming and freediving school in Davao City, Philippines, offering survival swimming lessons and Molchanovs freediving courses for all levels.";

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

export const SITE_TITLE = "SiLak Davao | Swimming & Freediving School in Davao City";

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
 * Full metadata for one page: a unique title and description, its canonical
 * URL, and matching Open Graph / Twitter tags with the shared preview image.
 * og:url is the page's own canonical URL so a shared subpage is not treated
 * as the homepage. The homepage passes the approved social title/description.
 */
export function pageMetadata({
  path,
  title,
  description,
  socialTitle = title,
  socialDescription = description,
}: {
  path: string;
  title: string;
  description: string;
  socialTitle?: string;
  socialDescription?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_PH",
      title: socialTitle,
      description: socialDescription,
      url: path,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [SOCIAL_IMAGE],
    },
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
