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
  heading: {
    id: "safety.heading",
    defaultMessage: "Safety should be accessible",
  },
  description: {
    id: "safety.description",
    defaultMessage:
      "We provide a user-friendly decentralized currency that's secure and convenient, while supporting sophisticated applications on our encrypted network.",
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
          {formatMessage(messages.heading)}
        </Text>
        <Text color="#CCC" textStyle="lg" mb={8}>
          {formatMessage(messages.description)}
        </Text>

        <Grid templateColumns="1fr 1fr" gap={8}>
          <GridItem>
            <ItemCard
              name="The Node App"
              description="Send, receive and bridge assets from your desktop while running your own node."
              href="/use/node-app"
              linkText="Go to downloads"
              imageSrc={nodeAppImage}
            />
          </GridItem>

          <GridItem>
            <ItemCard
              name="Chainport Bridge"
              description="Encrypt assets from 24+ chains and bridge them to your Iron Fish account."
              href="/use/node-app"
              linkText="Go to bridge"
              imageSrc={chainportImage}
            />
          </GridItem>

          <GridItem>
            <ItemCard
              name="OreoWallet"
              description="Make secure transactions right from your browser."
              href="/use/node-app"
              linkText="Go to website"
              imageSrc={oreoWalletImage}
            />
          </GridItem>

          <GridItem>
            <ItemCard
              name="Mobile App"
              description="Total accessibility with secure and encrypted transactions , no matter where you are."
              href="/use/node-app"
              linkText="COMING SOON"
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
      display="inline-flex"
      alignItems="center"
      gap={2}
      as={Link}
      href={href}
      pb={4}
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

      <HStack justifyContent="center">
        <Image src={imageSrc} alt={name} />
      </HStack>
    </ShadowBox>
  );
}
