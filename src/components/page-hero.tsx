import Image from "next/image";
import { Container } from "./container";

export function PageHero({
  eyebrow,
  heading,
  intro,
  image,
  imageAlt,
  imagePosition = "center",
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative -mt-20 flex min-h-[64vh] items-end overflow-hidden bg-deep-ocean text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep-ocean/90 via-deep-ocean/30 to-deep-ocean/40"
        aria-hidden="true"
      />
      <Container className="relative z-10 py-14 md:py-20">
        <p className="eyebrow text-soft-aqua">{eyebrow}</p>
        <h1 className="h1-display mt-4 max-w-2xl text-white">{heading}</h1>
        <p className="prose-copy mt-5 text-white/85">{intro}</p>
      </Container>
    </section>
  );
}
