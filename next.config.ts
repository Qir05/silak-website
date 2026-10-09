import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
// Vercel's preview toolbar is served from vercel.live; production never loads it.
const vercelLive = process.env.VERCEL_ENV === "preview" ? " https://vercel.live" : "";

/**
 * Content Security Policy. Next.js renders inline scripts for hydration on
 * statically generated pages, so script-src needs 'unsafe-inline' (nonces
 * would force every page to render dynamically). Everything else is locked
 * to this origin: fonts are self-hosted by next/font, images are served from
 * /_next/image or /images, and the site embeds no third-party frames.
 * (No upgrade-insecure-requests: every asset is same-origin and HSTS already
 * keeps the site on HTTPS.)
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}${vercelLive}`,
  `frame-src 'self'${vercelLive}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // The project's vercel.app alias would otherwise serve a full duplicate
      // of the site; send it to the canonical domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "silak-website.vercel.app" }],
        destination: "https://www.silakadventure.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
