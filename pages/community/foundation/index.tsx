import Head from "next/head";
import {
  Hero,
  HeroImageUtil,
  LocalImage,
  Container,
  Box,
  Text,
  chakra,
} from "@/lib/ui";
import { GovernanceStructure } from "@/components/Governance/GovernanceStructure/GovernanceStructure";
import { GovernanceFAQ } from "@/components/Governance/GovernanceFAQ/GovernanceFAQ";
import { DiscordCTA } from "@/components/Governance/DiscordCTA/DiscordCTA";
import alan from "../../../assets/heroImages/grants/alan-grant.svg";
import hand from "../../../assets/heroImages/grants/hand.svg";
import bag from "../../../assets/heroImages/grants/bag.svg";
import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";

const alanImage = alan as LocalImage;
const handImage = hand as LocalImage;
const bagImage = bag as LocalImage;

export default function Governance() {
  return (
    <Box>
      <Head>
        <title>Iron Fish Grants | Expand the Iron Fish ecosystem</title>
      </Head>
      <Hero
        bg="green.400"
        flexGrow={1}
        heading="Iron Fish Foundation"
        subheading="Fostering the growth of safe privacy"
        description="With mainnet launch on April 20th 2023, our ecosystem expanded and a new independent entity, the Iron Fish Foundation, was created."
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
              image={alanImage}
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
              image={handImage}
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
              image={bagImage}
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
          The Foundation guides Iron Fish towards premier crypto privacy.
          Through partnerships, grants, and events, it boosts ecosystem growth,
          emphasizing community-driven{" "}
          <chakra.span textDecoration="underline">governance</chakra.span> and
          fund allocation.
        </Text>
      </Container>

      <FancyLinkSection
        heading="Encryption is the future of crypto"
        description={[
          "Privacy is a fundamental right, and yet everyday people give away personal information — often without even realizing it.",
          "We enable users to protect their privacy by encrypting all transactions with zero-knowledge proofs. We adopt the highest standards for protection without compromise.",
        ]}
        ctaText="Learn more"
        ctaLink="/learn/whitepaper"
        imageUrl="/images/about-us/encryption-fish.svg"
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
          heading="We build, together"
          description={`As a decentralized, open-source network, Iron Fish relies on an engaged community to support protocol development and raise awareness of privacy as a social good. Our community is the heart of our platform.`}
          ctaText="Join our movement"
          ctaLink="https://discord.com/invite/EkQkEcm8DH"
          imageUrl="/images/about-us/movement-fish.svg"
          ctaColor="green.400"
          containerProps={{
            color: "white",
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
          }}
        />
      </Box>

      <GovernanceFAQ />
      <DiscordCTA />
    </Box>
  );
}
