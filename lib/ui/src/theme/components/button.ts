import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderRadius: "full", // <-- border radius is same for all variants and sizes
  fontWeight: "regular",
});

const sizes = {
  sm: defineStyle({
    fontSize: "sm",
    px: 4,
    py: 4,
  }),
  md: defineStyle({
    fontSize: "md",
    px: 7,
    py: 5,
  }),
  lg: defineStyle({
    fontSize: "lg",
    px: 8,
    py: 7,
  }),
};

const variants = {
  solid: defineStyle({
    border: "1.5px solid",
    borderColor: "black",
    color: "black",
    bg: "pink.500",
    boxShadow: "2px 3px 0px black",

    ":hover": {
      bg: "purple.500",
    },
  }),
  outline: defineStyle({
    border: "2px solid",
    borderColor: "purple.500",
    color: "purple.500",
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "pink",
  },
});
