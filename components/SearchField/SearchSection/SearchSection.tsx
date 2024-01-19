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
  return (
    <HStack
      gap={3}
      mx={-3}
      px={3}
      py={2}
      borderRadius={4}
      onClick={onClick}
      cursor={onClick ? "pointer" : undefined}
      _hover={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <Box fontSize="1.4rem">{icon}</Box>
      <Box minW={0}>{children}</Box>
    </HStack>
  );
}

SearchSection.Item = Item;

export { SearchSection };
