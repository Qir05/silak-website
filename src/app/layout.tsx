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
  SOCIAL_TITLE,
  pageMetadata,
} from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { siteSchema } from "@/lib/schema";
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

// Defaults inherited by any route without its own metadata (e.g. the 404
// page). Every public page sets its own title, canonical and social tags.
const homeSocial = pageMetadata({
  path: "/",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  socialTitle: SOCIAL_TITLE,
  socialDescription: SOCIAL_DESCRIPTION,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | SiLak Davao",
  },
  description: SITE_DESCRIPTION,
  openGraph: homeSocial.openGraph,
  twitter: homeSocial.twitter,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink font-sans">
        <JsonLd data={siteSchema} />
        <LightboxProvider>
          <SiteHeader />
          <main className="flex-1 pt-20 lg:pt-24">{children}</main>
          <SiteFooter />
        </LightboxProvider>
      </body>
    </html>
  );
}
