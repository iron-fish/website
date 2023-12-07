import Head from "next/head";
import { defineMessages, useIntl } from "react-intl";
import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";
import {
  Hero,
  HeroImageUtil,
  LocalImage,
  Container,
  Box,
  Text,
  chakra,
} from "@/lib/ui";
import { DiscordCTA } from "@/components/Governance/DiscordCTA/DiscordCTA";
import flower from "../../../assets/heroImages/foundation/flower.svg";
import key from "../../../assets/heroImages/foundation/key.svg";
import weather from "../../../assets/heroImages/foundation/weather.svg";
import Link from "next/link";

const flowerImg = flower as LocalImage;
const keyImg = key as LocalImage;
const weatherImg = weather as LocalImage;

const messages = defineMessages({
  title: {
    id: "foundation.title",
    defaultMessage:
      "Iron Fish Foundation | Fostering the growth of safe privacy",
  },
  heading: {
    id: "foundation.heading",
    defaultMessage: "Iron Fish Foundation",
  },
  subheading: {
    id: "foundation.subheading",
    defaultMessage: "Fostering the growth of safe privacy",
  },
  description: {
    id: "foundation.description",
    defaultMessage:
      "With mainnet launch on April 20th 2023, our ecosystem expanded and a new independent entity, the Iron Fish Foundation, was created.",
  },
  foundationPurpose: {
    id: "foundation.foundationPurpose",
    defaultMessage:
      "The Foundation guides Iron Fish towards premier crypto privacy. Through partnerships, grants, and events, it boosts ecosystem growth, emphasizing community-driven <govLink>governance</govLink> and fund allocation.",
  },
  ironFishGrantsTitle: {
    id: "foundation.ironFishGrantsTitle",
    defaultMessage: "Iron Fish Grants",
  },
  ironFishGrantsDescription: {
    id: "foundation.ironFishGrantsDescriptionA",
    defaultMessage:
      "The Iron Fish Foundation offers grants for projects enhancing the Iron Fish ecosystem. If you're passionate about privacy-centric cryptocurrency, apply for a grant. We prioritize projects that improve user experience, interoperability, or expand Iron Fish use-cases. See this application as a chance to highlight your vision and potential impact on Iron Fish.",
  },
  learnMore: {
    id: "foundation.learnMore",
    defaultMessage: "Learn More",
  },
  boardOfDirectorsTitle: {
    id: "foundation.boardOfDirectorsTitle",
    defaultMessage: "Board of Directors",
  },
  boardOfDirectorsDescription: {
    id: "foundation.boardOfDirectorsDescription",
    defaultMessage:
      "The Board of Directors is responsible for general oversight of the Iron Fish Foundation and weighs in on decisions including, but not limited to, governance, large grants, and ensuring that Iron Fish provides privacy to protect the crypto of everyday users while continuing to deter bad actors. The Foundation is actively adding Board Members alongside an advisory board of experts.",
  },
});

function GovLink(value: unknown) {
  if (!Array.isArray(value)) return null;

  return (
    <chakra.span
      as={Link}
      href="/community/governance"
      display="inline-block"
      borderBottom="2px solid"
    >
      {value}
    </chakra.span>
  );
}

export default function Governance() {
  const { formatMessage } = useIntl();
  return (
    <Box>
      <Head>
        <title>{formatMessage(messages.title)}</title>
      </Head>
      <Hero
        bg="green.400"
        flexGrow={1}
        heading={formatMessage(messages.heading)}
        subheading={formatMessage(messages.subheading)}
        description={formatMessage(messages.description)}
        textContainerProps={{
          maxW: {
            base: "container.sm",
            xl: "750px",
            "2xl": "780px",
          },
        }}
        images={
          <>
            <HeroImageUtil
              image={weatherImg}
              top={{
                md: "-60px",
                xl: "80px",
              }}
              left={{
                md: "-90px",
                xl: "30px",
                "2xl": `calc(50vw - 700px)`,
              }}
            />
            <HeroImageUtil
              image={keyImg}
              bottom={{
                md: "20px",
                xl: "100px",
              }}
              left={{
                md: "-50px",
                xl: "-20px",
                "2xl": `calc(50vw - 780px)`,
              }}
            />
            <HeroImageUtil
              image={flowerImg}
              top={{
                md: "20px",
                xl: "200px",
              }}
              right={{
                md: "-120px",
                xl: "-20px",
                "2xl": `calc(50vw - 700px)`,
              }}
            />
          </>
        }
      />

      <Container
        w="100%"
        maxW="container.2xl"
        px={{
          base: 6,
          lg: 10,
          xl: 16,
        }}
      >
        <Text
          textStyle="h5"
          my={{
            base: "50px",
            md: "100px",
            lg: "150px",
          }}
          textAlign="center"
          maxW="container.md"
          mx="auto"
        >
          {formatMessage(messages.foundationPurpose, {
            govLink: GovLink,
          })}
        </Text>
      </Container>

      <FancyLinkSection
        heading={formatMessage(messages.ironFishGrantsTitle)}
        description={formatMessage(messages.ironFishGrantsDescription)}
        ctaText={formatMessage(messages.learnMore)}
        ctaLink="/community/grants"
        imageUrl="/images/foundation/grants.svg"
        containerProps={{
          maxW: {
            base: "704px",
            lg: "1600px",
          },
          w: "100%",
          mb: {
            base: 24,
            md: 32,
            xl: "150px",
          },
          pl: {
            lg: "40px",
            xl: "64px",
            "2xl": "128px",
          },
        }}
      />
      <Box bg="black" py="150px">
        <FancyLinkSection
          reverse
          heading={formatMessage(messages.boardOfDirectorsTitle)}
          description={formatMessage(messages.boardOfDirectorsDescription)}
          imageUrl="/images/foundation/board-of-directors.svg"
          ctaColor="green.400"
          containerProps={{
            maxW: {
              base: "704px",
              lg: "1600px",
            },
            w: "100%",
            pr: {
              lg: "40px",
              xl: "64px",
              "2xl": "128px",
            },
            sx: {
              color: "white",
              p: {
                color: "#CCC",
              },
            },
          }}
        />
      </Box>
      <DiscordCTA />
    </Box>
  );
}
