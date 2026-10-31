import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { InstructorCredential } from "@/components/instructor-credential";
import { TextLink } from "@/components/text-link";
import { ACTIVE_INSTRUCTORS } from "@/lib/instructors";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { courseRef, coursesSchema, pageSchema, type CourseInput } from "@/lib/schema";
import { FREEDIVING_FAQ } from "@/lib/faq";
import { FaqSection } from "@/components/faq-section";

export const metadata: Metadata = pageMetadata({
  path: "/freediving",
  title: "Freediving Lessons in Davao City | Molchanovs at SiLak",
  description:
    "Freediving lessons for beginners in Davao City, with Molchanovs Wave 1 and Wave 2 courses covering relaxation, composure while breath holding, and ocean safety.",
});

const lineTrainingImage = {
  src: "/images/freediving/freediving-line-training.jpeg",
  alt: "Freediver ascending a training line toward the surface",
  width: 1528,
  height: 2523,
};


const covers = [
  {
    title: "Breath Holding and Composure",
    copy: "Relaxation and breath control form the foundation every level builds on.",
  },
  {
    title: "Equalization",
    copy: "Technique for equalizing comfortably and safely as depth increases.",
  },
  {
    title: "Ocean Safety",
    copy: "Safety protocols and awareness that stay essential at every level.",
  },
];

const COURSES: CourseInput[] = [
  {
    slug: "molchanovs-wave-1",
    name: "Molchanovs Wave 1",
    description:
      "Molchanovs Wave 1 freediving course at SiLak Davao, combining theory, practical training, and safety.",
    pricePhp: 13000,
  },
  {
    slug: "molchanovs-wave-2",
    name: "Molchanovs Wave 2",
    description:
      "Molchanovs Wave 2 freediving course at SiLak Davao, combining theory, practical training, and safety with more advanced skills.",
    pricePhp: 18000,
  },
];

export default function FreedivingPage() {
  return (
    <>
      <JsonLd
        data={pageSchema("Freediving", "/freediving", {
          mainEntity: COURSES.map((course) => courseRef("/freediving", course)),
        })}
      />
      <JsonLd data={coursesSchema("/freediving", COURSES)} />
      <PageHero
        heading="Molchanovs with Silak Freediving"
        intro="Each level combines theory + practical training + safety, with progressively more advanced skills."
        image="/images/hero/freediver-sunlit-reef-wide.webp"
        imageAlt="Freediver in a blue wetsuit gliding over a coral reef"
        imagePosition="58% center"
      />

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <Reveal scale className="md:order-2">
              <LightboxTrigger
                images={[lineTrainingImage]}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/5]"
              />
            </Reveal>
            <Reveal delayMs={sequenceStep(1)} className="md:order-1">
              <h2 className="h2-display">Calm, Structured Progression</h2>
              <p className="prose-copy mt-6 text-ink-soft">
                Freediving is exploring the underwater world on a single breath.
                SiLak Davao, based in Davao City on the island of Mindanao, teaches
                it as a progressive journey that welcomes beginners, even people who
                cannot swim yet, built on three foundations: relaxation, breathing,
                and safety.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Training follows the certified Molchanovs curriculum, moving students
                through structured levels rather than rushing toward depth. Each level
                builds Relaxation techniques, composure while breath holding, and
                equalization before progressing further.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                <TextLink href="/instructor">Meet your instructors</TextLink>, read{" "}
                <TextLink href="/reviews">student stories</TextLink>, or learn more{" "}
                <TextLink href="/about">about SiLak Davao</TextLink>.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <h2 className="h2-display">What the Progression Covers</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-3 md:gap-8">
            {covers.map((item, i) => (
              <Reveal key={item.title} stagger delayMs={groupStagger(i)}>
                <h3 className="h3-display">{item.title}</h3>
                <p className="prose-copy mt-3 text-ink-soft">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">Molchanovs Levels</p>
            <h2 className="h2-display mt-4">Wave 1 and Wave 2</h2>
            <p className="prose-copy mt-5 text-ink-soft">
              SiLak Davao, based in Davao City, runs the certified Molchanovs Wave 1
              and Wave 2 freediving courses. Reach out directly for current
              availability and details.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-2 sm:max-w-xl">
            <Reveal stagger delayMs={sequenceStep(1)}>
              <div className="relative aspect-square w-full overflow-hidden bg-ink">
                <Image
                  src="/images/programs/molchanovs-wave-1-price.jpg"
                  alt="Molchanovs Wave 1 course badge, ₱13,000"
                  fill
                  sizes="(min-width: 640px) 288px, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
            <Reveal stagger delayMs={sequenceStep(1) + groupStagger(1)}>
              <div className="relative aspect-square w-full overflow-hidden bg-ink">
                <Image
                  src="/images/programs/molchanovs-wave-2-price.jpg"
                  alt="Molchanovs Wave 2 course badge, ₱18,000"
                  fill
                  sizes="(min-width: 640px) 288px, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">Your Instructors</p>
            <h2 className="h2-display mt-4">Who You Will Learn With</h2>
          </Reveal>
          <div className="mt-10 grid gap-12 border-t border-ink/15 pt-10 md:grid-cols-2 md:gap-14">
            {ACTIVE_INSTRUCTORS.map((instructor, i) => (
              <Reveal key={instructor.slug} stagger delayMs={groupStagger(i)}>
                <LightboxTrigger
                  images={[instructor.image]}
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="aspect-[4/5] max-w-xs"
                />
                <h3 className="h3-display mt-6">{instructor.name}</h3>
                <InstructorCredential instructor={instructor} />
                <p className="prose-copy mt-4 text-ink-soft">{instructor.freedivingParagraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <CtaLink href="/instructor" variant="secondary">
              Meet the Instructors
            </CtaLink>
          </Reveal>
        </Container>
      </section>

      <FaqSection path="/freediving" items={FREEDIVING_FAQ} />

      <CtaBand heading="Ready to Start Your Freediving Progression?" />
    </>
  );
}
