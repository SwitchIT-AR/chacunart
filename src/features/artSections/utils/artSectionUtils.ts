// gridAsym.ts
export const ASYM_PATTERN_XS = [4, 8, 8, 4, 3, 3, 6] as const;

export interface SpanDef { base: number; xs: number };

export function getAsymSpans(
  count: number,
  base = 12,
  xsPattern: readonly number[] = ASYM_PATTERN_XS
): SpanDef[] {
  return Array.from({ length: count }, (_, i) => ({
    base,
    xs: xsPattern[i % xsPattern.length],
  }));
}
