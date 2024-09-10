import { BridgeDropdown } from "@/components/BridgeDropdown/BridgeDropdown";
import {
  Heading,
  Grid,
  Box,
  Text,
  GridItem,
  Container,
  Button,
  FancyArrowRight,
  AspectRatio,
  Flex,
} from "@/lib/ui";
import Image from "next/image";
import Link from "next/link";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  heading: {
    id: "Hero.heading",
    defaultMessage: "Seamless, Safe Crypto",
  },
  description: {
    id: "Hero.description",
    defaultMessage:
      "Iron Fish encrypts every transaction, shielding your sensitive asset information from public view. With read-only view keys, you remain compliant and in control.",
  },
  getStarted: {
    id: "Hero.getStarted",
    defaultMessage: "Get Started",
  },
});

export function Hero() {
  const { formatMessage } = useIntl();

  return (
    <Container
      maxW={{
        base: "704px",
        lg: "1600px",
      }}
      w="100%"
      mb={{
        base: 24,
        md: 32,
        xl: "150px",
      }}
      pl={{
        lg: "40px",
        xl: "64px",
        "2xl": "128px",
      }}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
        }}
        w="100%"
        gap={{
          base: "4rem",
          lg: "2rem",
        }}
      >
        <GridItem display="flex" alignItems="center">
          <Box
            padding={{
              base: "4rem 0 0",
              lg: "2.5rem 0 2.5rem",
              "2xl": "6.5rem 6rem 6rem 0",
            }}
          >
            <Heading as="h1" size="h1" mb={4}>
              {formatMessage(messages.heading)}
            </Heading>
            <Text textStyle="lg" mb={10}>
              {formatMessage(messages.description)}
            </Text>
            <Flex
              gap={4}
              flexDirection={{
                base: "column",
                lg: "row",
              }}
              alignItems={{
                base: "stretch",
                lg: "center",
              }}
            >
              <Button size="lg" as={Link} href="/use/get-started">
                <Box mr={4}>{formatMessage(messages.getStarted)}</Box>
                <FancyArrowRight />
              </Button>
              <BridgeDropdown />
            </Flex>
          </Box>
        </GridItem>
        <GridItem position="relative" display="flex" alignItems="center">
          <Box
            mt={{
              base: 0,
              lg: 4,
            }}
            width="100%"
          >
            <AspectRatio position="relative" ratio={657 / 424}>
              <Image
                priority
                src="/images/home/hero-video.png"
                alt=""
                style={{ objectFit: "contain" }}
                fill
              />
            </AspectRatio>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
