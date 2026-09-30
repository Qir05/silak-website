import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
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
        <Container wide className="py-16 md:py-24 lg:py-28">
          <ul className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10">
            {REVIEWS.map((review, i) => {
              const approved = Boolean(review.quote && review.name);
              // With two columns on tablet, an odd final card spans the full
              // row so the set never ends on a lone half-width card.
              const spanLast =
                i === REVIEWS.length - 1 && REVIEWS.length % 2 === 1
                  ? "md:col-span-2 lg:col-span-1"
                  : "";

              return (
                <li key={review.label} className={spanLast}>
                  <Reveal delayMs={groupStagger(i)} className="h-full">
                    <figure className="flex h-full min-h-[18rem] flex-col border border-ink/10 bg-paper p-8 md:min-h-[20rem] md:p-10">
                      <div className="flex items-center justify-between gap-4">
                        <span className="eyebrow text-ocean-blue">{review.label}</span>
                        <span
                          className="font-display text-5xl leading-none text-soft-aqua"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>
                      </div>

                      {approved ? (
                        <>
                          <blockquote className="font-display mt-8 flex-1 text-xl leading-snug text-ink md:text-2xl">
                            {review.quote}
                          </blockquote>
                          <figcaption className="mt-8 border-t border-ink/10 pt-5 text-sm text-ink-soft">
                            <span className="font-medium text-ink">{review.name}</span>
                            {review.program && <span> &middot; {review.program}</span>}
                          </figcaption>
                        </>
                      ) : (
                        <>
                          <div className="flex-1" />
                          <figcaption className="mt-8 border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink-soft">
                            Approved testimonial content will be added here.
                          </figcaption>
                        </>
                      )}
                    </figure>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
