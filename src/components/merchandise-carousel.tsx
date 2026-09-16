"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type FocusEvent as ReactFocusEvent,
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
const RESUME_DELAY_MS = 2000;
const DRAG_CLICK_THRESHOLD_PX = 8;

type PauseReason = "hover" | "pointer" | "drag" | "focus" | "lightbox";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MerchandiseCarousel({ products }: { products: MerchandiseProduct[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  // Independent pause reasons. Movement stays paused as long as ANY of
  // these is true; only once every reason has been cleared do we schedule
  // a resume. This replaces a single shared boolean, which was the root
  // cause of the marquee sometimes freezing forever: with one flag, an
  // unrelated event (e.g. focus returning to the clicked trigger when the
  // Lightbox closes) could silently cancel a resume that a DIFFERENT,
  // already-finished interaction (e.g. mouse leaving the strip) had
  // legitimately scheduled, with nothing left to ever re-trigger it.
  const reasonsRef = useRef<Record<PauseReason, boolean>>({
    hover: false,
    pointer: false,
    drag: false,
    focus: false,
    lightbox: false,
  });
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pointerActiveRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const suppressClickRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const capturedRef = useRef(false);

  const isAnyReasonActive = useCallback(() => {
    const r = reasonsRef.current;
    return r.hover || r.pointer || r.drag || r.focus || r.lightbox;
  }, []);

  const setReason = useCallback(
    (name: PauseReason, active: boolean) => {
      if (reasonsRef.current[name] === active) return;
      reasonsRef.current[name] = active;

      if (active) {
        // A new reason to pause always wins immediately: cancel any
        // countdown a previously-cleared reason had started.
        if (resumeTimerRef.current) {
          clearTimeout(resumeTimerRef.current);
          resumeTimerRef.current = null;
        }
        pausedRef.current = true;
        return;
      }

      // This reason is clear, but stay paused if any other reason is
      // still active - only the LAST reason to clear starts the countdown.
      if (isAnyReasonActive()) return;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        resumeTimerRef.current = null;
        if (!isAnyReasonActive()) pausedRef.current = false;
      }, RESUME_DELAY_MS);
    },
    [isAnyReasonActive],
  );

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

  // Ends a pointer interaction regardless of where the pointer physically
  // is: called both by the track's own onPointerUp/onPointerCancel AND by
  // window-level fallback listeners, so a release outside the carousel (or
  // a drag that leaves the track before capture engages) can never leave
  // the "pointer"/"drag" reasons stuck on.
  const finishPointerInteraction = useCallback(() => {
    if (capturedRef.current && pointerIdRef.current !== null && trackRef.current) {
      try {
        trackRef.current.releasePointerCapture(pointerIdRef.current);
      } catch {
        // Capture may already have been released natively; nothing to do.
      }
    }
    capturedRef.current = false;
    pointerIdRef.current = null;
    pointerActiveRef.current = false;
    setReason("pointer", false);
    setReason("drag", false);
  }, [setReason]);

  useEffect(() => {
    measure();
    lastTsRef.current = null;

    function tick(ts: number) {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!pausedRef.current && !prefersReducedMotion()) {
        offsetRef.current -= (SPEED_PX_PER_SEC * dt) / 1000;
        wrapOffset();
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const onLightboxOpen = () => setReason("lightbox", true);
    const onLightboxClose = () => {
      setReason("lightbox", false);
      // The Lightbox restores focus to the trigger button as part of
      // closing, and that focus can match :focus-visible even when the
      // Lightbox was opened by a mouse click - e.g. closing via the Escape
      // key makes the browser treat the immediately-following programmatic
      // focus as keyboard-originated. Whatever focus exists at the exact
      // moment the Lightbox closes is that restore, not an independent,
      // ongoing keyboard-navigation pause, so it's cleared here rather than
      // left for a blur that may never come.
      setReason("focus", false);
    };
    window.addEventListener(LIGHTBOX_OPEN_EVENT, onLightboxOpen);
    window.addEventListener(LIGHTBOX_CLOSE_EVENT, onLightboxClose);

    // Fallback net: guarantees "pointer"/"drag" always get cleared even if
    // the release happens outside the carousel, or a pointercancel fires
    // (e.g. the browser takes over a touch gesture as a page scroll).
    const onWindowPointerUp = () => finishPointerInteraction();
    const onWindowPointerCancel = () => finishPointerInteraction();
    window.addEventListener("pointerup", onWindowPointerUp);
    window.addEventListener("pointercancel", onWindowPointerCancel);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener(LIGHTBOX_OPEN_EVENT, onLightboxOpen);
      window.removeEventListener(LIGHTBOX_CLOSE_EVENT, onLightboxClose);
      window.removeEventListener("pointerup", onWindowPointerUp);
      window.removeEventListener("pointercancel", onWindowPointerCancel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    setReason("pointer", true);
    pointerActiveRef.current = true;
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
    if (!pointerActiveRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(delta);
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD_PX) {
      suppressClickRef.current = true;
      setReason("drag", true);
      if (!capturedRef.current && pointerIdRef.current !== null) {
        event.currentTarget.setPointerCapture(pointerIdRef.current);
        capturedRef.current = true;
      }
    }
    offsetRef.current = dragStartOffsetRef.current + delta;
    wrapOffset();
    applyTransform();
  };

  const onClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClickRef.current = false;
    }
  };

  // Only a genuinely keyboard-driven focus (Tab navigation) should pause
  // autoplay. Focus restored to a trigger button by the Lightbox closing
  // (after a mouse click opened it) is not ":focus-visible" in any modern
  // browser, so it's ignored here - otherwise that restored focus would
  // pause the marquee with nothing left to ever blur it and resume.
  const onFocus = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.matches(":focus-visible")) {
      setReason("focus", true);
    }
  };
  const onBlur = () => setReason("focus", false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setReason("hover", true)}
      onMouseLeave={() => setReason("hover", false)}
    >
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointerInteraction}
        onPointerCancel={finishPointerInteraction}
        onClickCapture={onClickCapture}
        onFocus={onFocus}
        onBlur={onBlur}
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
            <h3 className="h3-display mt-5 text-center">{product.label}</h3>
            <p className="prose-copy mx-auto mt-2 flex-1 text-center text-ink-soft">{product.description}</p>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center self-center rounded-sm border border-deep-ocean bg-deep-ocean px-6 py-3 text-sm font-medium tracking-wide text-paper transition-all duration-200 hover:-translate-y-px hover:bg-ocean-blue"
            >
              Message SiLak to Order
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
