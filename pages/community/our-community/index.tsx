import Image from "next/image";
import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  Text,
  LocalImage,
  Grid,
  GridItem,
  ShadowBox,
  ThickLink,
} from "@/lib/ui";
import earth from "../../../assets/heroImages/community-our/earth.svg";
import apple from "../../../assets/heroImages/community-our/apple.svg";
import octo from "../../../assets/heroImages/community-our/octo.svg";
import WorldMap from "../../../assets/community/map.svg";
import { OurCommunityIs } from "../../../components/Community/OurCommunityIs/OurCommunityIs";
import { Join } from "../../../components/Community/Join/Join";
import { Quotes } from "../../../components/Community/Quotes/Quotes";
import Head from "next/head";

const earthImage = earth as LocalImage;
const appleImage = apple as LocalImage;
const octoImage = octo as LocalImage;

const STATS = [
  {
    metric: "6,000+",
    label: "Active Nodes",
  },
  {
    metric: "Every",
    label: "Country Represented",
  },
  {
    metric: "50,000+",
    label: "Blocks Mined",
  },
  {
    metric: "42,000+",
    label: "Community Members",
  },
  {
    metric: "13,000+",
    label: "Assets Minted",
  },
  {
    metric: "140,000+",
    label: "Grafittis",
  },
];

export default function CommunityHighlights() {
  return (
    <>
      <Head>
        <title>Iron Fish Community | Get Involved in Our Community</title>
      </Head>
      <Box>
        <Hero
          bg="green.400"
          heading="Community"
          subheading="Let's Create a More Private World"
          description="One of our core principles is that we build, together. We do this on a global scale."
          images={
            <>
              <HeroImageUtil
                image={earthImage}
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
                image={appleImage}
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
                image={octoImage}
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
            The{" "}
            <ThickLink underlineColor="green.500">
              Iron Fish community
            </ThickLink>{" "}
            is home to a diverse group of miners, node operators, everyday
            users, and people curious about crypto. Come find your place in this
            lively, welcoming collective that is united around the idea that
            crypto can be made safer and easier to use.
          </Text>
        </Container>
        <Box
          borderTop="1.5px solid black"
          borderBottom="1.5px solid black"
          bg="blue.500"
          py={{
            base: 24,
            md: "128px",
          }}
          overflow="hidden"
        >
          <Box textAlign="center" px={4}>
            <Text textStyle="h3" mb={8}>
              This is Iron Fish
            </Text>
            <Text textStyle="lg" mb={16} maxW="35ch" mx="auto">
              Our node operators and miners are globally distributed on our
              decentralized network.
            </Text>
          </Box>
          <Box
            mx={{
              base: "-10vw",
              md: "-5vw",
              lg: 0,
            }}
          >
            <Image
              src={WorldMap}
              alt=""
              style={{
                margin: "0 auto",
              }}
            />
          </Box>
        </Box>
        <Container
          w="100%"
          maxW="container.2xl"
          px={{
            base: 6,
            lg: 10,
            xl: 16,
          }}
          py={{
            base: 24,
            md: "128px",
          }}
        >
          <Grid
            templateColumns={{
              base: "100%",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {STATS.map((item, i) => {
              return (
                <GridItem key={i} display="flex">
                  <ShadowBox shadowColor="green.400">
                    <Box p={8}>
                      <Text textStyle="h3" marginBottom={1}>
                        {item.metric}
                      </Text>
                      <Text textStyle="h4">{item.label}</Text>
                    </Box>
                  </ShadowBox>
                </GridItem>
              );
            })}
          </Grid>
        </Container>
        <Quotes />
        <OurCommunityIs />
        <Join />
      </Box>
    </>
  );
}
