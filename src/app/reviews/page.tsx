import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { LightboxTrigger } from "@/components/lightbox-trigger";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { REVIEWS } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Real experiences from swimmers and freedivers who trained with SiLak Davao in Davao City, Philippines.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-paper">
        <Container className="py-16 md:py-24 lg:py-28">
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
      </section>

      <section className="bg-aqua-tint">
        <Container className="py-16 md:py-24 lg:py-28">
          {/* One review per row at every width: the screenshots are wide and
              text-heavy, so a single generous column keeps the post text at
              close to its original on-screen size instead of shrinking it
              into narrow grid cells. */}
          <ul className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-10">
            {REVIEWS.map((review, i) => (
              <li key={review.src}>
                <Reveal delayMs={groupStagger(i)}>
                  <figure className="border border-ink/10 bg-paper p-2 sm:p-3 md:p-4">
                    <LightboxTrigger
                      images={REVIEWS}
                      index={i}
                      sizes="(min-width: 768px) 736px, 100vw"
                      className={review.aspectClass}
                      fit="contain"
                      matted={false}
                    />
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
