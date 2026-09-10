"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type LightboxContextValue = {
  open: (images: LightboxImage[], index: number, trigger: HTMLElement | null) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[] | null>(null);
  const [index, setIndex] = useState(0);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = useCallback(
    (imgs: LightboxImage[], startIndex: number, trigger: HTMLElement | null) => {
      triggerRef.current = trigger;
      setImages(imgs);
      setIndex(startIndex);
    },
    [],
  );

  const close = useCallback(() => {
    setImages(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, []);

  const showPrev = useCallback(() => {
    setIndex((current) => (images ? (current - 1 + images.length) % images.length : 0));
  }, [images]);

  const showNext = useCallback(() => {
    setIndex((current) => (images ? (current + 1) % images.length : 0));
  }, [images]);

  useEffect(() => {
    if (!images) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (images.length > 1 && event.key === "ArrowLeft") {
        showPrev();
        return;
      }
      if (images.length > 1 && event.key === "ArrowRight") {
        showNext();
        return;
      }
      if (event.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>("button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [images, close, showPrev, showNext]);

  const current = images ? images[index] : null;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-ocean/95 p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-white sm:right-6 sm:top-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {images && images.length > 1 && (
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-1 flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-white sm:left-4"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <div className="relative max-h-[85vh] max-w-[92vw] sm:max-w-[85vw]">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              className="h-auto max-h-[85vh] w-auto max-w-full object-contain"
              priority
            />
          </div>

          {images && images.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-1 flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-white sm:right-4"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}
