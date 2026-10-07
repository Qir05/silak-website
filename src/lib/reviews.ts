import type { LightboxImage } from "@/components/lightbox";

export type ReviewScreenshot = LightboxImage & {
  /** Tailwind aspect class matching the screenshot's exact proportions, so
   * the frame fits the full image without cropping. */
  aspectClass: string;
};

/**
 * Student reviews, published as the original Facebook post screenshots and
 * shown in this order on /reviews and in the homepage preview. Files are the
 * source captures without re-compression (lossless WebP for the PNG
 * captures, the original JPEG bytes for the JPEG captures) and are served
 * unoptimized so the text is never softened. Alt text transcribes each post
 * verbatim for screen-reader users.
 */
export const REVIEWS: ReviewScreenshot[] = [
  {
    src: "/images/reviews/review-red-valencia.jpg",
    alt: "Facebook post by Red Valencia with Rizal Valencia Jr.: Freediving with SiLak Davao is highly recommended for those looking for a professional and supportive community in the Davao region. Based on local experiences, they are considered one of the best freediving schools, known for helping even the most apprehensive students feel safe and capable. Thank you to the team SiLak Davao for the exceptional assistance! As a student, the support I received was truly outstanding. I am one happy client here.",
    width: 1340,
    height: 390,
    aspectClass: "aspect-[1340/390]",
    unoptimized: true,
  },
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
  {
    src: "/images/reviews/review-joshua-de-castro-arguilles.jpg",
    alt: "Facebook post by Joshua De Castro Arguilles: Didn't know I was built for deep waters. We are incredibly grateful to SiLak Davao for giving us this chance to witness the splendor of aquatic life. This is my first and most certainly not my last!",
    width: 1324,
    height: 252,
    aspectClass: "aspect-[1324/252]",
    unoptimized: true,
  },
  {
    src: "/images/reviews/review-christine-decena.jpg",
    alt: "Facebook post by Christine Decena at Pangubatan Kaputian, Samal: 11/10 experience, would absolutely lose my breath again. thank youuu po SiLak Davao!",
    width: 1330,
    height: 164,
    aspectClass: "aspect-[1330/164]",
    unoptimized: true,
  },
  {
    src: "/images/reviews/review-alma-surigao-cadenas.jpg",
    alt: "Facebook post by Alma Surigao Cadenas: Not a swimmer, and I may have the shortest breath hold among all... but definitely not my last freedive. This kind of activity interests my soul. Oceans really capture the depth of me. Ironically, me, here trying to dive deep into its vastness. Thank you SiLak Davao for one of the core memory experiences",
    width: 1328,
    height: 304,
    aspectClass: "aspect-[1328/304]",
    unoptimized: true,
  },
];
