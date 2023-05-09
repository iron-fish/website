import { readdirSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { parseFileByPath } from "@/lib/markdown";
import { format, parse } from "date-fns";
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
  Button,
  ThickLink,
  Flex,
  ArrowButton,
  FancyArrowUpRight,
  chakra,
} from "@/lib/ui";
import { useState } from "react";
import normalFish from "../../../assets/heroImages/community-media/normal-fish.svg";
import loudspeaker from "../../../assets/heroImages/community-media/loudspeaker.svg";
import key from "../../../assets/heroImages/community-media/key.svg";
import { MEDIA_ITEMS } from "../../../content/media/media";
import Head from "next/head";

type BlogItem = {
  title: string;
  slug: string;
  date: string;
  image: string | null;
  id: number;
};

type Props = {
  blogItems: BlogItem[];
};

const normalFishImage = normalFish as LocalImage;
const loudspeakerImage = loudspeaker as LocalImage;
const keyImage = key as LocalImage;

const CONTENT_CHUNK_SIZE = 12;

export default function CommunityHighlights() {
  const [blogChunksCount, setBlogChunksCount] = useState(1);
  const blogsToShow = blogChunksCount * CONTENT_CHUNK_SIZE;
  const hasMore = MEDIA_ITEMS.length > blogsToShow;

  return (
    <>
      <Head>
        <title>Iron Fish Media | Press Releases & More</title>
      </Head>
      <Box mb="150px">
        <Hero
          bg="green.400"
          heading="Media"
          subheading="Iron Fish, Live"
          description="Gain insight into the collective vision of our team and keep up with the latest Iron Fish media."
          images={
            <>
              <HeroImageUtil
                image={normalFishImage}
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
                image={loudspeakerImage}
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
                image={keyImage}
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
            Explore curated news stories and learn about the ideas and
            technologies behind our mission to bring encryption to crypto and
            Web3.
          </Text>
          <Grid
            templateColumns={{
              base: "100%",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {MEDIA_ITEMS.slice(0, blogsToShow).map((item, i) => {
              return (
                <GridItem key={i} display="flex">
                  <ShadowBox shadowColor="green.400">
                    <Box p={8} pb={16}>
                      <Text textStyle="sm" mb={4}>
                        {item.date}
                      </Text>
                      <Text
                        as="h3"
                        textStyle="h4"
                        marginBottom={4}
                        minHeight="2.5em"
                      >
                        {item.title}
                      </Text>
                      <Button
                        as="a"
                        href={item.link}
                        size="sm"
                        bg="white"
                        target="_blank"
                        rel="noreferrer"
                        _hover={{
                          bg: "gray.200",
                        }}
                      >
                        <chakra.span mr={1}>View</chakra.span>
                        <FancyArrowUpRight />
                      </Button>
                    </Box>
                  </ShadowBox>
                </GridItem>
              );
            })}
          </Grid>
          {hasMore && (
            <Flex justifyContent="center" mt={16}>
              <ArrowButton
                colorScheme="white"
                size="sm"
                onClick={() => setBlogChunksCount((prev) => prev + 1)}
              >
                Read Older Articles
              </ArrowButton>
            </Flex>
          )}
        </Container>
      </Box>
    </>
  );
}

const CONTENT_PATH = path.join(process.cwd(), "content", "blog");

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const blogItems = readdirSync(CONTENT_PATH)
    .filter((item) => item.endsWith(".mdx"))
    .map((item, i) => {
      const builtPath = path.join(CONTENT_PATH, item);
      const { frontMatter } = parseFileByPath(builtPath);

      const date = item.match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? null;

      if (!date) {
        throw new Error(`Invalid date format for blog article: ${item}`);
      }

      const image =
        typeof frontMatter.image === "string" ? frontMatter.image : null;

      return {
        title: frontMatter.title as string,
        slug: item.replace(/\.mdx?$/, ""),
        date: format(parse(date, "yyyy-MM-dd", new Date()), "MMMM dd, yyyy"),
        timestamp: parse(date, "yyyy-MM-dd", new Date()).valueOf(),
        image,
        id: i,
        tags: frontMatter.tags,
      };
    })
    .filter((item) => item.tags.includes("community-highlight"))
    .sort((a, b) => {
      return a.timestamp > b.timestamp ? -1 : 1;
    });

  return {
    props: {
      blogItems,
    },
  };
};
