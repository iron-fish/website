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
          Safe, Accessible Wallets
        </Text>
        <Text color="#CCC" textStyle="lg" maxW="40ch" margin="0 auto 2rem">
          We provide a user-friendly decentralized currency that&apos;s secure
          and convenient, while supporting sophisticated applications on our
          encrypted network.
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
              name="The Node App"
              description="Send, receive and bridge assets from your desktop while running your own node."
              href="/use/node-app"
              linkText="Go to downloads"
              imageSrc={nodeAppImage}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name="OreoWallet"
              description="Make secure transactions right from your browser."
              href="/use/node-app"
              linkText="Go to website"
              imageSrc={oreoWalletImage}
            />
          </GridItem>
        </Grid>

        <Text as="h2" textStyle="h3" color="white" mb={8}>
          Bi-Directional Bridging
        </Text>
        <Text color="#CCC" textStyle="lg" maxW="40ch" margin="0 auto 2rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              name="Chainport Bridge"
              description="Encrypt assets from 24+ chains and bridge them to your Iron Fish account."
              href="/use/node-app"
              linkText="Go to bridge"
              imageSrc={chainportImage}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name="Bridge.IronFish"
              description="Bridge your $IRON directly to the Ethereum network."
              href="https://testnet.bridge.ironfish.network/"
              linkText="Go to Bridge"
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
