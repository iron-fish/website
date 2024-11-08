import { ReactNode } from "react";
import { Box, BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { useToggle } from "usehooks-ts";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FancyArrowUpRight } from "@/lib/ui";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  bridge: {
    id: "BridgeDropdown.bridge",
    defaultMessage: "Bridge",
  },
  comingSoon: {
    id: "BridgeDropdown.comingSoon",
    defaultMessage: "Coming soon!",
  },
  bridgeOut: {
    id: "BridgeDropdown.bridgeOut",
    defaultMessage: "Bridge out",
  },
  bridgeIn: {
    id: "BridgeDropdown.bridgeIn",
    defaultMessage: "Bridge in",
  },
});

export function BridgeDropdown() {
  return (
    <Box position="relative">
      <ButtonContents hidden />
      <ButtonContents
        disabled
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
      />
    </Box>
  );
}

function ButtonContents({
  hidden,
  children,
  disabled,
  ...rest
}: BoxProps & {
  hidden?: boolean;
  children?: ReactNode;
  disabled?: boolean;
}) {
  const { formatMessage } = useIntl();
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
      w="100%"
      disabled={disabled}
      _disabled={{
        cursor: "not-allowed",
        bg: "#F3F3F4",
      }}
      {...rest}
    >
      <Flex
        flexDir="column"
        px={10}
        h={14}
        alignItems="center"
        gap={disabled ? 0 : 2}
        justifyContent="center"
      >
        {disabled ? (
          <>
            <Text lineHeight="1.2" fontSize="sm" color="#686868">
              {formatMessage(messages.bridge)}
            </Text>
            <Text whiteSpace="nowrap" fontSize="xs" color="#686868">
              {formatMessage(messages.comingSoon)}
            </Text>
          </>
        ) : (
          <>
            <Text fontSize="xl">Bridge</Text>
            {isOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
          </>
        )}
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
  const { formatMessage } = useIntl();
  return (
    <Flex
      as="a"
      h="64px"
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
      <Text>
        {direction === "out"
          ? formatMessage(messages.bridgeOut)
          : formatMessage(messages.bridgeIn)}
      </Text>
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
