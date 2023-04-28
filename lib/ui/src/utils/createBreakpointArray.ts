type BreakpointValues = {
  base?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  "2xl"?: string | number;
};

/**
 * Converts object of breakpoint values to array.
 * ```
 * Chakra UI breakpoints:
 * sm: 30em (480px)
 * md: 48em (768px)
 * lg: 62em (992px)
 * xl: 80em (1280px)
 * 2xl: 96em (1536px)
 * ```
 *
 * @example
 * const arr = createBreakpointArray({
 *   base: '20px',
 *   lg: '40px'
 * }); // ['20px', null, null, '40px', null, null]
 *
 * @param breakpoints Breakpoints object
 * @returns Breakpoints as array
 */
export function createBreakpointArray(breakpoints: BreakpointValues) {
  return [
    breakpoints.base || null,
    breakpoints.sm || null,
    breakpoints.md || null,
    breakpoints.lg || null,
    breakpoints.xl || null,
    breakpoints["2xl"] || null,
  ];
}
