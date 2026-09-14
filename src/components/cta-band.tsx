import { Container } from "./container";
import { CtaLink } from "./cta-link";
import { Reveal } from "./reveal";

export function CtaBand({
  heading = "Begin Your Journey in the Water",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-deep-navy text-white">
      <Container className="py-20 text-center md:py-28 lg:py-32">
        <Reveal>
          <h2 className="h2-display">{heading}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaLink href="/book" variant="inverse">
              Book a Session
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
