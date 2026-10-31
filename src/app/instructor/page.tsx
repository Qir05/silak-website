import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { InstructorCredential } from "@/components/instructor-credential";
import {
  ACTIVE_INSTRUCTORS,
  instructorNames,
  type InstructorProfile,
} from "@/lib/instructors";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { CourseLinks } from "@/components/course-links";
import { pageSchema, instructorsSchema } from "@/lib/schema";

const names = instructorNames(ACTIVE_INSTRUCTORS);

export const metadata: Metadata = pageMetadata({
  path: "/instructor",
  title: `Instructors at SiLak Davao | ${names}`,
  description: `Meet the instructors at SiLak Davao, a swimming and freediving school in Davao City, Philippines: ${names}.`,
});

const GRID_COLUMNS =
  "md:grid-cols-[minmax(0,380px)_1fr] md:gap-16 xl:grid-cols-[minmax(0,480px)_1fr] xl:gap-20 2xl:grid-cols-[minmax(0,600px)_1fr]";

function InstructorDetails({ instructor }: { instructor: InstructorProfile }) {
  return (
    <>
      <Reveal delayMs={sequenceStep(1)}>
        <p className="eyebrow text-ocean-blue">Instructor</p>
        <h2 className="h2-display mt-4">{instructor.name}</h2>
        <InstructorCredential instructor={instructor} className="mt-3" />
      </Reveal>
      {instructor.bio.length > 0 && (
        <Reveal delayMs={sequenceStep(2)}>
          {instructor.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="prose-copy mt-6 text-ink-soft first:mt-8">
              {paragraph}
            </p>
          ))}
        </Reveal>
      )}
    </>
  );
}

export default function InstructorPage() {
  return (
    <>
      <JsonLd data={pageSchema("Instructors", "/instructor")} />
      <JsonLd data={instructorsSchema()} />

      <section className="bg-paper">
        <Container wide className="pt-16 md:pt-24 lg:pt-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">SiLak Davao</p>
            <h1 className="h1-display mt-4">Meet the Instructors</h1>
          </Reveal>
        </Container>

        {ACTIVE_INSTRUCTORS.map((instructor, index) => (
          <Container
            key={instructor.slug}
            wide
            className={index === 0 ? "py-12 md:py-16 lg:py-20" : "pb-16 md:pb-24 lg:pb-32"}
          >
            <div
              className={`grid gap-10 border-t border-ink/10 pt-12 md:pt-16 lg:pt-20 ${GRID_COLUMNS}`}
            >
              {instructor.image ? (
                <Reveal scale>
                  <LightboxTrigger
                    images={[instructor.image]}
                    sizes="(min-width: 1536px) 600px, (min-width: 1280px) 480px, (min-width: 768px) 380px, 100vw"
                    className="aspect-[4/5] max-w-sm xl:max-w-[480px] 2xl:max-w-[600px]"
                    priority={index === 0}
                  />
                </Reveal>
              ) : (
                <div aria-hidden className="hidden md:block" />
              )}
              <div className="flex flex-col justify-center">
                <InstructorDetails instructor={instructor} />
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
