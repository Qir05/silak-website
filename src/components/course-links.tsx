import Link from "next/link";
import { Container } from "./container";

export const COURSE_LINKS = [
  { href: "/swimming", label: "Swimming courses" },
  { href: "/freediving", label: "Freediving courses" },
  { href: "/junior", label: "Junior programs" },
];

/** A quiet row of links to the course pages, for pages that have none in their copy. */
export function CourseLinks({
  className = "bg-paper",
  links = COURSE_LINKS,
}: {
  className?: string;
  links?: { href: string; label: string }[];
}) {
  return (
    <nav aria-label="Courses" className={className}>
      <Container className="pb-14 md:pb-20">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-8">
          {links.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="text-sm font-medium text-deep-ocean underline decoration-1 underline-offset-4 hover:text-ocean-blue"
            >
              {course.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}
