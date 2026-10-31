import { OTHER_INSTRUCTORS, instructorNames } from "@/lib/instructors";

/** Names the instructors a feature section does not profile, so a page that
 * shows one portrait never reads as though SiLak has a single instructor. */
export function OtherInstructors({ className = "mt-6" }: { className?: string }) {
  if (OTHER_INSTRUCTORS.length === 0) return null;
  return (
    <p className={`text-sm text-ink-soft ${className}`}>
      Also teaching at SiLak:{" "}
      <span className="font-medium text-ink">{instructorNames(OTHER_INSTRUCTORS)}</span>
    </p>
  );
}
