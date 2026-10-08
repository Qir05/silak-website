import Image from "next/image";
import type { InstructorProfile } from "@/lib/instructors";

/** The credential line under an instructor's name. Renders nothing when the
 * profile has no supplied title, so no credential is ever implied. */
export function InstructorCredential({
  instructor,
  className = "mt-2",
}: {
  instructor: InstructorProfile;
  className?: string;
}) {
  if (!instructor.title) return null;
  return (
    <div className={`flex items-center gap-2 text-ink-soft ${className}`}>
      <span className="text-sm font-medium tracking-wide">{instructor.title}</span>
      {instructor.molchanovsMark && (
        <Image
          src="/logos/molchanovs-mark.png"
          alt="Molchanovs"
          width={20}
          height={16}
          className="h-4 w-auto object-contain opacity-70"
        />
      )}
    </div>
  );
}
