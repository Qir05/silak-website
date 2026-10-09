import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { sequenceStep } from "@/lib/reveal-timing";
import { REVIEWS } from "@/lib/reviews";
import { pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/reviews",
  title: "Student Reviews | SiLak Davao",
  description:
    "Real experiences from swimmers and freedivers who trained with SiLak Davao in Davao City, Philippines.",
});

type PanelLayout = {
  /** Grid placement of the caption (numeral + label). */
  caption: string;
  /** Grid placement of the matted screenshot. */
  mat: string;
  /** Direction of the offset line-frame behind the mat. */
  frame: string;
  /** Caption sits beside the mat (stacked) or above it (inline). */
  captionStyle: "side-start" | "side-end" | "inline";
};

// Editorial rhythm, applied in order: left, right, then centered. Below xl
// every panel keeps the caption above a near-full-width mat, alternating a
// small offset so the sequence still reads as curated rather than stacked.
const LAYOUTS: PanelLayout[] = [
  {
    caption: "md:col-span-12 xl:col-span-3 xl:col-start-10 xl:row-start-1 xl:pt-10",
    mat: "md:col-span-11 md:col-start-1 xl:col-span-8 xl:row-start-1",
    frame: "translate-x-3.5 translate-y-3.5",
    captionStyle: "side-start",
  },
  {
    caption: "md:col-span-11 md:col-start-2 xl:col-span-3 xl:col-start-1 xl:row-start-1 xl:pt-10",
    mat: "md:col-span-11 md:col-start-2 xl:col-span-8 xl:col-start-5 xl:row-start-1",
    frame: "-translate-x-3.5 translate-y-3.5",
    captionStyle: "side-end",
  },
  {
    caption: "md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3",
    mat: "md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3",
    frame: "translate-x-3.5 translate-y-3.5",
    captionStyle: "inline",
  },
];

const CAPTION_STYLES: Record<PanelLayout["captionStyle"], { root: string; numeral: string; rule: string; text: string }> = {
  "side-start": {
    root: "xl:flex-col xl:items-start xl:gap-0",
    numeral: "xl:text-6xl",
    rule: "xl:mt-6",
    text: "xl:mt-5",
  },
  "side-end": {
    root: "xl:flex-col xl:items-end xl:gap-0 xl:text-right",
    numeral: "xl:text-6xl",
    rule: "xl:mt-6",
    text: "xl:mt-5",
  },
  inline: { root: "", numeral: "xl:text-4xl", rule: "", text: "" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Reviews", "/reviews")} />
      <section className="bg-paper">
        <Container className="pb-12 pt-16 md:pb-16 md:pt-24 lg:pt-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ocean-blue">Reviews</p>
            <h1 className="h1-display mt-4">Student Stories</h1>
          </Reveal>
          <Reveal delayMs={sequenceStep(1)} className="max-w-2xl">
            <p className="prose-copy mt-5 text-ink-soft">
              Real experiences from swimmers and freedivers who trained with SiLak
              Davao.
            </p>
          </Reveal>
        </Container>

        <Container className="pb-20 md:pb-28 xl:pb-36">
          <div className="flex flex-col gap-16 border-t border-ink/10 pt-12 md:gap-20 md:pt-16 xl:gap-28">
            {REVIEWS.map((review, i) => {
              const layout = LAYOUTS[i % LAYOUTS.length];
              const caption = CAPTION_STYLES[layout.captionStyle];
              const number = String(i + 1).padStart(2, "0");

              return (
                <Reveal key={review.src} delayMs={i === 0 ? sequenceStep(2) : 0}>
                  <figure className="grid gap-5 md:grid-cols-12 md:gap-x-8 md:gap-y-6 xl:items-start">
                    <figcaption
                      className={`flex items-center gap-4 ${caption.root} ${layout.caption}`}
                    >
                      <span
                        className={`font-display text-3xl leading-none text-ocean-blue ${caption.numeral}`}
                      >
                        {number}
                      </span>
                      <span
                        className={`h-px w-10 shrink-0 bg-silak-blue/60 ${caption.rule}`}
                        aria-hidden="true"
                      />
                      <span className={`flex flex-col gap-1 ${caption.text}`}>
                        <span className="eyebrow text-ink">Student Story</span>
                        <span className="text-xs text-ink-soft">Shared on Facebook</span>
                      </span>
                    </figcaption>

                    <div
                      className={`relative isolate -mx-5 sm:-mx-8 md:mx-0 ${layout.mat}`}
                    >
                      {/* Offset line-frame: depth without a drop shadow. */}
                      <span
                        className={`absolute inset-0 -z-10 hidden border border-silak-blue/30 md:block ${layout.frame}`}
                        aria-hidden="true"
                      />
                      <div className="relative bg-aqua-tint p-3 sm:p-5 md:p-6 xl:p-8">
                        <span
                          className="absolute left-0 top-0 h-0.5 w-14 bg-deep-ocean"
                          aria-hidden="true"
                        />
                        <LightboxTrigger
                          images={REVIEWS}
                          index={i}
                          sizes="(min-width: 1280px) 700px, (min-width: 768px) 90vw, 100vw"
                          className={review.aspectClass}
                          fit="contain"
                          matted={false}
                        />
                      </div>
                    </div>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
