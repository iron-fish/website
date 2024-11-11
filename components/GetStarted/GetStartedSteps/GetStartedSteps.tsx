import { Container, Text, Heading, Grid, GridItem, Box, Flex, Button, FlexProps } from "@/lib/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/AutoExpandingList/AutoExpandingList";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import image1 from "./assets/image-01.svg";
import image2 from "./assets/image-02.svg";
import image3 from "./assets/image-03.svg";
import { ChipCounter } from "@/components/AutoExpandingList/ChipCounter/ChipCounter";
import { useMemo } from "react";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
};

const messages = defineMessages({
  getStarted: {
    id: "OurPrinciples.ourPrinciples",
    defaultMessage: "Get Started",
  },
  encryptionHeading: {
    id: "OurPrinciples.encryptionHeading",
    defaultMessage: "Create a Wallet",
  },
  encryptionBody1: {
    id: "OurPrinciples.encryptionBody1",
    defaultMessage:
      "Install a wallet that supports Iron Fish and create your wallet. You'll need to get your wallet's address to receive your encrypted funds.",
  },
  encryptionBody2: {
    id: "OurPrinciples.encryptionBody2",
    defaultMessage:
      "You'll need to get your wallet's address to receive your encrypted funds.",
  },
  buildTogetherHeading: {
    id: "OurPrinciples.buildTogetherHeading",
    defaultMessage: "Bridge Assets In",
  },
  buildTogetherBody: {
    id: "OurPrinciples.buildTogetherBody",
    defaultMessage:
      "Use the Chainport bridge to encrypt your assets. Once your assets are in Iron Fish, they will be fully private.",
  },
  complianceHeading: {
    id: "OurPrinciples.complianceHeading",
    defaultMessage: "Bridge Assets Out",
  },
  complianceBody: {
    id: "OurPrinciples.complianceBody",
    defaultMessage:
      "You can bridge your assets out of Iron Fish into over 20 chains using Chainport.",
  },
});

export function GetStartedSteps() {
  const expandingListProps = useAutoExpandingList({ isAutoExpanding: false });
  const { formatMessage } = useIntl();

  return (
    <Container w="100%" maxW="container.xl" py="150px">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={10}
      >
        <GridItem>
          <Text textStyle="h3" mb={2}>
            {formatMessage(messages.getStarted)}
          </Text>
          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.encryptionHeading)}
                </Heading>
              }
              body={
                <Box>
                  <Text mb={6}>{formatMessage(messages.encryptionBody1)}</Text>

                  <Box mt={4}>
                    <Chip active={true} text='Easy'></Chip>
                    OreoWallet is a browser based extension.<br/>
                    <Button
                      as={Link}
                      href={'google.com'}
                      size="sm"
                      bg="white"
                      _hover={{
                        bg: "gray.200",
                      }}
                    >
                      Install OreoWallet
                    </Button>
                  </Box>

                  <Box mt={8}>
                    <Chip active={true} text='Medium'></Chip>
                    Node App is a GUI app that runs a node and a wallet. It will download the full blockchain.
                    <br/>
                    <Button
                      as={Link}
                      href={'google.com'}
                      size="sm"
                      bg="white"
                      _hover={{
                        bg: "gray.200",
                      }}
                    >
                      Install Iron Fish CLI
                    </Button>
                  </Box>

                  <Box mt={8}>
                    <Chip active={true} text='Hard'></Chip>
                    CLI runs a node and a wallet in the terminal. It will download the full blockchain.
                    <br/>
                    <Button
                      as={Link}
                      href={'google.com'}
                      size="sm"
                      bg="white"
                      _hover={{
                        bg: "gray.200",
                      }}
                    >
                      Install CLI
                    </Button>
                  </Box>

                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image1} />
                  </Box>
                </Box>
              }
            />
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.buildTogetherHeading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.buildTogetherBody)}</Text>

                  <Box mt={4}>
                    <Button
                        as={Link}
                        href={'https://app.chainport.io/?from=ETHEREUM&to=IRONFISH'}
                        size="sm"
                        bg="white"
                        _hover={{
                          bg: "gray.200",
                        }}
                    >
                      Use Chainport Bridge
                    </Button>
                  </Box>

                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image2} />
                  </Box>
                </Box>
              }
            />
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.complianceHeading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.complianceBody)}</Text>

                  <Box mt={4}>

                  <Text>
                    Use your wallet to bridge out, or try our web based bridge DAPP. <Button
                        as={Link}
                        href={'https://tesnet.bridge.ironfish.network'}
                        size="sm"
                        bg="white"
                        _hover={{
                          bg: "gray.200",
                        }}
                        >
                      Use Iron Fish Bridge DAPP
                    </Button>
                  </Text>
                  </Box>

                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image3} />
                  </Box>
                </Box>
              }
            />
          </AutoExpandingList>
        </GridItem>
        <GridItem
          display={{
            base: "none",
            md: "flex",
          }}
          justifyContent="flex-end"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={expandingListProps.activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {expandingListProps.activeIndex in IMAGE_BY_INDEX &&
                IMAGE_BY_INDEX[
                  expandingListProps.activeIndex as keyof typeof IMAGE_BY_INDEX
                ]}
            </motion.div>
          </AnimatePresence>
        </GridItem>
      </Grid>
    </Container>
  );
}

export function Chip({
  active,
  spacer,
  color = "gray.200",
  theme = "light",
  text = '',
  ...rest
}: {
  active?: boolean;
  spacer?: boolean;
  theme?: string;
  color?: string;
  text?: string;
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
          {text}
        </Text>
      )}
    </Flex>
  );
}
