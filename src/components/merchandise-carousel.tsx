"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { LightboxTrigger } from "./lightbox-trigger";
import { LIGHTBOX_CLOSE_EVENT, LIGHTBOX_OPEN_EVENT } from "./lightbox";
import { SOCIAL_LINKS } from "@/lib/site";
import type { MerchandiseProduct } from "@/lib/merchandise";

// Continuous right-to-left marquee, driven by requestAnimationFrame rather
// than a stepping interval. Speed is a constant px/sec, so one full loop
// (the width of a single, non-duplicated product sequence) naturally lands
// around 25-40s depending on viewport width and card size, without needing
// per-breakpoint timing.
const SPEED_PX_PER_SEC = 50;
const RESUME_DELAY_MS = 4500;
const DRAG_CLICK_THRESHOLD_PX = 8;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MerchandiseCarousel({ products }: { products: MerchandiseProduct[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const suppressClickRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const capturedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lightboxOpenRef = useRef(false);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // The track renders two back-to-back copies of the product sequence, so
    // one copy's width is half the full scrollWidth.
    loopWidthRef.current = track.scrollWidth / 2;
  }, []);

  const wrapOffset = useCallback(() => {
    const loopWidth = loopWidthRef.current;
    if (loopWidth <= 0) return;
    // The second copy is pixel-identical to the first, so crossing this
    // boundary in either direction is visually seamless.
    while (offsetRef.current <= -loopWidth) offsetRef.current += loopWidth;
    while (offsetRef.current > 0) offsetRef.current -= loopWidth;
  }, []);

  const pause = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    pausedRef.current = true;
  }, []);

  const scheduleResume = useCallback(() => {
    if (lightboxOpenRef.current) return;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      resumeTimerRef.current = null;
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    measure();
    lastTsRef.current = null;

    function tick(ts: number) {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!pausedRef.current && !draggingRef.current && !lightboxOpenRef.current && !prefersReducedMotion()) {
        offsetRef.current -= (SPEED_PX_PER_SEC * dt) / 1000;
        wrapOffset();
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const onLightboxOpen = () => {
      lightboxOpenRef.current = true;
      pause();
    };
    const onLightboxClose = () => {
      lightboxOpenRef.current = false;
      scheduleResume();
    };
    window.addEventListener(LIGHTBOX_OPEN_EVENT, onLightboxOpen);
    window.addEventListener(LIGHTBOX_CLOSE_EVENT, onLightboxClose);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener(LIGHTBOX_OPEN_EVENT, onLightboxOpen);
      window.removeEventListener(LIGHTBOX_CLOSE_EVENT, onLightboxClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pause();
    draggingRef.current = true;
    dragDistanceRef.current = 0;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    pointerIdRef.current = event.pointerId;
    // Pointer capture is deferred until real drag motion is confirmed
    // (see onPointerMove): capturing eagerly here retargets the browser's
    // synthesized `click` event to this wrapper for every tap, which would
    // silently break "click a product image to open the Lightbox".
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(delta);
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD_PX) {
      suppressClickRef.current = true;
      if (!capturedRef.current && pointerIdRef.current !== null) {
        event.currentTarget.setPointerCapture(pointerIdRef.current);
        capturedRef.current = true;
      }
    }
    offsetRef.current = dragStartOffsetRef.current + delta;
    wrapOffset();
    applyTransform();
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (capturedRef.current && pointerIdRef.current !== null) {
      event.currentTarget.releasePointerCapture(pointerIdRef.current);
    }
    capturedRef.current = false;
    pointerIdRef.current = null;
    draggingRef.current = false;
    scheduleResume();
  };

  const onClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClickRef.current = false;
    }
  };

  return (
    <div className="relative overflow-hidden" onMouseEnter={pause} onMouseLeave={scheduleResume}>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onFocus={pause}
        onBlur={scheduleResume}
        className="flex touch-pan-y select-none gap-6 will-change-transform"
      >
        {[...products, ...products].map((product, i) => (
          <div
            key={`${product.slug}-${i}`}
            data-carousel-card
            className="flex w-[85%] flex-shrink-0 flex-col sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
          >
            <LightboxTrigger
              images={product.images}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
              className="aspect-square"
              fit={product.imageFit}
            />
            <h3 className="h3-display mt-5">{product.label}</h3>
            <p className="prose-copy mt-2 flex-1 text-ink-soft">{product.description}</p>
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
