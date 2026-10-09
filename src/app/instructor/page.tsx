import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { InstructorCredential } from "@/components/instructor-credential";
import { ACTIVE_INSTRUCTOR as instructor } from "@/lib/instructors";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, instructorSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/instructor",
  title: `Meet ${instructor.name}, Your Instructor | SiLak Davao`,
  description: instructor.metaDescription,
});

export default function InstructorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Instructor", "/instructor")} />
      <JsonLd data={instructorSchema()} />

      <section className="bg-paper">
        <Container wide className="py-16 md:py-24 lg:py-32">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16 xl:grid-cols-[minmax(0,480px)_1fr] xl:gap-20 2xl:grid-cols-[minmax(0,600px)_1fr]">
            <Reveal scale>
              <LightboxTrigger
                images={[instructor.image]}
                sizes="(min-width: 1536px) 600px, (min-width: 1280px) 480px, (min-width: 768px) 380px, 100vw"
                className="aspect-[4/5] max-w-sm xl:max-w-[480px] 2xl:max-w-[600px]"
                priority
              />
            </Reveal>
            <div className="flex flex-col justify-center">
              <Reveal delayMs={sequenceStep(1)}>
                <p className="eyebrow text-ocean-blue">Meet Your Instructor</p>
                <h1 className="h1-display mt-4">{instructor.name}</h1>
                <InstructorCredential instructor={instructor} className="mt-3" />
              </Reveal>
              <Reveal delayMs={sequenceStep(2)}>
                {instructor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="prose-copy mt-6 text-ink-soft first:mt-8">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
