import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { InstructorCredential } from "@/components/instructor-credential";
import { TextLink } from "@/components/text-link";
import { ACTIVE_INSTRUCTORS, instructorNames } from "@/lib/instructors";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { CourseLinks } from "@/components/course-links";
import { instructorRefs, instructorsSchema, pageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/instructor",
  title: "Swimming and Freediving Instructors in Davao City | SiLak",
  description: `Meet the instructors at SiLak Davao, a swimming and freediving school in Davao City, Philippines: ${instructorNames(ACTIVE_INSTRUCTORS)}.`,
});

const SUBJECT_LINKS: Record<string, { href: string; label: string }> = {
  Swimming: { href: "/swimming", label: "Swimming courses" },
  Freediving: { href: "/freediving", label: "Freediving courses" },
};

export default function InstructorPage() {
  return (
    <>
      <JsonLd data={pageSchema("Instructors", "/instructor", { mainEntity: instructorRefs })} />
      <JsonLd data={instructorsSchema()} />

      <section className="bg-paper">
        <Container wide className="pt-16 md:pt-24 lg:pt-32">
          <Reveal immediate className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">SiLak Davao</p>
            <h1 className="h1-display mt-4">Meet the Instructors</h1>
            <p className="prose-copy mt-5 text-ink-soft">
              The people teaching at SiLak Davao, a swimming and freediving school
              in Davao City, Philippines. Read{" "}
              <TextLink href="/reviews">what students say</TextLink> about training
              with SiLak.
            </p>
          </Reveal>
        </Container>

        {ACTIVE_INSTRUCTORS.map((instructor, index) => (
          <Container
            key={instructor.slug}
            id={instructor.slug}
            wide
            className="scroll-mt-24 py-12 md:py-16 lg:py-20"
          >
            <div className="grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16 md:pt-16 lg:pt-20 xl:grid-cols-[minmax(0,480px)_1fr] xl:gap-20 2xl:grid-cols-[minmax(0,600px)_1fr]">
              <Reveal scale immediate={index === 0}>
                <LightboxTrigger
                  images={[instructor.image]}
                  sizes="(min-width: 1536px) 600px, (min-width: 1280px) 480px, (min-width: 768px) 380px, 100vw"
                  className="aspect-[4/5] max-w-sm xl:max-w-[480px] 2xl:max-w-[600px]"
                  preload={index === 0}
                />
              </Reveal>
              <div className="flex flex-col justify-center">
                <Reveal delayMs={sequenceStep(1)}>
                  <p className="eyebrow text-ocean-blue">Instructor</p>
                  <h2 className="h2-display mt-4">{instructor.name}</h2>
                  {instructor.alternateName && (
                    <p className="mt-2 text-sm text-ink-soft">
                      Also known as {instructor.alternateName}
                    </p>
                  )}
                  <InstructorCredential instructor={instructor} className="mt-3" />
                </Reveal>
                <Reveal delayMs={sequenceStep(2)}>
                  {instructor.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="prose-copy mt-6 text-ink-soft first:mt-8">
                      {paragraph}
                    </p>
                  ))}
                  <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {instructor.knowsAbout.map((subject) => (
                      <TextLink key={subject} href={SUBJECT_LINKS[subject].href}>
                        {SUBJECT_LINKS[subject].label}
                      </TextLink>
                    ))}
                    <TextLink href="/book">Book a session</TextLink>
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        ))}
      </section>

      <CourseLinks />

      <CtaBand />
    </>
  );
}
