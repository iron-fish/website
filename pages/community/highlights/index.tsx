import { readdirSync } from "fs";
import path from "path";
import Link from "next/link";
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

import love from "../../../assets/heroImages/community-highlights/love.svg";
import rainbow from "../../../assets/heroImages/community-highlights/rainbow.svg";
import quatro from "../../../assets/heroImages/community-highlights/quatro.svg";
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

const loveImage = love as LocalImage;
const rainbowImage = rainbow as LocalImage;
const quatroImage = quatro as LocalImage;

const BLOG_CHUNK_SIZE = 12;

export default function CommunityHighlights({ blogItems }: Props) {
  const [blogChunksCount, setBlogChunksCount] = useState(1);
  const blogsToShow = blogChunksCount * BLOG_CHUNK_SIZE;
  const hasMore = blogItems.length > blogsToShow;

  return (
    <>
      <Head>
        <title>Iron Fish Media | Press Releases & More</title>
      </Head>
      <Box mb="150px">
        <Hero
          bg="green.400"
          heading="Community Highlights"
          subheading="Where ideas find expression"
          description="Get to know our fun-loving, engaged community members and discover the memes, instructional videos, and articles they've made."
          images={
            <>
              <HeroImageUtil
                image={loveImage}
                top={{
                  md: "10px",
                  xl: "20px",
                }}
                left={{
                  md: "-120px",
                  xl: "30px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
              <HeroImageUtil
                image={rainbowImage}
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
                image={quatroImage}
                top={{
                  md: "-10px",
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
            The creative output, passion, and commitment of our community{" "}
            <ThickLink underlineColor="green.400">drives our project</ThickLink>
            . Explore the interviews and community-production that bring ideas
            to life:
          </Text>
          <Grid
            templateColumns={{
              base: "100%",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {blogItems.slice(0, blogsToShow).map((item) => {
              return (
                <GridItem key={item.id} display="flex">
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
                        as={Link}
                        href={`/learn/blog/${item.slug}`}
                        size="sm"
                        bg="white"
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
