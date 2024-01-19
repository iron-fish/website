import { ReactNode } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

function SearchSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <Box>
      <Text fontWeight="bold" mb={3}>
        {heading}
      </Text>
      <Box>{children}</Box>
    </Box>
  );
}

function Item({
  children,
  icon,
  onClick,
}: {
  children: ReactNode;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const marginOffset = "12px";
  return (
    <HStack
      gap={3}
      mx={`-${marginOffset}`}
      px={marginOffset}
      py={2}
      borderRadius={4}
      onClick={onClick}
      cursor={onClick ? "pointer" : undefined}
      _focus={{
        backgroundColor: "#F6F6F6",
        outline: 0,
      }}
      _hover={{
        backgroundColor: "#F6F6F6",
      }}
      as={onClick ? "button" : "div"}
      textAlign="left"
      w={`calc(100% + ${marginOffset} * 2)`}
    >
      <Box fontSize="1.4rem">{icon}</Box>
      <Box minW={0}>{children}</Box>
    </HStack>
  );
}

SearchSection.Item = Item;

export { SearchSection };
