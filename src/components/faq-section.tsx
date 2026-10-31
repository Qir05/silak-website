import Link from "next/link";
import { Container } from "./container";
import { JsonLd } from "./json-ld";
import { Reveal } from "./reveal";
import type { FaqEntry } from "@/lib/faq";
import { groupStagger } from "@/lib/reveal-timing";
import { faqSchema } from "@/lib/schema";

/** Visible questions and answers for a page, with matching FAQPage schema. */
export function FaqSection({
  path,
  items,
  className = "bg-paper",
}: {
  /** The page this section sits on, tying the FAQPage schema to that page. */
  path: string;
  items: FaqEntry[];
  className?: string;
}) {
  return (
    <section className={className}>
      <JsonLd data={faqSchema(path, items)} />
      <Container className="py-16 md:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ocean-blue">Questions</p>
          <h2 className="h2-display mt-4">Common Questions</h2>
        </Reveal>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:mt-12 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal
              key={item.question}
              stagger
              delayMs={groupStagger(i % 2)}
              className="border-t border-ink/15 pt-6"
            >
              <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">
                {item.question}
              </h3>
              <p className="prose-copy mt-3 text-ink-soft">{item.answer}</p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-3 inline-block text-sm font-medium text-deep-ocean underline decoration-1 underline-offset-4 hover:text-ocean-blue"
                >
                  {item.link.label}
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
