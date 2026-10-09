import type { LightboxImage } from "@/components/lightbox";

export type InstructorProfile = {
  name: string;
  /** Credential line under the name. Only shown when supplied. */
  title?: string;
  /** Show the Molchanovs mark beside the title line. */
  molchanovsMark?: boolean;
  image: LightboxImage;
  /** Teaching philosophy, one entry per paragraph, exactly as approved. */
  bio: string[];
  /** Paragraph used for the homepage preview. */
  previewParagraph: string;
  /** Paragraph used in the Freediving page's instructor section. */
  freedivingParagraph: string;
  /** Short page description for /instructor metadata. */
  metaDescription: string;
};

const JIMMIE_BIO = [
  "I believe every student learns differently, so I create an environment where learning is progressive, patient, and free from unnecessary pressure. Whether someone is learning to float for the first time, developing their swimming skills, or discovering the world beneath the surface, I guide them step by step, building comfort before technique and confidence before challenge.",
  "In swimming, I teach students to understand their body, breathing, balance, and movement rather than simply memorizing strokes. In freediving, I take that same foundation deeper, helping students develop relaxation, breath awareness, equalization, and body control.",
  "My goal is not to make students overcome the water through force, but to help them become comfortable enough to move naturally within it. When fear becomes understanding and effort becomes efficiency, the water stops feeling like something to fight and becomes a place to explore.",
  "For me, teaching is more than developing skills. It is about helping people discover confidence, discipline, awareness, and respect for the water, while making every lesson safe, meaningful, and enjoyable.",
];

export const JIMMIE_CARLO: InstructorProfile = {
  name: "Jimmie Carlo",
  image: {
    src: "/images/instructors/jimmie-carlo-portrait.webp",
    alt: "Jimmie Carlo standing poolside in a black wetsuit, with a freediving mask resting on the forehead",
    width: 896,
    height: 1200,
  },
  bio: JIMMIE_BIO,
  previewParagraph: JIMMIE_BIO[0],
  freedivingParagraph: JIMMIE_BIO[1],
  metaDescription:
    "Meet Jimmie Carlo of SiLak Davao: a patient, progressive approach to teaching swimming and freediving, building comfort before technique.",
};

/**
 * Not currently shown on the site. Kept intact so the profile can be
 * restored by pointing ACTIVE_INSTRUCTOR back at it. Its original per-page
 * layouts (the pull quote on /instructor, the two-paragraph quote on /about)
 * are in git history before commit "Replace Ron Edwards with Jimmie Carlo".
 */
export const EDWARD_M_BERDOS: InstructorProfile = {
  name: "Edward M. Berdos",
  title: "Molchanovs Instructor",
  molchanovsMark: true,
  image: {
    src: "/images/instructor/edward-berdos.jpeg",
    alt: "Edward M. Berdos, Molchanovs Instructor, wearing freediving gear by the water",
    width: 1536,
    height: 1875,
  },
  bio: [
    "The heart of my approach to teaching freediving is the belief in calmness and presence. I focus on guiding students to embrace the beauty of relaxation, ensuring that they never feel rushed or forced. In freediving, as in life, the greatest growth happens when you embrace the moment, and I teach my students to surrender to the flow of the water, trust their bodies, and experience the transformative power of stillness.",
    "My goal is to help you dive deeper, not into the water, but into your own potential.",
    "Together, we will create a safe, nurturing environment for growth and self-discovery, all while having fun and building confidence.",
  ],
  previewParagraph:
    "The heart of my approach to teaching freediving is the belief in calmness and presence. I focus on guiding students to embrace the beauty of relaxation, ensuring that they never feel rushed or forced.",
  freedivingParagraph:
    "Training is guided around calmness and presence, never rushed or forced. Students are taught to trust their bodies and build confidence one level at a time.",
  metaDescription:
    "Meet Edward M. Berdos, Molchanovs Instructor at SiLak Davao, and his approach to teaching freediving through calmness, presence, and relaxation in the water.",
};

/** The instructor shown on the homepage, /instructor, /about and /freediving. */
export const ACTIVE_INSTRUCTOR = JIMMIE_CARLO;

/** First name, used for the homepage "Meet ..." link. */
export const activeInstructorFirstName = ACTIVE_INSTRUCTOR.name.split(" ")[0];
