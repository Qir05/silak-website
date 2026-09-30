import type { LightboxImage } from "@/components/lightbox";

export type ReviewScreenshot = LightboxImage & {
  /** Tailwind aspect class matching the screenshot's exact proportions, so
   * the frame fits the full image without cropping. */
  aspectClass: string;
};

/**
 * Student reviews shown on /reviews, published as the original Facebook
 * post screenshots. Files are lossless WebP (pixel-identical to the source
 * captures) and served unoptimized so the text is never re-compressed.
 * Alt text transcribes each post verbatim for screen-reader users.
 */
export const REVIEWS: ReviewScreenshot[] = [
  {
    src: "/images/reviews/review-01.webp",
    alt: "Facebook post by Ekil Suy: this is my 5th session with SiLak Davao and I can really see the progress. am so happy",
    width: 1150,
    height: 220,
    aspectClass: "aspect-[1150/220]",
    unoptimized: true,
  },
  {
    src: "/images/reviews/review-02.webp",
    alt: "Facebook post by Judy Uy: Relax. Breathe. Equalize. Then dive! Learning a new skill while facing one of my fears. Kudos to SiLak Davao for sharing their knowledge! ug salamat sa pag budol donggg Kenneth Bryan P Paig",
    width: 934,
    height: 316,
    aspectClass: "aspect-[934/316]",
    unoptimized: true,
  },
  {
    src: "/images/reviews/review-03.webp",
    alt: "Facebook post by Arra Sumampong with SiLak Davao at Samal Island: Me in a random Sunday after gaslighting myself that a human body is not meant to stay still. Big thank you SiLak Davao! Thank you for your patience, guidance, and for making me feel safe underwater. Solid kayo! Highly recommend! From zero to first dive! A once-in-a-lifetime experience. I will surely come back!",
    width: 1182,
    height: 452,
    aspectClass: "aspect-[1182/452]",
    unoptimized: true,
  },
];
