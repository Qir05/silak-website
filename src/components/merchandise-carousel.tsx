"use client";

import { useCallback, useEffect, useRef } from "react";
import { LightboxTrigger } from "./lightbox-trigger";
import { LIGHTBOX_CLOSE_EVENT, LIGHTBOX_OPEN_EVENT } from "./lightbox";
import { SOCIAL_LINKS } from "@/lib/site";
import type { MerchandiseProduct } from "@/lib/merchandise";

const AUTOPLAY_INTERVAL_MS = 4000;
const RESUME_DELAY_MS = 4500;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getStep(track: HTMLDivElement) {
  const card = track.querySelector<HTMLElement>("[data-carousel-card]");
  if (!card) return track.clientWidth * 0.8;
  const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
  return card.getBoundingClientRect().width + gap;
}

export function MerchandiseCarousel({ products }: { products: MerchandiseProduct[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayId = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lightboxOpen = useRef(false);

  const clearResumeTimer = useCallback(() => {
    if (resumeId.current) {
      clearTimeout(resumeId.current);
      resumeId.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (prefersReducedMotion() || autoplayId.current || lightboxOpen.current) return;
    autoplayId.current = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: getStep(track), behavior: "smooth" });
      }
    }, AUTOPLAY_INTERVAL_MS);
  }, []);

  // Stops autoplay immediately and cancels any pending auto-resume, so a new
  // interaction always wins over a previous one that hadn't resumed yet.
  const pause = useCallback(() => {
    clearResumeTimer();
    if (autoplayId.current) {
      clearInterval(autoplayId.current);
      autoplayId.current = null;
    }
  }, [clearResumeTimer]);

  // Called whenever an interaction *ends*. Schedules autoplay to pick back
  // up a short while later, unless reduced motion or the lightbox is open
  // (in which case the lightbox-close handler is what resumes it).
  const scheduleResume = useCallback(() => {
    if (prefersReducedMotion() || lightboxOpen.current) return;
    clearResumeTimer();
    resumeId.current = setTimeout(startAutoplay, RESUME_DELAY_MS);
  }, [clearResumeTimer, startAutoplay]);

  useEffect(() => {
    startAutoplay();

    const onLightboxOpen = () => {
      lightboxOpen.current = true;
      pause();
    };
    const onLightboxClose = () => {
      lightboxOpen.current = false;
      scheduleResume();
    };
    window.addEventListener(LIGHTBOX_OPEN_EVENT, onLightboxOpen);
    window.addEventListener(LIGHTBOX_CLOSE_EVENT, onLightboxClose);

    return () => {
      pause();
      window.removeEventListener(LIGHTBOX_OPEN_EVENT, onLightboxOpen);
      window.removeEventListener(LIGHTBOX_CLOSE_EVENT, onLightboxClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    if (direction === 1 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === -1 && track.scrollLeft <= 4) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: direction * getStep(track), behavior: "smooth" });
  };

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={scheduleResume}
      onPointerDown={pause}
      onPointerUp={scheduleResume}
      onFocus={pause}
      onBlur={scheduleResume}
    >
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous product"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink/20 text-ink transition-colors hover:border-deep-ocean hover:text-deep-ocean"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next product"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink/20 text-ink transition-colors hover:border-deep-ocean hover:text-deep-ocean"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {products.map((product) => (
          <div
            key={product.slug}
            data-carousel-card
            className="w-[85%] flex-shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
          >
            <LightboxTrigger
              images={product.images}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
              className="aspect-square"
              fit={product.imageFit}
            />
            <h3 className="h3-display mt-5">{product.label}</h3>
            <p className="prose-copy mt-2 text-ink-soft">{product.description}</p>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-sm border border-deep-ocean bg-deep-ocean px-6 py-3 text-sm font-medium tracking-wide text-paper transition-all duration-200 hover:-translate-y-px hover:bg-ocean-blue"
            >
              Message SiLak to Order
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
