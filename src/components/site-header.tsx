"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-paper/95 backdrop-blur-sm border-b border-ink/10"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="SiLak Davao home">
          <Image
            src="/logos/silak-logo.png"
            alt="SiLak Davao logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
        </Link>

        <nav
          className={`hidden items-center gap-8 md:flex ${
            transparent ? "text-white" : "text-ink"
          }`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors hover:opacity-70"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/book"
            className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 border ${
              transparent
                ? "border-white text-white hover:bg-white hover:text-deep-ocean"
                : "border-deep-ocean bg-deep-ocean text-paper hover:bg-ocean-blue hover:border-ocean-blue"
            }`}
          >
            Book a Session
          </Link>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center md:hidden ${
            transparent ? "text-white" : "text-ink"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-ink/10 bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-3 inline-flex items-center justify-center border border-deep-ocean bg-deep-ocean px-6 py-3.5 text-sm font-medium tracking-wide text-paper"
            >
              Book a Session
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
