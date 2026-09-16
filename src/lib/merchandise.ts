export type MerchandiseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MerchandiseProduct = {
  slug: string;
  label: string;
  description: string;
  images: MerchandiseImage[];
  /**
   * All products use "contain" on a shared aqua-tint mat (see
   * LightboxTrigger) so the white-background shirt photos, the gray-backed
   * mask flat-lay, and the lanyard shot present as one curated set instead
   * of three different sources cropped into a grid.
   */
  imageFit: "cover" | "contain";
};

export const MERCHANDISE_PRODUCTS: MerchandiseProduct[] = [
  {
    slug: "shirts",
    label: "SiLak Shirts",
    description:
      "SiLak branded shirts featuring original ocean and freediving artwork, printed front and back.",
    images: [
      {
        src: "/images/merchandise/silak-shirt-ocean-connection.webp",
        alt: "Black SiLak t-shirt with a turtle and freediver design on the front and an Ocean Connection mermaid design on the back",
        width: 1156,
        height: 803,
      },
      {
        src: "/images/merchandise/silak-shirt-freediver.webp",
        alt: "Black SiLak t-shirt with a diver splash design on the front and a colorful SiLak Freediver print on the back",
        width: 1044,
        height: 840,
      },
    ],
    imageFit: "contain",
  },
  {
    slug: "masks",
    label: "Mask Collection",
    description: "Freediving and swimming masks available through SiLak.",
    images: [
      {
        src: "/images/merchandise/mask-collection.webp",
        alt: "Collection of freediving masks in cases, in black, blue camouflage, and light blue colorways",
        width: 1536,
        height: 2048,
      },
    ],
    imageFit: "contain",
  },
  {
    slug: "accessories",
    label: "Training Accessories",
    description: "Freediving lanyards for line training, available through SiLak.",
    images: [
      {
        src: "/images/merchandise/training-accessories-lanyards.webp",
        alt: "Two freediving lanyards with carabiners, in blue and red",
        width: 1290,
        height: 1030,
      },
    ],
    imageFit: "contain",
  },
  {
    slug: "fins",
    label: "Freediving Fins",
    description: "Freediving fins available through SiLak.",
    images: [
      {
        src: "/images/merchandise/freediving-fins.webp",
        alt: "Three pairs of long-blade freediving fins in white, green, and yellow laid side by side",
        width: 1195,
        height: 1316,
      },
    ],
    imageFit: "contain",
  },
];
