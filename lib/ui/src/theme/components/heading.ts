import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { textStyles } from "./textStyles";

const baseStyle = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold",
});

export const headingTheme = defineStyleConfig({
  baseStyle,
  sizes: textStyles,
  defaultProps: {
    size: "h1",
  },
});
