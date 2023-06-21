import { Box, Text, ChakraComponent, BoxProps } from "@chakra-ui/react";

type Props = {
  children: string;
  underlineColor: string;
} & BoxProps;

export const ThickLink: ChakraComponent<"span", Props> = ({
  children,
  underlineColor,
  as = "span",
  ...rest
}: Props) => {
  const color = underlineColor.includes(".")
    ? `var(--chakra-colors-${underlineColor.split(".").join("-")})`
    : underlineColor;

  return (
    <Box display="inline-block" as={as} {...rest}>
      {children.split("").map((char, i) => {
        return (
          <Text
            key={i}
            as="span"
            display="inline-block"
            whiteSpace="pre"
            boxShadow={`
      inset 0 calc(0.3em * -1) 0 0 white,
      inset 0 calc(0.75em * -1) 0 0 ${color}
    `}
          >
            {char}
          </Text>
        );
      })}
    </Box>
  );
};
