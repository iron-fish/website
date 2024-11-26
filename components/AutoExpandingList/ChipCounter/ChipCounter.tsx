import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { useMemo } from "react";

export function ChipCounter({
  active,
  spacer,
  num = 0,
  color = "gray.200",
  theme = "light",
  ...rest
}: {
  active?: boolean;
  spacer?: boolean;
  num?: number;
  color?: string;
  theme: string;
} & FlexProps) {
  const { bg, color: textColor } = useMemo(() => {
    if (active) {
      return {
        bg: color,
        color: "black",
      };
    }

    return {
      bg: theme === "light" ? "black" : "white",
      color: theme === "light" ? "white" : "black",
    };
  }, [active, color, theme]);

  return (
    <Flex
      bg={bg}
      borderRadius="full"
      h="30px"
      minW="45px"
      w="45px"
      justifyContent="center"
      alignItems="center"
      transition="background-color 0.3s ease-in-out"
      opacity={spacer ? 0 : 1}
      {...rest}
    >
      {!spacer && (
        <Text textStyle="sm" color={textColor} transform="translateY(1px)">
          {num < 10 ? `0${num}` : num}.
        </Text>
      )}
    </Flex>
  );
}
