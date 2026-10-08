import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LightboxProvider } from "@/components/lightbox";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_DESCRIPTION,
  SOCIAL_IMAGE,
  SOCIAL_LINKS,
  SOCIAL_TITLE,
  openGraphFor,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | SiLak Davao",
  },
  description: SITE_DESCRIPTION,
  openGraph: openGraphFor("/"),
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SiLak Davao",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/silak-logo.png`,
  areaServed: {
    "@type": "City",
    name: "Davao City",
  },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LightboxProvider>
          <SiteHeader />
          <main className="flex-1 pt-20 lg:pt-24">{children}</main>
          <SiteFooter />
        </LightboxProvider>
      </body>
    </html>
  );
}
