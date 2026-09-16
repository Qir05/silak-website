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
  return (
    <section className="relative -mt-20 flex min-h-[64vh] items-end overflow-hidden bg-deep-navy text-white lg:-mt-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={fit === "contain" ? "object-contain" : "object-cover"}
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
