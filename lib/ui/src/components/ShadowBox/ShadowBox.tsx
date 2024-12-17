import { Box, BoxProps, ChakraComponent, useBoolean } from "@chakra-ui/react";

export type ShadowBoxProps = {
  children: React.ReactNode;
  shadowColor?: BoxProps["bg"];
  hoverShadowColor?: BoxProps["bg"];
  borderColor?: BoxProps["borderColor"];
  offset?: string;
  containerProps?: BoxProps;
} & Omit<BoxProps, "children">;

export const ShadowBox: ChakraComponent<"div", ShadowBoxProps> = ({
  children,
  shadowColor = "pink.500",
  hoverShadowColor,
  offset = "6px",
  borderRadius = "1.5px",
  borderWidth = "1.5px",
  borderColor = "black",
  width = "100%",
  containerProps,
  ...rest
}: ShadowBoxProps) => {
  const [isHovered, setHovered] = useBoolean(false);

  return (
    <Box
      position="relative"
      pr={offset}
      pb={offset}
      display="flex"
      alignItems="stretch"
      justifyContent="stretch"
      w={width}
      onMouseEnter={setHovered.on}
      onMouseLeave={setHovered.off}
      {...containerProps}
    >
      <Box
        border={`${borderWidth} solid ${borderColor}`}
        position="absolute"
        borderRadius={borderRadius}
        inset={0}
        mt={offset}
        ml={offset}
        bg={isHovered ? hoverShadowColor : shadowColor}
      />
      <Box
        bg="white"
        border={`${borderWidth} solid ${borderColor}`}
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
