import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { LightboxTrigger } from "@/components/lightbox-trigger";

export const metadata: Metadata = {
  title: "SiLak Davao | Swimming & Freediving Instruction in Davao",
  description:
    "SiLak Davao offers survival swimming and Molchanovs freediving instruction in Davao, guiding beginners, families, and advanced divers toward breath control, water safety, and aquatic confidence.",
  alternates: { canonical: "/" },
};

const programs = [
  {
    title: "Survival Swimming",
    description:
      "Essential skills for all ages, focusing on basic techniques, water safety, and confident survival floats.",
    href: "/swimming",
    linkLabel: "Learn about survival swimming",
    image: "/images/swimming/adult-swimming-underwater.webp",
    alt: "Swimmer gliding underwater in a pool during a survival swimming session",
    width: 1440,
    height: 960,
  },
  {
    title: "Molchanovs Freediving",
    description:
      "Progress through certified levels, mastering breath-hold composure, equalisation, and depth.",
    href: "/freediving",
    linkLabel: "Explore freediving levels",
    image: "/images/freediving/open-water-freediver.jpeg",
    alt: "Freediver descending along a reef in open water",
    width: 2196,
    height: 1913,
  },
  {
    title: "Junior Programs",
    description:
      "Introducing children and teens to aquatic confidence and basic freediving in a safe, engaging environment.",
    href: "/junior",
    linkLabel: "See junior programs",
    image: "/images/junior/junior-8-11.webp",
    alt: "Junior swimmer practicing freediving skills in a pool",
    width: 1736,
    height: 2455,
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
      <section className="relative -mt-20 flex min-h-[92vh] items-end overflow-hidden bg-deep-ocean text-white">
        <Image
          src="/images/hero/reef-freediver.jpg"
          alt="Freediver gliding over a coral reef near Davao"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-deep-ocean/45" aria-hidden="true" />
        <Container className="relative z-10 pb-16 pt-40 md:pb-24">
          <Reveal>
            <p className="eyebrow text-soft-aqua">Swimming and Freediving in Davao</p>
            <h1 className="h-hero mt-5 max-w-3xl text-white">
              Find Your Flow. Discover What You&rsquo;re Capable Of.
            </h1>
            <p className="prose-copy mt-6 text-lg text-white/85">
              Swimming, freediving, and unforgettable experiences in and around the
              water.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
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
        <Container className="grid gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow text-bright-aqua">Beyond the Surface</p>
            <h2 className="h2-display mt-5 max-w-md">
              Aquatic Confidence Through Breath and Safety
            </h2>
          </Reveal>
          <Reveal delayMs={100} className="flex flex-col gap-6">
            <p className="prose-copy text-white/85">
              SiLak Davao combines certified Molchanovs freediving progression with
              dedicated survival swimming. Our approach prioritizes breath control,
              equalisation, and non-negotiable ocean safety, fostering a profound
              connection with water.
            </p>
            <p className="prose-copy text-white/85">
              We guide complete beginners, families, youth, and advanced divers to
              master aquatic skills, treating the ocean as a space of flow rather than
              fear. Every session builds composure and respect for the marine
              environment.
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="programs" className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="h2-display">Your Journey in the Water</h2>
            <p className="prose-copy mt-5 text-ink-soft">
              From foundational water safety to advanced freediving techniques, our
              courses are structured for every skill level and age.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-3 md:gap-8">
            {programs.map((program, i) => (
              <Reveal key={program.href} delayMs={i * 100} className="flex flex-col">
                <LightboxTrigger
                  images={programImages}
                  index={i}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/5]"
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

      <section className="bg-deep-ocean text-white">
        <Container className="py-14 md:py-24 lg:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-bright-aqua">Our Belief</p>
            <h2 className="h2-display mt-5">The Ocean Is for Everyone.</h2>

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
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            <Reveal delayMs={0} className="border-t border-ink/15 pt-6">
              <span className="eyebrow text-ocean-blue">01</span>
              <h3 className="h3-display mt-3">Breath</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Every course begins with the breath: relaxation, calm, and control that
                carries into everything else we teach in the water.
              </p>
            </Reveal>
            <Reveal delayMs={100} className="border-t border-ink/15 pt-6">
              <span className="eyebrow text-ocean-blue">02</span>
              <h3 className="h3-display mt-3">Safety</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Water safety and confident survival floats come before anything else.
                Ocean safety is treated as non-negotiable at every level.
              </p>
            </Reveal>
            <Reveal delayMs={200} className="border-t border-ink/15 pt-6">
              <span className="eyebrow text-ocean-blue">03</span>
              <h3 className="h3-display mt-3">Progression</h3>
              <p className="prose-copy mt-3 text-ink-soft">
                Students move through certified Molchanovs levels at their own pace,
                building equalisation and depth on a foundation of composure.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim">
        <Container className="py-14 md:py-24 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <Reveal scale>
              <LightboxTrigger
                images={[instructorImage]}
                sizes="(min-width: 768px) 380px, 100vw"
                className="aspect-[4/5] max-w-sm"
              />
            </Reveal>
            <Reveal delayMs={100} className="flex flex-col justify-center">
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

      <section className="bg-deep-ocean text-white">
        <Container className="py-14 text-center md:py-20">
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
