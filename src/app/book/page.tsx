import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Connect with SiLak Davao on Facebook or Instagram for current schedules, availability, and booking for swimming and freediving sessions in Davao.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-ocean-blue">Book a Session</p>
          <h1 className="h1-display mt-4">Start Your Water Journey</h1>
          <p className="prose-copy mt-5 text-ink-soft">
            Online booking is on the way. In the meantime, connect with SiLak Davao
            directly for current schedules and availability:
          </p>
        </div>

        <div className="mt-12 grid max-w-2xl gap-6 border-t border-ink/15 pt-10 sm:grid-cols-2">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 border border-ink/15 p-6 transition-colors hover:border-deep-ocean"
          >
            <span className="eyebrow text-ocean-blue">Primary</span>
            <span className="h3-display">Facebook</span>
            <span className="text-sm text-ink-soft underline decoration-1 underline-offset-4 group-hover:text-deep-ocean">
              Message us on Facebook
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 border border-ink/15 p-6 transition-colors hover:border-deep-ocean"
          >
            <span className="eyebrow text-ocean-blue">Secondary</span>
            <span className="h3-display">Instagram</span>
            <span className="text-sm text-ink-soft underline decoration-1 underline-offset-4 group-hover:text-deep-ocean">
              {SOCIAL_LINKS.instagramHandle}
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
