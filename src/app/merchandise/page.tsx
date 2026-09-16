import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { LightboxTrigger } from "@/components/lightbox-trigger";
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

      {MERCHANDISE_PRODUCTS.map((product, index) => (
        <section key={product.slug} className={index % 2 === 1 ? "bg-paper-dim" : "bg-paper"}>
          <Container wide className="py-16 md:py-24 lg:py-28">
            <div
              className={`grid gap-10 md:grid-cols-2 md:gap-16 md:items-center xl:gap-20 ${
                index % 2 === 1 ? "xl:grid-cols-[2fr_3fr]" : "xl:grid-cols-[3fr_2fr]"
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                {product.images.length > 1 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.images.map((image, imgIndex) => (
                      <Reveal key={image.src} delayMs={groupStagger(imgIndex)} scale>
                        <LightboxTrigger
                          images={product.images}
                          index={imgIndex}
                          sizes="(min-width: 1280px) 32vw, (min-width: 640px) 25vw, 90vw"
                          className="aspect-square"
                          fit={product.imageFit}
                        />
                      </Reveal>
                    ))}
                  </div>
                ) : (
                  <Reveal scale>
                    <LightboxTrigger
                      images={product.images}
                      sizes="(min-width: 1280px) 55vw, (min-width: 768px) 50vw, 100vw"
                      className="aspect-square max-w-lg xl:max-w-none"
                      fit={product.imageFit}
                    />
                  </Reveal>
                )}
              </div>
              <Reveal delayMs={sequenceStep(1)} className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="h2-display">{product.label}</h2>
                <p className="prose-copy mt-5 text-ink-soft">{product.description}</p>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-sm border border-deep-ocean bg-deep-ocean px-6 py-3 text-sm font-medium tracking-wide text-paper transition-all duration-200 hover:-translate-y-px hover:bg-ocean-blue"
                >
                  Message SiLak to Order
                </a>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

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
