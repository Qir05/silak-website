import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About SiLak Davao",
  description:
    "SiLak Davao is a swimming and freediving school in Davao led by Molchanovs Instructor Edward M. Berdos, built around breath, safety, and respect for the ocean.",
  alternates: { canonical: "/about" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edward M. Berdos",
  jobTitle: "Molchanovs Instructor",
  worksFor: {
    "@type": "Organization",
    name: "SiLak Davao",
    url: SITE_URL,
  },
};

const instructorImage = {
  src: "/images/instructor/edward-berdos.jpeg",
  alt: "Edward M. Berdos, Molchanovs Instructor, wearing freediving gear by the water",
  width: 1536,
  height: 1875,
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="bg-paper-dim">
        <Container className="py-16 md:py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow text-ocean-blue">About SiLak Davao</p>
            <h1 className="h1-display mt-4 max-w-2xl">The Ocean Is for Everyone</h1>
          </Reveal>
        </Container>
      </section>

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
              <Reveal key={value.title} delayMs={groupStagger(i)} className="border-t border-ink/15 pt-6">
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
                images={[instructorImage]}
                sizes="(min-width: 1536px) 600px, (min-width: 1280px) 480px, (min-width: 768px) 380px, 100vw"
                className="aspect-[4/5] max-w-sm xl:max-w-[480px] 2xl:max-w-[600px]"
              />
            </Reveal>
            <Reveal delayMs={sequenceStep(1)} className="flex flex-col justify-center">
              <p className="eyebrow text-ocean-blue">Meet Your Instructor</p>
              <h2 className="h2-display mt-4">Edward M. Berdos</h2>
              <div className="mt-2 flex items-center gap-2 text-ink-soft">
                <span className="text-sm font-medium tracking-wide">
                  Molchanovs Instructor
                </span>
                <Image
                  src="/logos/molchanovs-mark.png"
                  alt="Molchanovs"
                  width={20}
                  height={16}
                  className="h-4 w-auto object-contain opacity-70"
                />
              </div>
              <p className="prose-copy mt-6 text-ink-soft">
                &ldquo;The heart of my approach to teaching freediving is the belief in
                calmness and presence. I focus on guiding students to embrace the
                beauty of relaxation, ensuring that they never feel rushed or forced.
                In freediving, as in life, the greatest growth happens when you embrace
                the moment, and I teach my students to surrender to the flow of the
                water, trust their bodies, and experience the transformative power of
                stillness.&rdquo;
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                &ldquo;My goal is to help you dive deeper, not into the water, but into
                your own potential. Together, we will create a safe, nurturing
                environment for growth and self-discovery, all while having fun and
                building confidence.&rdquo;
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
