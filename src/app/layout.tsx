import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";
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
    default: "SiLak Davao | Swimming & Freediving Instruction in Davao",
    template: "%s | SiLak Davao",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "SiLak Davao | Swimming & Freediving Instruction in Davao",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero/reef-freediver.jpg",
        width: 1600,
        height: 1067,
        alt: "Freediver gliding over a coral reef in Davao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiLak Davao | Swimming & Freediving Instruction in Davao",
    description: SITE_DESCRIPTION,
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
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
