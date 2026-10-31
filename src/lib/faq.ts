import { ACTIVE_INSTRUCTORS, instructorNames } from "./instructors";
import type { FaqItem } from "./schema";

export type FaqEntry = FaqItem & { link?: { href: string; label: string } };

/**
 * Questions shown on the page they belong to, each set mirrored in that
 * page's FAQPage schema. Every answer restates what the site already says
 * (page copy, the footer, the instructor's approved bio, and the prices on
 * the supplied Wave course images). Nothing here adds a new fact: if the
 * site cannot answer a question yet, it is not listed. Keep it that way.
 */
export const GENERAL_FAQ: FaqEntry[] = [
  {
    question: "What is SiLak Davao?",
    answer:
      "SiLak Davao is a swimming and freediving school based in Davao City, on the island of Mindanao in the Philippines. It offers swimming courses, Molchanovs freediving courses, and junior programs for ages 4 to 15.",
  },
  {
    question: "What do students learn?",
    answer:
      "Swimming covers basic swimming technique and practical water safety. Freediving covers breath-hold composure, equalization, and ocean safety through the Molchanovs Wave 1 and Wave 2 courses. Junior programs introduce children and teens aged 4 to 15 to aquatic confidence and basic freediving.",
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
    question: "Who teaches at SiLak Davao?",
    answer:
      `The instructors at SiLak Davao are ${instructorNames(ACTIVE_INSTRUCTORS)}. Jimmie teaches swimming and freediving with an approach that is progressive, patient, and free from unnecessary pressure.`,
    link: { href: "/instructor", label: "Meet the instructors" },
  },
  {
    question: "How do I book a session?",
    answer:
      "Online booking is on the way. In the meantime, message SiLak Davao on Facebook or Instagram (@silakadventures) for current schedules and availability.",
    link: { href: "/book", label: "Book a session" },
  },
  {
    question: "Where can I find SiLak Davao online?",
    answer:
      "The official website is www.silakadventure.com. SiLak Davao is also on Facebook, and on Instagram as @silakadventures.",
  },
];

export const SWIMMING_FAQ: FaqEntry[] = [
  {
    question: "Can beginners learn swimming at SiLak?",
    answer:
      "Yes. Swimming courses at SiLak start with the basics: breathing, floating, and feeling comfortable in the water before anything else. Beginners are guided at a pace that respects where each swimmer is starting from.",
  },
  {
    question: "Are swimming lessons for kids or adults?",
    answer:
      "Both. Swimming at SiLak covers essential skills for all ages, with water safety habits taught to children and adults alike. Children and teens aged 4 to 15 can also join the junior programs.",
    link: { href: "/junior", label: "Junior programs" },
  },
  {
    question: "What do swimming lessons cover?",
    answer:
      "Breathing, floating, and comfort in the water come first. Sessions then build core swimming technique alongside practical water safety, so students leave with skills they can rely on around water in general.",
  },
];

export const FREEDIVING_FAQ: FaqEntry[] = [
  {
    question: "What is freediving?",
    answer:
      "Freediving is exploring the underwater world on a single breath. At SiLak Davao it is more than going deeper or holding your breath longer: it is learning to breathe, relax, move with awareness, and stay calm in the water.",
  },
  {
    question: "Is freediving suitable for beginners?",
    answer:
      "Yes. Training follows the certified Molchanovs curriculum, moving students through structured levels rather than rushing toward depth. Each level builds relaxation techniques, breath-hold composure, and equalization before progressing further.",
  },
  {
    question: "Can non-swimmers start?",
    answer:
      "Yes. The approach is progressive, safe, and beginner friendly, guiding you from your first experience in the water, even as a non-swimmer, to becoming a confident and skilled freediver.",
    link: { href: "/swimming", label: "Swimming courses" },
  },
  {
    question: "What should beginners expect?",
    answer:
      "A calm, structured start. Each level combines theory, practical training, and safety, with progressively more advanced skills, building comfort before technique and confidence before challenge.",
  },
  {
    question: "How much are the Molchanovs courses?",
    answer:
      "Molchanovs Wave 1 is ₱13,000 and Wave 2 is ₱18,000. Reach out directly for current availability and details.",
    link: { href: "/book", label: "Book a session" },
  },
];

export const JUNIOR_FAQ: FaqEntry[] = [
  {
    question: "What ages are the junior programs for?",
    answer:
      "Junior programs are organized by age so every child is met where they are, in three groups: 4 to 7, 8 to 11, and 12 to 15.",
  },
  {
    question: "What do the junior programs include?",
    answer:
      "Ages 4 to 7 focus on comfort and play in the water: getting used to a mask, floating, and feeling at ease. Ages 8 to 11 begin building real technique, with steady breathing and better form. Ages 12 to 15 refine technique and composure, laying the groundwork for the same certified progression adults follow.",
  },
  {
    question: "What should parents know?",
    answer:
      "Every junior session stays reassuring and parent-friendly, guided by the same calm, safety-first approach used across all of SiLak's programs.",
    link: { href: "/book", label: "Book a session" },
  },
];
