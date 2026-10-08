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
        src: "/images/merchandise/silak-shirt-silak-freediver.webp",
        alt: "Black SiLak t-shirt with a diver splash design on the front and a colorful SiLak Freediver print on the back",
        width: 1044,
        height: 840,
      },
    ],
    imageFit: "contain",
  },
  {
    slug: "masks",
    label: "Freediving Mask Collection",
    description: "Freediving masks available through SiLak.",
    images: [
      {
        src: "/images/merchandise/mask-collection.webp",
        alt: "Collection of freediving masks in cases, in black, blue camouflage, and light blue colorways",
        width: 1536,
        height: 2048,
      },
      {
        src: "/images/merchandise/mask-teal.webp",
        alt: "Teal low-profile freediving mask with a silicone skirt and strap, shown from the side",
        width: 860,
        height: 722,
      },
      {
        src: "/images/merchandise/mask-black-on-rock.webp",
        alt: "Black low-profile freediving mask resting on a rock by the sea",
        width: 868,
        height: 694,
      },
      {
        src: "/images/merchandise/mask-red-frame.webp",
        alt: "Black freediving mask with a red lens frame, shown from the front",
        width: 880,
        height: 688,
      },
      {
        src: "/images/merchandise/mask-green-frame.webp",
        alt: "Black freediving mask with a green lens frame, shown from the front",
        width: 852,
        height: 668,
      },
      {
        src: "/images/merchandise/mask-navy-with-snorkel.webp",
        alt: "Navy freediving mask shown alongside a black snorkel",
        width: 862,
        height: 890,
      },
      {
        src: "/images/merchandise/mask-white-frame-with-snorkel.webp",
        alt: "Black freediving mask with a white lens frame, shown alongside a black snorkel",
        width: 888,
        height: 910,
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
    slug: "ear-equalization-training-tool",
    label: "Ear Equalization Training Tool",
    description:
      "A practical tool for practicing equalization technique, with three balloons and a storage box included.",
    images: [
      {
        src: "/images/merchandise/ear-equalization-training-tool.jpg",
        alt: "Ear equalization training tool package: a red training tool in an open zip storage box with three balloons in teal, green and red. Text reads: What's in a package? Included: 1 x Ear Equalization Training Tool, 3 x Balloons, 1 x Storage Box",
        width: 1290,
        height: 1256,
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
      {
        src: "/images/merchandise/freediving-fins-frenzel-translucent.webp",
        alt: "Pair of Frenzel freediving fins with translucent blades and black foot pockets, on a black Frenzel fin bag on grass",
        width: 1240,
        height: 1600,
      },
      {
        src: "/images/merchandise/freediving-fins-frenzel-carbon-grey-bag.webp",
        alt: "Pair of Frenzel freediving fins with dark patterned blades and white foot pockets, on a grey fin bag with a manta ray design",
        width: 1140,
        height: 1600,
      },
      {
        src: "/images/merchandise/freediving-fins-frenzel-carbon-white-bag.webp",
        alt: "Pair of Frenzel freediving fins with dark patterned blades and white foot pockets, on a white Frenzel fin bag on grass",
        width: 1113,
        height: 1600,
      },
    ],
    imageFit: "contain",
  },
];
