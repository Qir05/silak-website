import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="bg-paper-dim">
        <Container className="py-16 md:py-24 lg:py-28">
          <p className="eyebrow text-ocean-blue">About SiLak Davao</p>
          <h1 className="h1-display mt-4 max-w-2xl">The Ocean Is for Everyone</h1>
        </Container>
      </section>

      <section className="bg-deep-ocean text-white">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-bright-aqua">Our Belief</p>

            <p className="prose-copy mx-auto mt-8 text-white/85">
              At SiLak, we believe freediving is more than learning to hold your breath
              or reaching greater depths. It is a journey of discovering the
              ocean&mdash;and discovering yourself.
            </p>

            <p className="font-display mx-auto mt-8 max-w-2xl text-2xl leading-snug text-soft-aqua md:text-3xl">
              We don&rsquo;t just want to create better freedivers. We want to help
              create better, calmer, more confident people.
            </p>

            <p className="prose-copy mx-auto mt-8 text-white/85">Our vision is simple:</p>
            <p className="font-display mx-auto mt-3 text-xl text-white md:text-2xl">
              Share the knowledge. Discover yourself.
            </p>

            <p className="prose-copy mx-auto mt-8 text-white/85">
              Because the ocean has something to teach all of us&mdash;and everyone
              deserves the chance to learn.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-10 md:grid-cols-3 md:gap-10">
            <div className="border-t border-ink/15 pt-6">
              <h2 className="h3-display">Breath</h2>
              <p className="prose-copy mt-3 text-ink-soft">
                Calmness and breath control come before technique, in the pool and in
                the ocean alike.
              </p>
            </div>
            <div className="border-t border-ink/15 pt-6">
              <h2 className="h3-display">Safety</h2>
              <p className="prose-copy mt-3 text-ink-soft">
                Water safety is treated as non-negotiable, whether the setting is
                survival swimming or open-water freediving.
              </p>
            </div>
            <div className="border-t border-ink/15 pt-6">
              <h2 className="h3-display">Respect for the Ocean</h2>
              <p className="prose-copy mt-3 text-ink-soft">
                Every session builds composure alongside respect for the marine
                environment students are learning within.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
              <Image
                src="/images/instructor/edward-berdos.jpeg"
                alt="Edward M. Berdos, Molchanovs Instructor, wearing freediving gear by the water"
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
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
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
