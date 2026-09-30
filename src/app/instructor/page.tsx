import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edward M. Berdos, Molchanovs Instructor",
  description:
    "Meet Edward M. Berdos, Molchanovs Instructor at SiLak Davao, and his approach to teaching freediving through calmness, presence, and relaxation in the water.",
  alternates: { canonical: "/instructor" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edward M. Berdos",
  jobTitle: "Molchanovs Instructor",
  image: `${SITE_URL}/images/instructor/edward-berdos.jpeg`,
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

export default function InstructorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="bg-paper">
        <Container wide className="py-16 md:py-24 lg:py-32">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16 xl:grid-cols-[minmax(0,480px)_1fr] xl:gap-20 2xl:grid-cols-[minmax(0,600px)_1fr]">
            <Reveal scale>
              <LightboxTrigger
                images={[instructorImage]}
                sizes="(min-width: 1536px) 600px, (min-width: 1280px) 480px, (min-width: 768px) 380px, 100vw"
                className="aspect-[4/5] max-w-sm xl:max-w-[480px] 2xl:max-w-[600px]"
                priority
              />
            </Reveal>
            <Reveal delayMs={sequenceStep(1)} className="flex flex-col justify-center">
              <p className="eyebrow text-ocean-blue">Meet Your Instructor</p>
              <h1 className="h1-display mt-4">Edward M. Berdos</h1>
              <div className="mt-3 flex items-center gap-2 text-ink-soft">
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
              <p className="prose-copy mt-8 text-ink-soft">
                &ldquo;The heart of my approach to teaching freediving is the belief in
                calmness and presence. I focus on guiding students to embrace the
                beauty of relaxation, ensuring that they never feel rushed or forced.
                In freediving, as in life, the greatest growth happens when you embrace
                the moment, and I teach my students to surrender to the flow of the
                water, trust their bodies, and experience the transformative power of
                stillness.&rdquo;
              </p>
              <p className="font-display mt-8 max-w-2xl text-2xl leading-snug text-deep-ocean md:text-3xl">
                &ldquo;My goal is to help you dive deeper, not into the water, but into
                your own potential.&rdquo;
              </p>
              <p className="prose-copy mt-8 text-ink-soft">
                &ldquo;Together, we will create a safe, nurturing environment for
                growth and self-discovery, all while having fun and building
                confidence.&rdquo;
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
