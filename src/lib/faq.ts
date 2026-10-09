import type { FaqItem } from "./schema";

export type FaqEntry = FaqItem & { link?: { href: string; label: string } };

/**
 * Common questions shown on /about and mirrored in its FAQPage schema.
 * Every answer restates copy already published elsewhere on the site
 * (Home, Swimming, Freediving, Junior, About, Book, the footer and the
 * instructor's approved bio). Nothing here adds a new fact or claim.
 */
export const FAQ: FaqEntry[] = [
  {
    question: "Can beginners learn swimming at SiLak?",
    answer:
      "Yes. Swimming courses at SiLak start with the basics: breathing, floating, and feeling comfortable in the water before anything else. Beginners are guided at a pace that respects where each swimmer is starting from.",
    link: { href: "/swimming", label: "Swimming courses" },
  },
  {
    question: "Can non-swimmers start?",
    answer:
      "Yes. The approach is progressive, safe, and beginner friendly, guiding you from your first experience in the water, even as a non-swimmer, to becoming a confident and skilled freediver.",
  },
  {
    question: "What is freediving?",
    answer:
      "Freediving is exploring the underwater world on a single breath. At SiLak Davao it is more than going deeper or holding your breath longer: it is learning to breathe, relax, move with awareness, and stay calm in the water.",
    link: { href: "/freediving", label: "Freediving courses" },
  },
  {
    question: "Is freediving suitable for beginners?",
    answer:
      "Yes. Training follows the certified Molchanovs curriculum, moving students through structured levels rather than rushing toward depth. Each level builds relaxation techniques, breath-hold composure, and equalization before progressing further.",
  },
  {
    question: "What do students learn?",
    answer:
      "Swimming covers basic swimming technique and practical water safety. Freediving covers breath-hold composure, equalization, and ocean safety through the Molchanovs Wave 1 and Wave 2 courses. Junior programs introduce children and teens aged 4 to 15 to aquatic confidence and basic freediving.",
    link: { href: "/junior", label: "Junior programs" },
  },
  {
    question: "What is the difference between swimming and freediving training?",
    answer:
      "Swimming training focuses on understanding the body, breathing, balance, and movement rather than simply memorizing strokes. Freediving takes that same foundation deeper, developing relaxation, breath awareness, equalization, and body control.",
  },
  {
    question: "What safety approach does SiLak use?",
    answer:
      "Safety comes first, always. SiLak builds strong water skills and treats water safety as non-negotiable, whether the setting is survival swimming or open-water freediving.",
  },
  {
    question: "Where is SiLak Davao based?",
    answer: "SiLak Davao is a swimming and freediving school in Davao City, Philippines.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Online booking is on the way. In the meantime, message SiLak Davao on Facebook or Instagram (@silakadventures) for current schedules and availability.",
    link: { href: "/book", label: "Book a session" },
  },
];
