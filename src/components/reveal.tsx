"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  durationMs,
  distancePx,
  scale = false,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  /** Transition duration in ms. Defaults to 1150ms for images, 1000ms for text. */
  durationMs?: number;
  /** Initial vertical offset in px. Defaults to 32px for images, 44px for text. */
  distancePx?: number;
  /** Apply a very subtle initial scale-up, intended for large editorial imagery. */
  scale?: boolean;
  /** The delay staggers items that sit side by side. Phones stack those
   * items so each enters view on its own, and the delay is skipped there. */
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Phones trigger later: on a short viewport, firing at the bottom 8% means
    // the animation plays out on a sliver of screen the reader isn't looking
    // at yet. Below 768px, wait until the element's top passes 82% of the
    // viewport height.
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const triggerInset = mobile ? 0.18 : 0.08;

    // Already in view (or already scrolled past) on mount, e.g. above-the-fold
    // content, a same-page anchor jump, or a restored scroll position: reveal
    // immediately instead of waiting on an intersection that may never re-fire.
    const triggerLine = window.innerHeight * (mobile ? 1 - triggerInset : 1);
    if (node.getBoundingClientRect().top < triggerLine) {
      setVisible(true);
      return;
    }

    const observers: IntersectionObserver[] = [];
    const watch = (
      isReady: (entry: IntersectionObserverEntry) => boolean,
      options: IntersectionObserverInit,
    ) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (!isReady(entry)) return;
        setVisible(true);
        observers.forEach((o) => o.disconnect());
      }, options);
      observer.observe(node);
      observers.push(observer);
    };

    // Primary trigger: the element's top crosses the trigger line.
    watch((entry) => entry.isIntersecting, {
      threshold: 0,
      rootMargin: `0px 0px -${triggerInset * 100}% 0px`,
    });
    // Mobile fallback: a short element at the very end of a page can be fully
    // on screen without ever reaching the raised trigger line.
    if (mobile) watch((entry) => entry.intersectionRatio >= 0.99, { threshold: 0.99 });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const style: CSSProperties & Record<string, string | number> = {};
  if (delayMs) style["--reveal-delay"] = `${delayMs}ms`;
  style["--reveal-duration"] = `${durationMs ?? (scale ? 1150 : 1000)}ms`;
  style["--reveal-y"] = `${distancePx ?? (scale ? 32 : 44)}px`;
  if (scale) style["--reveal-scale"] = 0.97;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={style}
      data-stagger={stagger || undefined}
    >
      {children}
    </div>
  );
}
