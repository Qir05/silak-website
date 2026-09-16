import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { sequenceStep } from "@/lib/reveal-timing";
import { MerchandiseCarousel } from "@/components/merchandise-carousel";
import { MERCHANDISE_PRODUCTS } from "@/lib/merchandise";
import { SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "SiLak Merchandise",
  description:
    "SiLak branded shirts and water-related gear available through SiLak Davao, including apparel, masks, and freediving training accessories.",
  alternates: { canonical: "/merchandise" },
};

export default function MerchandisePage() {
  return (
    <>
      <section className="bg-paper-dim">
        <Container className="py-16 md:py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow text-ocean-blue">Merchandise</p>
            <h1 className="h1-display mt-4 max-w-2xl">SiLak Merchandise</h1>
          </Reveal>
          <Reveal delayMs={sequenceStep(1)}>
            <p className="prose-copy mt-5 text-ink-soft">
              SiLak branded shirts and water-related gear, available directly through
              SiLak Davao. Reach out to see current designs and availability.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper">
        <Container wide className="py-16 md:py-24 lg:py-28">
          <Reveal>
            <MerchandiseCarousel products={MERCHANDISE_PRODUCTS} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-deep-navy text-white">
        <Container className="py-20 text-center md:py-32 lg:py-36">
          <Reveal>
            <h2 className="h2-display">Ordering SiLak Merchandise</h2>
            <p className="prose-copy mx-auto mt-5 text-white/85">
              SiLak merchandise is not sold through this website. Message SiLak
              directly on Facebook or Instagram to check current designs, sizes, and
              availability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 text-white hover:text-soft-aqua"
              >
                Facebook
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 text-white/85 hover:text-soft-aqua"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
