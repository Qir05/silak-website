import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { MerchandiseCarousel } from "@/components/merchandise-carousel";
import { MERCHANDISE_PRODUCTS } from "@/lib/merchandise";

export const metadata: Metadata = {
  title: "SiLak Davao | Swimming & Freediving Instruction in Davao",
  description:
    "SiLak Davao offers survival swimming and Molchanovs freediving instruction in Davao, guiding beginners, families, and advanced divers toward breath control, water safety, and aquatic confidence.",
  alternates: { canonical: "/" },
};

type Program = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

// All three program tiles share one contained editorial treatment (see
// LightboxTrigger's fit="contain") so the row reads as one consistent set:
// each image sits centered on the same aqua mat inside an identical 4:5
// frame, at its own natural proportions, rather than three different crops.
const programs: Program[] = [
  {
    title: "Swimming",
    description:
      "Essential skills for all ages, focusing on water adjustment, swimming techniques, and water safety.",
    href: "/swimming",
    linkLabel: "Learn about swimming",
    image: "/images/swimming/adult-swimming-underwater.webp",
    alt: "Swimmer gliding underwater in a pool during a survival swimming session",
    width: 1440,
    height: 960,
  },
  {
    title: "Freediving",
    description:
      "Discover the freedom of exploring the underwater world on a single breath.",
    href: "/freediving",
    linkLabel: "Explore Freediving",
    image: "/images/freediving/open-water-freediver.jpeg",
    alt: "Freediver descending along a reef in open water",
    width: 2196,
    height: 1913,
  },
  {
    title: "Junior Programs",
    description:
      "Freediving teaches kids to stay calm, face challenges, and trust themselves. Skills they can carry into everyday life.",
    href: "/junior",
    linkLabel: "See junior programs",
    image: "/images/junior/junior-molchanovs.webp",
    alt: "Three junior swimmers practicing underwater during a Molchanovs Junior freediving session",
    width: 1536,
    height: 1024,
  },
];

const programImages = programs.map((program) => ({
  src: program.image,
  alt: program.alt,
  width: program.width,
  height: program.height,
}));

const instructorImage = {
  src: "/images/instructor/edward-berdos.jpeg",
  alt: "Edward M. Berdos, Molchanovs Instructor, wearing freediving gear by the water",
  width: 1536,
  height: 1875,
};

