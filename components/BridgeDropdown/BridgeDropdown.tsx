import { ReactNode } from "react";
import { Box, BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { useToggle } from "usehooks-ts";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FancyArrowUpRight } from "@/lib/ui";

export function BridgeDropdown() {
  return (
    <Box position="relative">
      <ButtonContents hidden />
      <ButtonContents position="absolute" top={0} left={0} zIndex={1} />
    </Box>
  );
}

function ButtonContents({
  hidden,
  children,
  ...rest
}: BoxProps & {
  hidden?: boolean;
  children?: ReactNode;
}) {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <Box
      aria-hidden={hidden}
      bg={hidden ? "pink" : "white"}
      as="button"
      border="1.5px solid"
      boxShadow="2px 3px 0px black"
      borderRadius={28}
      onClick={toggleIsOpen}
      {...rest}
    >
      <Flex px={10} h={14} alignItems="center" gap={2}>
        <Text fontSize="lg">Bridge</Text>
        {isOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
      </Flex>
      {!hidden && isOpen && (
        <>
          <BridgeLink direction="in" />
          <BridgeLink direction="out" />
        </>
      )}
    </Box>
  );
}

function BridgeLink({ direction }: { direction: "out" | "in" }) {
  return (
    <Flex
      as="a"
      h="44px"
      alignItems="center"
      borderTop="1px solid black"
      px={5}
      justifyContent="space-between"
      href={
        direction === "out"
          ? "https://bridge.ironfish.network/"
          : "https://app.chainport.io/?from=ETHEREUM&to=IRONFISH"
      }
      target="_blank"
      rel="noreferrer"
      _hover={{
        textDecoration: "underline",
      }}
    >
      <Text>{direction === "out" ? "Bridge out" : "Bridge in"}</Text>
      <Box
        transform={
          direction === "out" ? "scale(0.9)" : "scale(0.9) rotate(180deg)"
        }
      >
        <FancyArrowUpRight />
      </Box>
    </Flex>
  );
}
