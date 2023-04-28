import { createBreakpointArray } from "../../utils/createBreakpointArray";

export const textStyles = {
  h1: {
    fontSize: createBreakpointArray({
      base: "6xl",
      lg: "7xl",
      xl: "8xl",
      "2xl": "9xl",
    }),
    fontWeight: "400",
    lineHeight: "110%",
    letterSpacing: "0em",
    fontFamily: "FavoritExtendedIf, sans-serif",
  },
  h2: {
    fontSize: createBreakpointArray({
      base: "5xl",
      md: "8xl",
    }),
    fontWeight: "400",
    lineHeight: "110%",
    letterSpacing: "0em",
    fontFamily: "FavoritExtendedIf, sans-serif",
  },
  h3: {
    fontSize: createBreakpointArray({
      base: "4xl",
      "2xl": "5xl",
    }),
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "0em",
    fontFamily: "FavoritExtendedIf, sans-serif",
  },
  h4: {
    fontSize: createBreakpointArray({
      base: "lg",
      "2xl": "xl",
    }),
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "0em",
    fontFamily: "FavoritExtendedIf, sans-serif",
  },
  h5: {
    fontSize: createBreakpointArray({
      base: "xl",
      lg: "2xl",
      "2xl": "3xl",
    }),
    fontWeight: "400",
    lineHeight: "160%",
    letterSpacing: "0em",
  },
  lg: {
    fontSize: createBreakpointArray({
      base: "md",
      lg: "lg",
      "2xl": "xl",
    }),
    fontWeight: "400",
    lineHeight: "160%",
    letterSpacing: "0em",
  },
  md: {
    fontSize: "md",
    fontWeight: "400",
    lineHeight: "160%",
    letterSpacing: "0em",
  },
  sm: {
    fontSize: "sm",
    fontWeight: "400",
    lineHeight: "162.5%",
    letterSpacing: "0em",
  },
};
