import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { courseRef, coursesSchema, pageSchema, type CourseInput } from "@/lib/schema";
import { SWIMMING_FAQ } from "@/lib/faq";
import { FaqSection } from "@/components/faq-section";

export const metadata: Metadata = pageMetadata({
  path: "/swimming",
  title: "Swimming Lessons in Davao City for All Ages | SiLak",
  description:
    "Swimming lessons in Davao City for kids and adults, starting with breathing, floating, and comfort in the water, then technique and water safety.",
});

const swimmingSessionImage = {
  src: "/images/swimming/swimming-session.jpeg",
  alt: "Group survival swimming lesson in a pool with an instructor",
  width: 1000,
  height: 1226,
};

const covers = [
  {
    title: "Water Confidence",
    copy: "Breathing, floating, and feeling at ease come first, because comfort in the water is what everything else is built on.",
  },
  {
    title: "Basic Techniques",
    copy: "Core swimming technique built from the ground up, with attention to breathing, balance, and movement, so moving in the water feels natural rather than forced.",
  },
  {
    title: "Water Safety",
    copy: "Practical awareness and habits for staying safe in and around water, for both children and adults.",
  },
  {
    title: "Progressive Learning",
    copy: "Students move step by step, at a pace that respects where each swimmer is starting from, building comfort before technique and confidence before challenge.",
  },
];

const COURSES: CourseInput[] = [
  {
    slug: "swimming-courses",
    name: "Swimming Courses",
    description:
      "Essential swimming skills for all ages at SiLak Davao, focusing on basic techniques and water safety.",
  },
];

export default function SwimmingPage() {
  return (
    <>
      <JsonLd
        data={pageSchema("Swimming", "/swimming", {
          mainEntity: COURSES.map((course) => courseRef("/swimming", course)),
        })}
      />
      <JsonLd data={coursesSchema("/swimming", COURSES)} />
      <PageHero
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
                Swimming lessons at SiLak Davao, based in Davao City, are for
                children and adults, including complete beginners.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Swimming courses at SiLak start with the basics: breathing,
                floating, and feeling comfortable in the water before anything
                else. Beginners are guided at a pace that respects where each
                swimmer is starting from.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Sessions focus on basic swimming techniques alongside practical water
                safety, so every student leaves with skills they can actually rely on,
                not just in a pool, but around water in general.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Read more <TextLink href="/about">about SiLak&rsquo;s approach</TextLink>,{" "}
                <TextLink href="/instructor">meet the instructors</TextLink>, or see{" "}
                <TextLink href="/reviews">what students say</TextLink>. When you are
                ready, <TextLink href="/book">book a session</TextLink>.
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
              <Reveal key={item.title} stagger delayMs={groupStagger(i)}>
                <h3 className="h3-display">{item.title}</h3>
                <p className="prose-copy mt-3 text-ink-soft">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection path="/swimming" items={SWIMMING_FAQ} />

      <CtaBand heading="Ready to Get Comfortable in the Water?" />
    </>
  );
}
