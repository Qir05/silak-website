import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { LOCATION, NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper-dim">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logos/silak-logo.png"
                alt="SiLak Davao logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Swimming and freediving instruction in {LOCATION}, built around breath,
              safety, and confidence in the water.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
            <span className="eyebrow text-ink-soft">Explore</span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink hover:text-ocean-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <span className="eyebrow text-ink-soft">Connect</span>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-ocean-blue"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-ocean-blue"
            >
              Instagram
            </a>
            <span className="text-sm text-ink-soft">{LOCATION}</span>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-soft">
          © {year} {SITE_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
