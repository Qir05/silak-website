import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { groupStagger, sequenceStep } from "@/lib/reveal-timing";
import { REVIEWS } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Student stories and experiences from swimming and freediving sessions with SiLak Davao in Davao City, Philippines.",
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

          {REVIEWS.length > 0 ? (
            <div className="mt-12 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2 md:gap-12">
              {REVIEWS.map((review, i) => (
                <Reveal key={`${review.name}-${i}`} delayMs={groupStagger(i)}>
                  <figure className="flex h-full flex-col">
                    <blockquote className="font-display text-xl leading-snug text-ink md:text-2xl">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 text-sm text-ink-soft">
                      <span className="font-medium text-ink">{review.name}</span>
                      {review.program && <span> &middot; {review.program}</span>}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal
              delayMs={sequenceStep(1)}
              className="mt-12 max-w-2xl border-t border-ink/15 pt-10"
            >
              <p className="prose-copy text-ink-soft">
                Student stories and experiences will be shared here.
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
