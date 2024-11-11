import { BridgeDropdown } from "@/components/BridgeDropdown/BridgeDropdown";
import { VideoPopup } from "@/components/VideoPopup/VideoPopup";
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
    defaultMessage: "Safe Optional Privacy for Any Asset",
  },
  description: {
    id: "Hero.description",
    defaultMessage:
      "Zero-Knowledge Layer-1 blockchain giving optional privacy to assets on transparent chains",
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
      p={{
        base: "64px 24px",
        lg: "64px",
        "2xl": "96px",
      }}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "auto minmax(50%, 1fr)",
        }}
        w="100%"
        gap={{
          base: "4rem",
          lg: "2rem",
          xl: "70px",
        }}
      >
        <GridItem display="flex" alignItems="center">
          <Box
            maxWidth={{
              xl: "500px",
              "2xl": "100%",
            }}
          >
            <Heading
              as="h1"
              fontSize={{
                base: "3.5rem",
                "2xl": "4.375rem",
              }}
              mb={6}
            >
              {formatMessage(messages.heading)}
            </Heading>
            <Text
              textStyle="lg"
              mb={8}
              maxWidth={{
                base: "40ch",
                lg: "100%",
              }}
            >
              {formatMessage(messages.description)}
            </Text>
            <Flex
              gap={4}
              flexDirection={{
                base: "column",
                md: "row",
              }}
              alignItems={{
                base: "stretch",
                lg: "center",
              }}
            >
              <Button size="lg" as={Link} href="/get-started">
                <Box mr={4}>{formatMessage(messages.getStarted)}</Box>
                <FancyArrowRight />
              </Button>
              <BridgeDropdown />
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          position="relative"
          display="flex"
          alignItems={{
            base: "center",
            lg: "flex-start",
            xl: "center",
          }}
        >
          <Box width="100%">
            <AspectRatio position="relative" ratio={657 / 424}>
              <VideoPopup videoUrl="https://x3mk3ilmgdzxy3rj.public.blob.vercel-storage.com/hero-video-vGWSDl6a97OlvBkJuv3tXnzqGJOwDD.mp4">
                <Image
                  priority
                  src="/images/home/hero-video.png"
                  alt=""
                  style={{ objectFit: "contain" }}
                  fill
                />
              </VideoPopup>
            </AspectRatio>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
