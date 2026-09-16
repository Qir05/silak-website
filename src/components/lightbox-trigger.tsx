"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLightbox, type LightboxImage } from "./lightbox";

/**
 * Sitewide image ratio system (applied via each call site's `className`):
 * - Portrait editorial photography (Programs, Instructor, Junior, in-body
 *   photos): aspect-[4/5], `fit="cover"`.
 * - Landscape editorial photography: aspect-[4/3], `fit="cover"`.
 * - Product / lookbook imagery (merchandise): aspect-square, `fit="contain"`,
 *   so mismatched source proportions sit inside one consistent frame instead
 *   of being cropped.
 * - A designed graphic asset placed beside real photography (e.g. the
 *   Junior tile in the homepage Programs grid) uses `fit="contain"` too:
 *   the artwork carries its own text (a wordmark, "JUNIOR") that a cover
 *   crop would cut off, so it's shown in full on its own mat instead.
 */
export function LightboxTrigger({
  images,
  index = 0,
  sizes,
  priority = false,
  className = "",
  fit = "cover",
  objectPosition,
}: {
  images: LightboxImage[];
  index?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
  /** CSS object-position, for biasing a cover crop toward the subject. */
  objectPosition?: string;
}) {
  const { open } = useLightbox();
  const ref = useRef<HTMLButtonElement>(null);
  const img = images[index];

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => open(images, index, ref.current)}
      aria-label={`Enlarge photo: ${img.alt}`}
      className={`group relative block w-full overflow-hidden bg-aqua-tint ${className}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
          fit === "contain" ? "object-contain p-6" : "object-cover"
        }`}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </button>
  );
}
