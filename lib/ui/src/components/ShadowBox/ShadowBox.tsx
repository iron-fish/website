import { Box, BoxProps, ChakraComponent } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  shadowColor?: BoxProps["bg"];
  offset?: string;
} & Omit<BoxProps, "children">;

export const ShadowBox: ChakraComponent<"div", Props> = ({
  children,
  shadowColor = "pink.500",
  offset = "6px",
  borderRadius = "1.5px",
  borderWidth = "1.5px",
  width = "100%",
  ...rest
}: Props) => {
  return (
    <Box
      position="relative"
      pr={offset}
      pb={offset}
      display="flex"
      alignItems="stretch"
      justifyContent="stretch"
      w={width}
    >
      <Box
        border={`${borderWidth} solid black`}
        position="absolute"
        borderRadius={borderRadius}
        inset={0}
        mt={offset}
        ml={offset}
        bg={shadowColor}
      />
      <Box
        bg="white"
        border={`${borderWidth} solid black`}
        borderRadius={borderRadius}
        position="relative"
        w="100%"
        {...rest}
      >
        {children}
      </Box>
    </Box>
  );
};
