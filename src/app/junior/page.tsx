import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Junior Aquatic Programs",
  description:
    "Junior aquatic programs in Davao for ages 4 to 15, introducing children and teens to aquatic confidence and basic freediving in a safe, engaging environment.",
  alternates: { canonical: "/junior" },
};

const ageGroups = [
  {
    range: "Ages 4 to 7",
    image: "/images/junior/junior-4-7.webp",
    alt: "Young child practicing freediving skills underwater with a Molchanovs Junior program overlay, ages 4 to 7",
    copy: "The earliest stage is about comfort and play in the water — getting used to a mask, floating, and feeling at ease before anything else.",
  },
  {
    range: "Ages 8 to 11",
    image: "/images/junior/junior-8-11.webp",
    alt: "Child freediving underwater with a Molchanovs Junior program overlay, ages 8 to 11",
    copy: "As confidence grows, children begin building real technique — steady breathing, better form, and a growing sense of what they're capable of.",
  },
  {
    range: "Ages 12 to 15",
    image: "/images/junior/junior-12-15.webp",
    alt: "Two teens swimming underwater with a Molchanovs Junior program overlay, ages 12 to 15",
    copy: "Older teens work on refining technique and composure, laying the groundwork for the same certified progression adults follow.",
  },
];

export default function JuniorPage() {
  return (
    <>
      <section className="bg-paper-dim">
        <Container className="py-16 md:py-24 lg:py-28">
          <p className="eyebrow text-ocean-blue">For Children and Teens</p>
          <h1 className="h1-display mt-4 max-w-2xl">Junior Aquatic Programs</h1>
          <p className="prose-copy mt-5 text-ink-soft">
            Introducing children and teens to aquatic confidence and basic freediving
            in a safe, engaging environment &mdash; organized by age so every child is
            met where they are.
          </p>
        </Container>
      </section>

      {ageGroups.map((group, index) => (
        <section key={group.range} className={index % 2 === 1 ? "bg-paper-dim" : "bg-paper"}>
          <Container className="py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(min-width: 768px) 380px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="eyebrow text-ocean-blue">Molchanovs Junior</p>
                <h2 className="h2-display mt-4">{group.range}</h2>
                <p className="prose-copy mt-5 text-ink-soft">{group.copy}</p>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-paper">
        <Container className="py-14 md:py-20">
          <div className="max-w-2xl border-t border-ink/15 pt-10">
            <p className="prose-copy text-ink-soft">
              Every junior session stays reassuring and parent-friendly, guided by the
              same calm, safety-first approach used across all of SiLak&rsquo;s
              programs.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand heading="Ready to Get Your Child Started?" />
    </>
  );
}
