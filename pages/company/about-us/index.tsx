import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  Text,
  LocalImage,
  ThickLink,
} from "@/lib/ui";
import flower from "../../../assets/heroImages/about-us/flower.svg";
import submarine from "../../../assets/heroImages/about-us/submarine.svg";
import judge from "../../../assets/heroImages/about-us/judge.svg";
import { FancyLinkSection } from "../../../components/FancyLinkSection/FancyLinkSection";
import { Backers } from "../../../components/Company/Backers/Backers";
import Head from "next/head";

const flowerImage = flower as LocalImage;
const submarineImage = submarine as LocalImage;
const judgeImage = judge as LocalImage;

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Iron Fish | About Us</title>
      </Head>
      <Box>
        <Hero
          bg="purple.500"
          heading="About Us"
          subheading="Blockchain Encryption for All"
          description="We're building a movement and a platform for private, accessible crypto. Care to join?"
          images={
            <>
              <HeroImageUtil
                image={flowerImage}
                top={{
                  md: "-150px",
                  xl: "-30px",
                }}
                left={{
                  md: "-120px",
                  xl: "30px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
              <HeroImageUtil
                image={submarineImage}
                bottom={{
                  md: "-80px",
                  xl: "15px",
                }}
                left={{
                  md: "-50px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 850px)`,
                }}
              />
              <HeroImageUtil
                image={judgeImage}
                top={{
                  md: "20px",
                  xl: "85px",
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
        <Container w="100%" maxW="container.md">
          <Text
            textStyle="h5"
            my={{
              base: "50px",
              md: "100px",
              lg: "150px",
            }}
            textAlign="center"
          >
            Iron Fish is building a decentralized{" "}
            <ThickLink underlineColor="pink.400">privacy solution</ThickLink>{" "}
            for crypto. Our Principles:
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
        <Box py="150px">
          <FancyLinkSection
            heading="Common sense compliance"
            description={`To date, crypto privacy projects have either failed to offer necessary levels of protection or, more often, they've fallen on the wrong side of public authorities. Iron Fish addresses this impasse with an encryption-enabled platform with built-in compliance controls.`}
            ctaText="Learn more"
            ctaLink="/learn/whitepaper"
            imageUrl="/images/about-us/common-sense-fish.svg"
            containerProps={{
              maxW: {
                base: "704px",
                lg: "1600px",
              },
              w: "100%",
              pl: {
                lg: "40px",
                xl: "64px",
                "2xl": "128px",
              },
            }}
          />
        </Box>
        <Backers />
      </Box>
    </>
  );
}
