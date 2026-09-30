export type Review = {
  /** Neutral slot label shown until approved content is added. */
  label: string;
  /** The student's own words, exactly as approved for publication. */
  quote?: string;
  /** Name as the student approved it to be shown. */
  name?: string;
  /** Optional course or context, e.g. "Molchanovs Wave 1". */
  program?: string;
};

/**
 * Review slots shown on /reviews, one per source review currently on file.
 * Each slot renders as a placeholder card until its `quote` and `name` are
 * filled in with content the student has approved for the website.
 */
export const REVIEWS: Review[] = [
  { label: "Review 01" },
  { label: "Review 02" },
  { label: "Review 03" },
];
