import { ACTIVE_INSTRUCTORS, instructorNames } from "./instructors";
import type { FaqItem } from "./schema";

export type FaqEntry = FaqItem & { link?: { href: string; label: string } };

/**
 * Questions shown on the page they belong to, each set mirrored in that
 * page's FAQPage schema. Every answer opens with a direct answer and restates
 * what SiLak has already approved (page copy, the footer, the instructors'
 * bios and credentials, and the prices on the supplied Wave course images).
 * Nothing here adds a new fact: if the site cannot answer a question yet,
 * such as venue, duration, gear, or class size, it is not listed. Keep it
 * that way.
 */
export const GENERAL_FAQ: FaqEntry[] = [
  {
    question: "What is SiLak Davao?",
    answer:
      "SiLak Davao is a swimming and freediving school in Davao City, Philippines. It offers swimming courses, Molchanovs freediving courses, and junior programs for ages 4 to 15.",
  },
  {
    question: "Where is SiLak based?",
    answer:
      "SiLak Davao is based in Davao City, on the island of Mindanao in the Philippines.",
  },
  {
    question: "What does SiLak teach?",
    answer:
      "SiLak teaches swimming, freediving, and junior water skills. Swimming covers basic technique and practical water safety. Freediving covers breath hold composure, equalization, and ocean safety through the Molchanovs Wave 1 and Wave 2 courses. Junior programs introduce children and teens to aquatic confidence and basic freediving.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Yes. Courses at SiLak are structured for every skill level and age, and the approach is progressive, safe, and beginner friendly.",
  },
  {
    question: "Can nonswimmers learn?",
    answer:
      "Yes. SiLak guides students from their first experience in the water, even as nonswimmers. Swimming courses start with breathing, floating, and feeling comfortable in the water before anything else.",
    link: { href: "/swimming", label: "Start with swimming" },
  },
  {
    question: "What is freediving?",
    answer:
      "Freediving is exploring the underwater world on a single breath. SiLak teaches it through structured Molchanovs courses built on relaxation, breathing, and safety.",
    link: { href: "/freediving", label: "Freediving at SiLak" },
  },
  {
    question: "What is the difference between swimming and freediving?",
    answer:
      "Swimming training focuses on understanding the body, breathing, balance, and movement rather than simply memorizing strokes. Freediving takes that same foundation deeper, developing relaxation, breath awareness, equalization, and body control.",
  },
  {
    question: "Who teaches at SiLak Davao?",
    answer: `The instructors at SiLak Davao are ${instructorNames(ACTIVE_INSTRUCTORS)}. Jimmie teaches swimming and freediving with an approach that is progressive, patient, and free from unnecessary pressure. Edward is a Molchanovs Instructor who teaches freediving through calmness and presence.`,
    link: { href: "/instructor", label: "Meet the instructors" },
  },
  {
    question: "Does SiLak offer Molchanovs courses?",
    answer:
      "Yes. SiLak Davao runs the certified Molchanovs Wave 1 and Wave 2 freediving courses.",
    link: { href: "/freediving", label: "About the Wave courses" },
  },
  {
    question: "Does SiLak offer junior programs?",
    answer:
      "Yes. Junior programs introduce children and teens aged 4 to 15 to aquatic confidence and basic freediving, organized by age so every child is met where they are.",
    link: { href: "/junior", label: "See junior programs" },
  },
  {
    question: "How does SiLak approach water safety?",
    answer:
      "Safety comes first, always. SiLak builds strong water skills and treats water safety as nonnegotiable, whether the setting is survival swimming or open water freediving.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Message SiLak Davao on Facebook or Instagram (@silakadventures) for current schedules and availability. Online booking is on the way.",
    link: { href: "/book", label: "Book a session" },
  },
  {
    question: "Where can I find SiLak Davao online?",
    answer:
      "The official website is www.silakadventure.com. SiLak Davao is also on Facebook, and on Instagram as @silakadventures. You may also see it listed as SiLak Adventures or SiLak Adventure.",
  },
];

export const SWIMMING_FAQ: FaqEntry[] = [
  {
    question: "Where can I take swimming lessons in Davao?",
    answer:
      "SiLak Davao, based in Davao City, teaches swimming for all ages. Message SiLak directly for current session details.",
    link: { href: "/book", label: "Ask about lessons" },
  },
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
  {
    question: "How do I book swimming lessons?",
    answer:
      "Message SiLak Davao on Facebook or Instagram for current schedules and availability. Online booking is on the way.",
    link: { href: "/book", label: "Book a session" },
  },
];

