import {
  Box,
  Text,
  Container,
  FancyArrowRight,
  Flex,
  HStack,
  ShadowBox,
  Grid,
  GridItem,
} from "@/lib/ui";
import Link from "next/link";
import { ReactNode } from "react";
import { defineMessages, useIntl } from "react-intl";
import nodeAppImage from "./assets/node-app.png";
import chainportImage from "./assets/chainport.png";
import oreoWalletImage from "./assets/oreowallet.png";
import mobileAppImage from "./assets/mobile-app.png";
import Image, { StaticImageData } from "next/image";

const messages = defineMessages({
  safeAccessibleWallets: {
    id: "Safety.safeAccessibleWallets",
    defaultMessage: "Safe, Accessible Wallets",
  },
  walletsDescription: {
    id: "Safety.walletsDescription",
    defaultMessage:
      "We provide a user-friendly decentralized currency that's secure and convenient, while supporting sophisticated applications on our encrypted network.",
  },
  biDirectionalBridging: {
    id: "Safety.biDirectionalBridging",
    defaultMessage: "Bi-Directional Bridging",
  },
  bridgingDescription: {
    id: "Safety.bridgingDescription",
    defaultMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  nodeApp: {
    id: "Safety.nodeApp",
    defaultMessage: "The Node App",
  },
  nodeAppDescription: {
    id: "Safety.nodeAppDescription",
    defaultMessage:
      "Send, receive and bridge assets from your desktop while running your own node.",
  },
  nodeAppLink: {
    id: "Safety.nodeAppLink",
    defaultMessage: "Go to downloads",
  },
  oreoWallet: {
    id: "Safety.oreoWallet",
    defaultMessage: "OreoWallet",
  },
  oreoWalletDescription: {
    id: "Safety.oreoWalletDescription",
    defaultMessage: "Make secure transactions right from your browser.",
  },
  oreoWalletLink: {
    id: "Safety.oreoWalletLink",
    defaultMessage: "Go to website",
  },
  chainportBridge: {
    id: "Safety.chainportBridge",
    defaultMessage: "Chainport Bridge",
  },
  chainportBridgeDescription: {
    id: "Safety.chainportBridgeDescription",
    defaultMessage:
      "Encrypt assets from 24+ chains and bridge them to your Iron Fish account.",
  },
  chainportBridgeLink: {
    id: "Safety.chainportBridgeLink",
    defaultMessage: "Go to bridge",
  },
  ironFishBridge: {
    id: "Safety.ironFishBridge",
    defaultMessage: "Bridge.IronFish",
  },
  ironFishBridgeDescription: {
    id: "Safety.ironFishBridgeDescription",
    defaultMessage: "Bridge your $IRON directly to the Ethereum network.",
  },
  ironFishBridgeLink: {
    id: "Safety.ironFishBridgeLink",
    defaultMessage: "Go to Bridge",
  },
});

export function Safety() {
  const { formatMessage } = useIntl();
  return (
    <Box
      bg="black"
      py={{
        base: 24,
        lg: 32,
        xl: "150px",
      }}
      px={{
        base: 4,
      }}
    >
      <Container
        maxW="1000px"
        textAlign={{
          base: "left",
          md: "center",
        }}
        mb={{
          base: 16,
          md: 32,
          xl: "140px",
        }}
      >
        <Text as="h2" textStyle="h3" color="white" mb={8}>
          {formatMessage(messages.safeAccessibleWallets)}
        </Text>
        <Text color="#CCC" textStyle="lg" maxW="40ch" margin="0 auto 2rem">
          {formatMessage(messages.walletsDescription)}
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
          gap={{
            base: 6,
            lg: 8,
          }}
          mb="128px"
        >
          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.nodeApp)}
              description={formatMessage(messages.nodeAppDescription)}
              href="/use/node-app"
              linkText={formatMessage(messages.nodeAppLink)}
              imageSrc={nodeAppImage}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.oreoWallet)}
              description={formatMessage(messages.oreoWalletDescription)}
              href="/use/node-app"
              linkText={formatMessage(messages.oreoWalletLink)}
              imageSrc={oreoWalletImage}
            />
          </GridItem>
        </Grid>

        <Text as="h2" textStyle="h3" color="white" mb={8}>
          {formatMessage(messages.biDirectionalBridging)}
        </Text>
        <Text color="#CCC" textStyle="lg" maxW="40ch" margin="0 auto 2rem">
          {formatMessage(messages.bridgingDescription)}
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
          gap={{
            base: 6,
            lg: 8,
          }}
        >
          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.chainportBridge)}
              description={formatMessage(messages.chainportBridgeDescription)}
              href="/use/node-app"
              linkText={formatMessage(messages.chainportBridgeLink)}
              imageSrc={chainportImage}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.ironFishBridge)}
              description={formatMessage(messages.ironFishBridgeDescription)}
              href="https://testnet.bridge.ironfish.network/"
              linkText={formatMessage(messages.ironFishBridgeLink)}
              imageSrc={mobileAppImage}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

function FancyLink({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <Flex
      display="flex"
      alignItems="center"
      gap={2}
      as={Link}
      href={href}
      pb={8}
      position="relative"
      color={color}
      _hover={{
        "& > div:last-child": {
          w: "100%",
        },
      }}
    >
      <Text textStyle="sm">{children}</Text>
      <Box transform="scale(0.7)">
        <FancyArrowRight />
      </Box>
      <Box
        w="0%"
        h="2px"
        bg="currentColor"
        position="absolute"
        bottom="0"
        left="0"
        transition="width 0.15s ease-in-out"
      />
    </Flex>
  );
}
type ItemCardProps = {
  name: string;
  description: string;
  href: string;
  linkText: string;
  imageSrc: StaticImageData;
};

function ItemCard({
  name,
  description,
  href,
  linkText,
  imageSrc,
}: ItemCardProps) {
  return (
    <ShadowBox
      bg="#242424"
      borderColor="#3B3B3B"
      shadowColor="#242424"
      pt={16}
      px={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text as="h3" textStyle="h4" color="white" mb={8}>
        {name}
      </Text>
      <Text color="white" textStyle="md" mb={8}>
        {description}
      </Text>
      <FancyLink href={href} color="pink.400">
        {linkText}
      </FancyLink>

      <HStack justifyContent="center" mt="auto">
        <Image src={imageSrc} alt={name} />
      </HStack>
    </ShadowBox>
  );
}
