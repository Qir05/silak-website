import { OTHER_INSTRUCTORS } from "@/lib/instructors";

/** Names the instructors a feature section does not profile, so a page that
 * shows one portrait never reads as though SiLak has a single instructor. */
export function OtherInstructors({ className = "mt-6" }: { className?: string }) {
  if (OTHER_INSTRUCTORS.length === 0) return null;
  return (
    <p className={`text-sm text-ink-soft ${className}`}>
      Also teaching at SiLak:{" "}
      {OTHER_INSTRUCTORS.map((instructor, i) => (
        <span key={instructor.slug}>
          {i > 0 && ", "}
          <span className="font-medium text-ink">{instructor.name}</span>
          {instructor.title && `, ${instructor.title}`}
        </span>
      ))}
    </p>
  );
}
