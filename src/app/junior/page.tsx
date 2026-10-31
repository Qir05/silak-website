import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { courseRef, coursesSchema, pageSchema, type CourseInput } from "@/lib/schema";
import { JUNIOR_FAQ } from "@/lib/faq";
import { FaqSection } from "@/components/faq-section";

export const metadata: Metadata = pageMetadata({
  path: "/junior",
  title: "Kids Swimming and Junior Freediving Programs | SiLak Davao",
  description:
    "Junior programs in Davao City for ages 4 to 15, introducing children and teens to aquatic confidence and basic freediving in a safe, engaging environment.",
});

const ageGroups = [
  {
    range: "Ages 4 to 7",
    image: "/images/junior/junior-4-7.webp",
    alt: "Young child practicing freediving skills underwater with a Molchanovs Junior program overlay, ages 4 to 7",
    width: 1736,
    height: 2455,
    copy: "The earliest stage is about comfort and play in the water: getting used to a mask, floating, and feeling at ease before anything else.",
  },
  {
    range: "Ages 8 to 11",
    image: "/images/junior/junior-8-11.webp",
    alt: "Child freediving underwater with a Molchanovs Junior program overlay, ages 8 to 11",
    width: 1736,
    height: 2455,
    copy: "As confidence grows, children begin building real technique: steady breathing, better form, and a growing sense of what they're capable of.",
  },
  {
    range: "Ages 12 to 15",
    image: "/images/junior/junior-12-15.webp",
    alt: "Two teens swimming underwater with a Molchanovs Junior program overlay, ages 12 to 15",
    width: 1736,
    height: 2455,
    copy: "Older teens work on refining technique and composure, laying the groundwork for the same certified progression adults follow.",
  },
];

const AGE_RANGES: [number, number][] = [
  [4, 7],
  [8, 11],
  [12, 15],
];

const COURSES: CourseInput[] = ageGroups.map((group, i) => ({
  slug: `junior-ages-${AGE_RANGES[i][0]}-${AGE_RANGES[i][1]}`,
  name: `Junior Program, ${group.range}`,
  description: group.copy,
  ages: AGE_RANGES[i],
}));

const ageGroupImages = ageGroups.map((group) => ({
  src: group.image,
  alt: group.alt,
  width: group.width,
  height: group.height,
}));

export default function JuniorPage() {
  return (
    <>
      <JsonLd
        data={pageSchema("Junior Programs", "/junior", {
          mainEntity: COURSES.map((course) => courseRef("/junior", course)),
        })}
      />
      <JsonLd data={coursesSchema("/junior", COURSES)} />
      <PageHero
        heading="Junior Aquatic Programs"
        image="/images/junior/junior-molchanovs.webp"
        imageAlt="Three junior swimmers practicing underwater in a Molchanovs Junior graphic"
        fit="contain"
      />

      <section className="bg-paper">
        <Container className="pt-12 md:pt-16">
          <Reveal className="max-w-2xl">
            <p className="prose-copy text-lg text-ink-soft">
              Introducing children and teens to aquatic confidence and basic
              freediving in a safe, engaging environment, organized by age so
              every child is met where they are.
            </p>
          </Reveal>
        </Container>
      </section>

      {ageGroups.map((group, index) => (
        <section key={group.range} className={index % 2 === 1 ? "bg-paper-dim" : "bg-paper"}>
          <Container className="py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-center">
              <Reveal scale className={index % 2 === 1 ? "md:order-2" : ""}>
                <LightboxTrigger
                  images={ageGroupImages}
                  index={index}
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="aspect-[4/5] max-w-sm"
                />
              </Reveal>
              <Reveal delayMs={sequenceStep(1)} className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="eyebrow text-ocean-blue">Junior Program</p>
                <h2 className="h2-display mt-4">{group.range}</h2>
                <p className="prose-copy mt-5 text-ink-soft">{group.copy}</p>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-paper">
        <Container className="py-14 md:py-20">
          <Reveal className="max-w-2xl border-t border-ink/15 pt-10">
            <p className="prose-copy text-ink-soft">
              Every junior session stays reassuring and welcoming for parents, guided
              by the same calm approach used across all of SiLak&rsquo;s programs,
              with safety always first.
            </p>
            <p className="prose-copy mt-4 text-ink-soft">
              Parents can read more <TextLink href="/about">about SiLak Davao</TextLink>,
              see <TextLink href="/swimming">swimming courses</TextLink> for all ages,
              or <TextLink href="/book">message SiLak</TextLink> to ask about junior
              programs.
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqSection path="/junior" items={JUNIOR_FAQ} className="bg-paper-dim" />

      <CtaBand heading="Ready to Get Your Child Started?" />
    </>
  );
}
