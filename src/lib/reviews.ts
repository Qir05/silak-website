export type Review = {
  /** The student's own words, exactly as approved for publication. */
  quote: string;
  /** Name as the student approved it to be shown. */
  name: string;
  /** Optional course or context, e.g. "Molchanovs Wave 1". */
  program?: string;
};

/**
 * Approved student reviews, shown on /reviews. Add entries only with the
 * student's permission; the page shows a neutral placeholder while empty.
 */
export const REVIEWS: Review[] = [];
