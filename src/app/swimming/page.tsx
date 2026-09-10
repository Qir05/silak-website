import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { LightboxTrigger } from "@/components/lightbox-trigger";

export const metadata: Metadata = {
  title: "Survival Swimming in Davao",
  description:
    "Survival swimming lessons in Davao for beginners and families, focused on foundational aquatic confidence, basic swimming technique, water safety, and confident survival floats.",
  alternates: { canonical: "/swimming" },
};

const swimmingSessionImage = {
  src: "/images/swimming/swimming-session.jpeg",
  alt: "Group survival swimming lesson in a pool with an instructor",
  width: 1000,
  height: 1226,
};

export default function SwimmingPage() {
  return (
    <>
      <PageHero
        eyebrow="Swimming in Davao"
        heading="Survival Swimming in Davao"
        intro="Essential skills for all ages, focusing on basic techniques, water safety, and confident survival floats."
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
                Survival swimming at SiLak starts with the basics: breathing, floating,
                and feeling comfortable in the water before anything else. Beginners
                and families are guided at a pace that respects where each swimmer is
                starting from.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Sessions focus on basic swimming techniques alongside practical water
                safety, so every student leaves with skills they can actually rely on
                &mdash; not just in a pool, but around water in general.
              </p>
            </Reveal>
            <Reveal delayMs={100} scale>
              <LightboxTrigger
                images={[swimmingSessionImage]}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="h2-display">What Survival Swimming Covers</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
            <Reveal delayMs={0}>
              <h3 className="h3-display">Basic Techniques</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Core swimming technique built from the ground up, so movement in the
                water feels natural rather than forced.
              </p>
            </Reveal>
            <Reveal delayMs={100}>
              <h3 className="h3-display">Water Safety</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Practical awareness and habits for staying safe in and around water,
                for both children and adults.
              </p>
            </Reveal>
            <Reveal delayMs={100}>
              <h3 className="h3-display">Confident Survival Floats</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                A dependable float and recovery position students can return to
                whenever they need to rest or regroup in the water.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <h3 className="h3-display">Beginners and Families</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Sessions are structured to welcome complete beginners, including
                parents and children learning together.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand heading="Ready to Get Comfortable in the Water?" />
    </>
  );
}
