import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, instructorSchema } from "@/lib/schema";
import { FAQ } from "@/lib/faq";
import Link from "next/link";
import { InstructorCredential } from "@/components/instructor-credential";
import { ACTIVE_INSTRUCTOR as instructor } from "@/lib/instructors";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About SiLak Davao | Swimming & Freediving in Davao City",
  description:
    "About SiLak Davao, a swimming and freediving school in Davao City built around breath, safety, and respect for the ocean, with answers to common questions.",
});


const values = [
  {
    title: "Breath",
    copy: "Calmness and breath control come before technique, in the pool and in the ocean alike.",
  },
  {
    title: "Safety",
    copy: "Water safety is treated as non-negotiable, whether the setting is survival swimming or open-water freediving.",
  },
  {
    title: "Respect for the Ocean",
    copy: "Every session builds composure alongside respect for the marine environment students are learning within.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("About", "/about")} />
      <JsonLd data={instructorSchema()} />
      <JsonLd data={faqSchema(FAQ)} />

      <PageHero
        heading="The Ocean Is for Everyone"
        image="/images/freediving/open-water-freediver.jpeg"
        imageAlt="Freediver arching backward above a coral reef in sunlit open water"
        imagePosition="45% 40%"
      />

      <section className="bg-deep-navy text-white">
        <Container wide className="py-20 md:py-32 lg:py-40">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-bright-aqua">Our Belief</p>
          </Reveal>

          <Reveal delayMs={sequenceStep(1)} className="mx-auto max-w-3xl text-center">
            <p className="prose-copy mx-auto mt-8 text-white/85">
              At SiLak, we believe freediving is more than learning to hold your breath
              or reaching greater depths. It is a journey of discovering the
              ocean&mdash;and discovering yourself.
            </p>

            <p className="font-display mx-auto mt-8 max-w-2xl text-2xl leading-snug text-soft-aqua md:text-3xl">
              We don&rsquo;t just want to create better freedivers. We want to help
              create better, calmer, more confident people.
            </p>

            <p className="prose-copy mx-auto mt-8 text-white/85">Our Vision Is Simple</p>
            <p className="font-display mx-auto mt-3 text-xl text-white md:text-2xl">
              Share the knowledge. Teach the skills. Change lives.
            </p>

            <p className="prose-copy mx-auto mt-8 text-white/85">
              Because the ocean has something to teach all of us&mdash;and everyone
              deserves the chance to learn.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-14 md:py-20 lg:py-24">
          <div className="grid gap-10 md:grid-cols-3 md:gap-10">
            {values.map((value, i) => (
              <Reveal key={value.title} stagger delayMs={groupStagger(i)} className="border-t border-ink/15 pt-6">
                <h2 className="h3-display">{value.title}</h2>
                <p className="prose-copy mt-3 text-ink-soft">{value.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container wide className="py-20 md:py-32 lg:py-40">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16 xl:grid-cols-[minmax(0,480px)_1fr] xl:gap-20 2xl:grid-cols-[minmax(0,600px)_1fr]">
            <Reveal scale>
              <LightboxTrigger
                images={[instructor.image]}
                sizes="(min-width: 1536px) 600px, (min-width: 1280px) 480px, (min-width: 768px) 380px, 100vw"
                className="aspect-[4/5] max-w-sm xl:max-w-[480px] 2xl:max-w-[600px]"
              />
            </Reveal>
            <div className="flex flex-col justify-center">
              <Reveal delayMs={sequenceStep(1)}>
                <p className="eyebrow text-ocean-blue">Meet Your Instructor</p>
                <h2 className="h2-display mt-4">{instructor.name}</h2>
                <InstructorCredential instructor={instructor} />
              </Reveal>
              <Reveal delayMs={sequenceStep(2)}>
                {instructor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="prose-copy mt-4 text-ink-soft first:mt-6">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">Questions</p>
            <h2 className="h2-display mt-4">Common Questions</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:mt-12 md:grid-cols-2">
            {FAQ.map((item, i) => (
              <Reveal key={item.question} stagger delayMs={groupStagger(i % 2)} className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">{item.question}</h3>
                <p className="prose-copy mt-3 text-ink-soft">{item.answer}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-3 inline-block text-sm font-medium text-deep-ocean underline decoration-1 underline-offset-4 hover:text-ocean-blue"
                  >
                    {item.link.label}
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
