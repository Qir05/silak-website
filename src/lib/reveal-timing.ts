/** Delay (ms) for the Nth (0-indexed) item in a staggered group of siblings. */
export function groupStagger(index: number, step = 180, cap = 720) {
  return Math.min(index * step, cap);
}

/** Delay (ms) for the Nth (0-indexed) step in a within-section reveal sequence
 * (eyebrow, then heading, then supporting copy, then primary image/content). */
export function sequenceStep(index: number, step = 140) {
  return index * step;
}
