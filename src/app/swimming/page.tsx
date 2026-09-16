import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";

export const metadata: Metadata = {
  title: "Swimming Courses in Davao",
  description:
    "Swimming lessons in Davao for beginners and families, focused on foundational aquatic confidence, basic swimming technique, and water safety.",
  alternates: { canonical: "/swimming" },
};

const swimmingSessionImage = {
  src: "/images/swimming/swimming-session.jpeg",
  alt: "Group survival swimming lesson in a pool with an instructor",
  width: 1000,
  height: 1226,
};

const covers = [
  {
    title: "Basic Techniques",
    copy: "Core swimming technique built from the ground up, so movement in the water feels natural rather than forced.",
  },
  {
    title: "Water Safety",
    copy: "Practical awareness and habits for staying safe in and around water, for both children and adults.",
  },
];

export default function SwimmingPage() {
  return (
    <>
      <PageHero
        eyebrow="Swimming in Davao"
        heading="Swimming Courses at SiLak Davao"
        intro="Essential skills for all ages, focusing on basic techniques and water safety."
        image="/images/swimming/adult-swimming-underwater.webp"
        imageAlt="Swimmer gliding underwater in a pool"
        imagePosition="center 40%"
      />

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="eyebrow text-ocean-blue">Foundational Aquatic Confidence</p>
              <h2 className="h2-display mt-4">Building Comfort in the Water First</h2>
              <p className="prose-copy mt-6 text-ink-soft">
                Swimming courses at SiLak start with the basics: breathing,
                floating, and feeling comfortable in the water before anything
                else. Beginners are guided at a pace that respects where each
                swimmer is starting from.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Sessions focus on basic swimming techniques alongside practical water
                safety, so every student leaves with skills they can actually rely on
                &mdash; not just in a pool, but around water in general.
              </p>
            </Reveal>
            <Reveal delayMs={sequenceStep(1)} scale>
              <LightboxTrigger
                images={[swimmingSessionImage]}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/5]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <h2 className="h2-display">What Swimming Covers</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
            {covers.map((item, i) => (
              <Reveal key={item.title} delayMs={groupStagger(i)}>
                <h3 className="h3-display">{item.title}</h3>
                <p className="prose-copy mt-3 text-ink-soft">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand heading="Ready to Get Comfortable in the Water?" />
    </>
  );
}