export default function Home() {
  return (
    <>
      <section className="relative -mt-20 flex min-h-[92vh] items-end overflow-hidden bg-deep-navy text-white">
        <Image
          src="/images/hero/reef-freediver.jpg"
          alt="Freediver gliding over a coral reef near Davao"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-deep-navy/60" aria-hidden="true" />
        <Container className="relative z-10 pb-16 pt-40 md:pb-24">
          <Reveal durationMs={800} distancePx={14}>
            <h1 className="h-hero max-w-3xl text-white">
              Find Your Flow. Breathe Into Freedom. Discover Yourself.
            </h1>
          </Reveal>
          <Reveal durationMs={800} distancePx={14} delayMs={sequenceStep(1)}>
            <p className="prose-copy mt-6 text-lg text-white/85">
              From swimming and freediving to unforgettable adventures. We help
              you build confidence and discover what you&rsquo;re capable of.
            </p>
          </Reveal>
          <Reveal durationMs={800} distancePx={14} delayMs={sequenceStep(2)}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/#programs" variant="inverse">
                Explore Courses
              </CtaLink>
              <CtaLink href="/about" variant="secondaryInverse">
                Meet SiLak
              </CtaLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-deep-ocean text-white">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:py-28 lg:gap-20 xl:gap-24">
          <Reveal>
            <p className="eyebrow text-bright-aqua">Beyond the Surface</p>
            <h2 className="h2-display mt-5 max-w-md text-balance">
              Learn the Art of Freediving. Discover the Art of Living.
            </h2>
          </Reveal>
          <Reveal delayMs={sequenceStep(1)} className="flex flex-col gap-5 md:gap-6 lg:gap-7">
            <p className="prose-copy text-white/85">
              At SiLak Davao, we believe freediving is more than going deeper or
              holding your breath longer. It is learning to breathe, relax, move
              with awareness, and stay calm in the water.
            </p>
            <p className="prose-copy text-white/85">
              Our approach is progressive, safe, and beginner friendly, guiding
              you from your first experience in the water, even as a
              non-swimmer, to becoming a confident and skilled freediver.
            </p>
            <p className="prose-copy text-white/85">
              We focus on three foundations: relaxation, breathing, and safety.
              As your skills grow, so does your confidence, body awareness, and
              connection with the ocean.
            </p>
            <p className="prose-copy text-white/85">
              And because we are guests in the underwater world, we teach every
              diver to respect and protect marine life. The ocean gives us
              life, beauty, and freedom. Freediving teaches us to protect what
              we love.
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="programs" className="bg-paper-dim">
        <Container wide className="py-16 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="h2-display">Your Journey in the Water</h2>
            <p className="prose-copy mt-5 text-ink-soft">
              From foundational water safety to advanced freediving techniques, our
              courses are structured for every skill level and age.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-3 md:gap-8 xl:gap-10">
            {programs.map((program, i) => (
              <Reveal key={program.href} delayMs={groupStagger(i)} className="flex flex-col">
                <LightboxTrigger
                  images={programImages}
                  index={i}
                  sizes="(min-width: 1280px) 28vw, (min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/5]"
                  fit="contain"
                />
                <h3 className="h3-display mt-6">{program.title}</h3>
                <p className="prose-copy mt-3 flex-1 text-ink-soft">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="mt-5 inline-block w-fit text-sm font-medium text-deep-ocean underline decoration-1 underline-offset-4 hover:text-ocean-blue"
                >
                  {program.linkLabel}
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-deep-navy text-white">
        <Container wide className="py-20 md:py-32 lg:py-40">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-bright-aqua">Our Belief</p>
            <h2 className="h2-display mt-5">The Ocean Is for Everyone.</h2>
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

            <p className="prose-copy mx-auto mt-8 text-white/85">Our Mission Is Simple</p>
            <p className="font-display mx-auto mt-4 text-xl text-white md:text-2xl">
              Share the knowledge. Teach the skills. Change lives.
            </p>

            <p className="prose-copy mx-auto mt-8 text-white/85">
              Because the ocean has something to teach all of us&mdash;and everyone
              deserves the chance to learn.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-20 lg:py-24">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            <Reveal delayMs={groupStagger(0)} className="border-t border-ink/15 pt-6">
              <span className="eyebrow text-ocean-blue">01</span>
              <h3 className="h3-display mt-3">Breath</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Every course begins with the breath: relaxation, calm, and control that
                carries into everything else we teach in the water.
              </p>
            </Reveal>
            <Reveal delayMs={groupStagger(1)} className="border-t border-ink/15 pt-6">
              <span className="eyebrow text-ocean-blue">02</span>
              <h3 className="h3-display mt-3">Safety</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Safety comes first, always. We build strong water skills and
                make safety a non-negotiable part of every dive.
              </p>
            </Reveal>
            <Reveal delayMs={groupStagger(2)} className="border-t border-ink/15 pt-6">
              <span className="eyebrow text-ocean-blue">03</span>
              <h3 className="h3-display mt-3">Progression</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Master the fundamentals and progress with confidence, one level at a time.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
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
                stillness. My goal is to help you dive deeper, not into the water, but
                into your own potential. Together, we will create a safe, nurturing
                environment for growth and self-discovery, all while having fun and
                building confidence.&rdquo;
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-aqua-tint">
        <Container wide className="py-16 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">SiLak Merchandise</p>
            <h2 className="h2-display mt-5">Carry SiLak Beyond the Water</h2>
            <p className="prose-copy mt-5 text-ink-soft">
              Shirts, masks, and training gear carrying the same SiLak designs you see
              on deck &mdash; available directly through SiLak.
            </p>
          </Reveal>

          <Reveal delayMs={sequenceStep(1)} className="mt-12">
            <MerchandiseCarousel products={MERCHANDISE_PRODUCTS} />
          </Reveal>

          <Reveal delayMs={sequenceStep(2)} className="mt-10">
            <CtaLink href="/merchandise" variant="secondary">
              View Merchandise
            </CtaLink>
          </Reveal>
        </Container>
      </section>

      <section className="bg-deep-navy text-white">
        <Container className="py-20 text-center md:py-32 lg:py-36">
          <Reveal>
            <h2 className="h2-display">Begin Your Journey in the Water</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CtaLink href="/book" variant="inverse">
                Book a Session
              </CtaLink>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61557089507037"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-white/70 underline decoration-1 underline-offset-4 hover:text-white"
            >
              Or reach us on Facebook
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