export const FREEDIVING_FAQ: FaqEntry[] = [
  {
    question: "What is freediving?",
    answer:
      "Freediving is exploring the underwater world on a single breath. At SiLak Davao it is more than going deeper or holding your breath longer: it is learning to breathe, relax, move with awareness, and stay calm in the water.",
  },
  {
    question: "Where can I learn freediving in Davao or Mindanao?",
    answer:
      "SiLak Davao, based in Davao City on the island of Mindanao, teaches freediving through a progressive, beginner friendly approach and the Molchanovs Wave 1 and Wave 2 courses. Message SiLak directly for current session details.",
    link: { href: "/about", label: "About SiLak Davao" },
  },
  {
    question: "Is there Molchanovs training in Davao?",
    answer:
      "Yes. SiLak Davao runs the certified Molchanovs Wave 1 and Wave 2 freediving courses, and Edward M. Berdos is a Molchanovs Instructor at SiLak.",
    link: { href: "/instructor", label: "Meet the instructors" },
  },
  {
    question: "Can beginners learn freediving?",
    answer:
      "Yes. Training follows the certified Molchanovs curriculum, moving students through structured levels rather than rushing toward depth. Each level builds relaxation techniques, breath hold composure, and equalization before progressing further.",
  },
  {
    question: "Can a nonswimmer start?",
    answer:
      "Yes. The approach is progressive, safe, and beginner friendly, guiding you from your first experience in the water, even as a nonswimmer, to becoming a confident and skilled freediver.",
    link: { href: "/swimming", label: "Swimming courses" },
  },
  {
    question: "Is freediving safe for beginners?",
    answer:
      "Safety is the first priority, though no water activity is free of risk. SiLak treats safety as nonnegotiable at every level and moves students through structured levels rather than rushing toward depth.",
  },
  {
    question: "How does SiLak teach freediving?",
    answer:
      "Progressively, with calm before depth. SiLak focuses on three foundations: relaxation, breathing, and safety. As skills grow, so do confidence, body awareness, and connection with the ocean.",
  },
  {
    question: "What does a beginner learn first?",
    answer:
      "Relaxation and breath control come first. They form the foundation every level builds on, before equalization and deeper skills.",
  },
  {
    question: "What should I expect as a beginner?",
    answer:
      "A calm, structured start. Each level combines theory, practical training, and safety, with progressively more advanced skills, building comfort before technique and confidence before challenge.",
  },
  {
    question: "What is Molchanovs training?",
    answer:
      "Molchanovs training is a structured freediving curriculum taught in levels. At SiLak, each level combines theory, practical training, and safety, moving students forward one level at a time.",
  },
  {
    question: "What is Wave 1?",
    answer:
      "Wave 1 is the first Molchanovs level taught at SiLak Davao. It combines theory, practical training, and safety while building relaxation, breath hold composure, and equalization.",
  },
  {
    question: "What is Wave 2?",
    answer:
      "Wave 2 is the next Molchanovs level taught at SiLak Davao. It keeps the same mix of theory, practical training, and safety, with more advanced skills.",
  },
  {
    question: "How much are the Molchanovs courses?",
    answer:
      "Molchanovs Wave 1 is ₱13,000 and Wave 2 is ₱18,000. Reach out directly for current availability and details.",
  },
  {
    question: "How do I book a freediving course?",
    answer:
      "Message SiLak Davao on Facebook or Instagram for current schedules and availability. Online booking is on the way.",
    link: { href: "/book", label: "Book a session" },
  },
];

export const JUNIOR_FAQ: FaqEntry[] = [
  {
    question: "What is junior training at SiLak?",
    answer:
      "Junior training introduces children and teens to aquatic confidence and basic freediving in a safe, engaging environment, organized by age.",
  },
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
    question: "Can kids learn swimming at SiLak?",
    answer:
      "Yes. Swimming at SiLak covers essential skills for all ages, with water safety habits taught to children and adults alike.",
    link: { href: "/swimming", label: "Swimming courses" },
  },
  {
    question: "What should parents know?",
    answer:
      "Every junior session stays reassuring and parent friendly, guided by the same calm, safety first approach used across all of SiLak's programs.",
  },
  {
    question: "How can parents ask about junior programs?",
    answer:
      "Message SiLak Davao on Facebook or Instagram for current schedules and availability. Online booking is on the way.",
    link: { href: "/book", label: "Book a session" },
  },
];
