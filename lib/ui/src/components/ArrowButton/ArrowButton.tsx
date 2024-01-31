import {
  Button,
  Box,
  ButtonProps,
  ChakraComponent,
  BoxProps,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { FancyArrowRight } from "../../icons";

type Props = Omit<ButtonProps, "size" | "colorScheme"> & {
  size?: "sm" | "lg";
  colorScheme?: "pink" | "white";
  arrowStyle?: "right" | "left" | "tilted" | "hidden";
};

export const ArrowButton: ChakraComponent<"button", Props> = ({
  children,
  size = "lg",
  colorScheme = "pink",
  arrowStyle = "right",
  ...rest
}: Props) => {
  const isArrowTilted = arrowStyle === "tilted";
  const hasLeftArrow = arrowStyle === "left";
  const hasRightArrow = !["hidden", "left"].includes(arrowStyle);

  const gap = useMemo(() => {
    if (size === "sm") return isArrowTilted ? 1 : 2;
    if (size === "lg") return isArrowTilted ? 2 : 4;
  }, [size, isArrowTilted]);
  const arrowTransform = useMemo(() => {
    if (size === "sm")
      return isArrowTilted ? "rotate(-45deg) scale(0.65)" : "scale(0.8)";
    if (size === "lg")
      return isArrowTilted ? "rotate(-45deg) scale(0.8)" : "scale(1)";
  }, [size, isArrowTilted]);
  const py = useMemo(() => {
    if (size === "sm") return 4;
    if (size === "lg") return undefined;
  }, [size]);
  const colorStyles = useMemo(() => {
    if (colorScheme === "pink") {
      return {
        bg: "pink.500",
        _hover: { bg: "purple.500" },
        _focus: { bg: "purple.500" },
      };
    }
    return {
      bg: "white",
      _hover: { bg: "gray.100" },
      _focus: { bg: "gray.100" },
    };
  }, [colorScheme]);

  return (
    <Button
      size={size}
      py={py}
      {...colorStyles}
      {...rest}
      pr={isArrowTilted ? 2 : undefined}
      display="flex"
      alignItems="center"
      gap={gap}
    >
      {hasLeftArrow && (
        <Box transform={`${arrowTransform} rotate(180deg)`}>
          <FancyArrowRight />
        </Box>
      )}
      <Box>{children}</Box>
      {hasRightArrow && (
        <Box transform={arrowTransform}>
          <FancyArrowRight />
        </Box>
      )}
    </Button>
  );
};
