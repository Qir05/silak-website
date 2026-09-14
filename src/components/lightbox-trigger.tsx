"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLightbox, type LightboxImage } from "./lightbox";

export function LightboxTrigger({
  images,
  index = 0,
  sizes,
  priority = false,
  className = "",
  fit = "cover",
}: {
  images: LightboxImage[];
  index?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Use "contain" for product-style photography where cropping would cut
   * off the subject (e.g. mismatched-orientation merchandise photos). */
  fit?: "cover" | "contain";
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
          fit === "contain" ? "object-contain p-4" : "object-cover"
        }`}
      />
    </button>
  );
}
