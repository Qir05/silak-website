import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Molchanovs Freediving in Davao",
  description:
    "Certified Molchanovs freediving progression in Davao, guiding students through breath-hold composure, equalisation, depth progression, and ocean safety.",
  alternates: { canonical: "/freediving" },
};

export default function FreedivingPage() {
  return (
    <>
      <PageHero
        eyebrow="Freediving in Davao"
        heading="Molchanovs Freediving in Davao"
        intro="Progress through certified levels, mastering breath-hold composure, equalisation, and depth."
        image="/images/freediving/open-water-freediver.jpeg"
        imageAlt="Freediver descending a line in open water"
        imagePosition="center 30%"
      />

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <div className="relative aspect-[3/4] w-full overflow-hidden md:order-2">
              <Image
                src="/images/freediving/freediving-line-training.jpeg"
                alt="Freediver ascending a training line toward the surface"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <p className="eyebrow text-ocean-blue">Certified Progression</p>
              <h2 className="h2-display mt-4">Calm, Structured Depth Progression</h2>
              <p className="prose-copy mt-6 text-ink-soft">
                Training follows the certified Molchanovs curriculum, moving students
                through structured levels rather than rushing toward depth. Each level
                builds breath-hold composure and equalisation before progressing
                further.
              </p>
              <p className="prose-copy mt-4 text-ink-soft">
                Calmness and respect for the marine environment are treated as core
                skills, not afterthoughts &mdash; alongside the ocean safety that
                underlies every dive.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h2 className="h2-display">What the Progression Covers</h2>
          </div>
          <div className="mt-10 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="h3-display">Breath-Hold Composure</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Relaxation and breath control form the foundation every level builds
                on.
              </p>
            </div>
            <div>
              <h3 className="h3-display">Equalisation</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Technique for equalising comfortably and safely as depth increases.
              </p>
            </div>
            <div>
              <h3 className="h3-display">Ocean Safety</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Safety protocols and awareness that stay non-negotiable at every level.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">Molchanovs Levels</p>
            <h2 className="h2-display mt-4">Wave 1 and Wave 2</h2>
            <p className="prose-copy mt-5 text-ink-soft">
              SiLak Davao runs the certified Molchanovs Wave 1 and Wave 2 freediving
              courses. Reach out directly for current availability and details.
            </p>
          </div>
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-2 sm:max-w-xl">
            <div className="relative aspect-square w-full overflow-hidden bg-ink">
              <Image
                src="/images/programs/molchanovs-wave-1.jpeg"
                alt="Molchanovs Wave 1 freediving certification badge"
                fill
                sizes="(min-width: 640px) 260px, 50vw"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden bg-ink">
              <Image
                src="/images/programs/molchanovs-wave-2.jpeg"
                alt="Molchanovs Wave 2 freediving certification badge"
                fill
                sizes="(min-width: 640px) 260px, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden">
              <Image
                src="/images/instructor/edward-berdos.jpeg"
                alt="Edward M. Berdos, Molchanovs Instructor"
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow text-ocean-blue">Your Instructor</p>
              <h2 className="h2-display mt-4">Edward M. Berdos</h2>
              <p className="mt-2 text-sm font-medium tracking-wide text-ink-soft">
                Molchanovs Instructor
              </p>
              <p className="prose-copy mt-6 text-ink-soft">
                Training is guided around calmness and presence &mdash; never rushed or
                forced. Students are taught to trust their bodies and build confidence
                one level at a time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand heading="Ready to Start Your Freediving Progression?" />
    </>
  );
}
