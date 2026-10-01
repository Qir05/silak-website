import Image from "next/image";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { sequenceStep } from "@/lib/reveal-timing";

export function PageHero({
  eyebrow,
  heading,
  intro,
  image,
  imageAlt,
  imagePosition = "center",
  fit = "cover",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  /**
   * "cover" (default) fills the frame, cropping the source photo - suited to
   * atmospheric photography. "contain" shows the image in full on the
   * section's own deep-navy background, for assets (a designed graphic with
   * baked-in text, a plain-background product photo) that shouldn't be
   * cropped.
   */
  fit?: "cover" | "contain";
}) {
  // Contained assets carry their own baked-in text or product shots, so the
  // copy never sits on top of them: the asset is shown whole beside the copy
  // on desktop and above it on smaller screens.
  if (fit === "contain") {
    return (
      <section className="bg-deep-navy text-white">
        <Container className="grid items-center gap-8 pb-12 pt-9 md:gap-10 md:pb-16 md:pt-12 lg:min-h-[calc(64vh-6rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:py-16">
          <Reveal scale className="lg:order-2">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-contain"
                style={{ objectPosition: imagePosition }}
              />
            </div>
          </Reveal>
          <div className="lg:order-1">
            <Reveal durationMs={800} distancePx={14}>
              {eyebrow && <p className="eyebrow text-soft-aqua">{eyebrow}</p>}
              <h1 className={`h1-display max-w-2xl text-white ${eyebrow ? "mt-4" : ""}`}>{heading}</h1>
            </Reveal>
            {intro && (
              <Reveal durationMs={800} distancePx={14} delayMs={sequenceStep(1)}>
                <p className="prose-copy mt-5 text-white/85">{intro}</p>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative -mt-20 flex min-h-[64vh] items-end overflow-hidden bg-deep-navy text-white lg:-mt-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-deep-navy/55" aria-hidden="true" />
      <Container className="relative z-10 py-14 md:py-20">
        <Reveal durationMs={800} distancePx={14}>
          {eyebrow && <p className="eyebrow text-soft-aqua">{eyebrow}</p>}
          <h1 className={`h1-display max-w-2xl text-white ${eyebrow ? "mt-4" : ""}`}>{heading}</h1>
        </Reveal>
        {intro && (
          <Reveal durationMs={800} distancePx={14} delayMs={sequenceStep(1)}>
            <p className="prose-copy mt-5 text-white/85">{intro}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
