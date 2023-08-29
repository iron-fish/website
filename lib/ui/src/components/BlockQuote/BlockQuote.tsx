import { Box, Text, chakra } from "@chakra-ui/react";
import { createBreakpointArray } from "../../theme/components/breakpoints";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  cite?: string;
  quotes?: boolean;
};

export function BlockQuote({ children, cite, quotes = true }: Props) {
  return (
    <Box
      as="blockquote"
      position="relative"
      left="50%"
      transform="translateX(-50%)"
      w="calc(100% + 300px)"
      px={2}
      maxW="100vw"
      my={16}
    >
      <Box
        textAlign="center"
        sx={{
          "& > *": {
            fontSize: createBreakpointArray({
              base: "4xl",
              "2xl": "5xl",
            }),
            fontFamily: "FavoritExtendedIF",
            lineHeight: "1.4em",
            mb: "0.65em",
          },
          "& > *:first-child::before": {
            content: quotes ? `'“'` : `""`,
          },
          "& > *:last-child::after": {
            content: quotes ? `'”'` : `""`,
          },
        }}
      >
        {children}
      </Box>
      {cite && (
        <Text as="footer" fontSize="20px" display="block" textAlign="center">
          <chakra.cite fontStyle="normal">{cite}</chakra.cite>
        </Text>
      )}
    </Box>
  );
}
