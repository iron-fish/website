import { ReactNode } from "react";
import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  Text,
  LocalImage,
  ThickLink,
  chakra,
} from "@/lib/ui";
import { LogoDownloads } from "../../../components/MediaKit/LogoDownloads/LogoDownloads";
import { BrandGuidelines } from "../../../components/MediaKit/BrandGuidelines/BrandGuidelines";
import toothyGuy from "../../../assets/heroImages/media-kit/toothy-guy.svg";
import school from "../../../assets/heroImages/media-kit/school.svg";
import verticalFish from "../../../assets/heroImages/media-kit/vertical-fish.svg";
import { IllustrationPack } from "../../../components/MediaKit/IllustrationPack/IllustrationPack";
import Head from "next/head";

const toothyGuyImage = toothyGuy as LocalImage;
const schoolImage = school as LocalImage;
const verticalFishImage = verticalFish as LocalImage;

export default function FAQ() {
  return (
    <>
      <Head>
        <title>
          Iron Fish Media | Downloadable Resources for Press & Media
        </title>
      </Head>
      <Box>
        <Hero
          bg="purple.500"
          heading="Media Kit"
          subheading="Any press is good press. Right?"
          description="Grab our official Iron Fish brand resources and learn about our usage guidelines below. Please do not deviate."
          images={
            <>
              <HeroImageUtil
                image={toothyGuyImage}
                top={{
                  md: "-20px",
                  xl: "20px",
                }}
                left={{
                  md: "-70px",
                  xl: "30px",
                  "2xl": `calc(50vw - 600px)`,
                }}
              />
              <HeroImageUtil
                image={schoolImage}
                bottom={{
                  md: "-80px",
                  xl: "25px",
                }}
                left={{
                  md: "-50px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 750px)`,
                }}
              />
              <HeroImageUtil
                image={verticalFishImage}
                top={{
                  md: "40px",
                  xl: "120px",
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
        <Container w="100%" maxW="container.lg">
          <Text
            textStyle="h5"
            mt={{
              base: "50px",
              md: "100px",
              lg: "150px",
            }}
            mb={{
              base: "96px",
              md: "128px",
              lg: "150px",
            }}
            textAlign="center"
          >
            Our brand is positioned around the notion of{" "}
            <ThickLink underlineColor="pink.400">being novel</ThickLink> - not
            just in terms of the product we are creating, but in our visual
            aesthetic as well. Because why not. Can&apos;t find what you&apos;re
            looking for?{" "}
            <TextLink href="mailto:contact@ironfish.network">
              Send us an email
            </TextLink>
            .
          </Text>
        </Container>
        <LogoDownloads />
        <BrandGuidelines />
        <IllustrationPack />
      </Box>
    </>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <chakra.a
      href={href}
      target="_blank"
      rel="noreferrer"
      textDecoration="underline"
      textDecorationThickness="2px"
    >
      {children}
    </chakra.a>
  );
}
