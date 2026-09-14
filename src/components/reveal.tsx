"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  durationMs,
  distancePx,
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  /** Transition duration in ms. Defaults to 1100ms for images, 1000ms for text. */
  durationMs?: number;
  /** Initial vertical offset in px. Defaults to 24px for images, 32px for text. */
  distancePx?: number;
  /** Apply a very subtle initial scale-up, intended for large editorial imagery. */
  scale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already in view (or already scrolled past) on mount, e.g. above-the-fold
    // content, a same-page anchor jump, or a restored scroll position: reveal
    // immediately instead of waiting on an intersection that may never re-fire.
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties & Record<string, string | number> = {};
  if (delayMs) style.transitionDelay = `${delayMs}ms`;
  style["--reveal-duration"] = `${durationMs ?? (scale ? 1100 : 1000)}ms`;
  style["--reveal-y"] = `${distancePx ?? (scale ? 24 : 32)}px`;
  if (scale) style["--reveal-scale"] = 0.98;

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
