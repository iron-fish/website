import { Flex, Heading, HeadingProps, Text } from "@chakra-ui/react";

function Counter({
  num,
  active,
  color = "gray.200",
}: {
  num: number;
  active: boolean;
  color?: string;
}) {
  return (
    <Flex
      bg={active ? color : "black"}
      borderRadius="full"
      h="30px"
      minW="45px"
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

type Props = Omit<HeadingProps, "fontSize"> & {
  counterColor?: string;
  _num?: number;
  _active?: boolean;
};

export function ExpandingItemHeading({
  counterColor,
  _num,
  _active,
  ...rest
}: Props) {
  return (
    <Flex mt={8} gap={2}>
      {typeof _num !== "undefined" && typeof _active !== "undefined" && (
        <Counter num={_num} color={counterColor} active={_active} />
      )}
      <Heading fontSize="xl" {...rest} />
    </Flex>
  );
}

ExpandingItemHeading.displayName = "ExpandingItemHeading";
