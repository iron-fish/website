import { Flex, Text } from "@chakra-ui/react";

export function ChipCounter({
  num,
  active,
  color = "gray.200",
}: {
  num: number;
  active: boolean;
  color: string;
}) {
  return (
    <Flex
      bg={active ? color : "black"}
      borderRadius="full"
      h="30px"
      w="45px"
      justifyContent="center"
      alignItems="center"
      transition="background-color 0.3s ease-in-out"
    >
      <Text textStyle="sm" color={active ? "black" : "white"}>
        {num < 10 ? `0${num}` : num}.
      </Text>
    </Flex>
  );
}
