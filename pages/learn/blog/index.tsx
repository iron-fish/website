import { readdirSync } from "fs";
import path from "path";
import Link from "next/link";
import { GetStaticProps } from "next";
import { parseFileByPath } from "@/lib/markdown";
import { format, parse } from "date-fns";
import Head from "next/head";
import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  Text,
  LocalImage,
  ShadowBox,
  AspectRatio,
  Button,
  Flex,
} from "@/lib/ui";
import owl from "../../../assets/heroImages/blog/owl.svg";
import rubiks from "../../../assets/heroImages/blog/rubiks.svg";
import reading from "../../../assets/heroImages/blog/reading.svg";
import generateBlogFeeds from "../../../lib/feeds";
import Image from "next/image";
import { useState } from "react";
import {
  FilteredBlogsList,
  BlogItem,
} from "@/components/FilteredBlogsList/FilteredBlogsList";

type Props = {
  blogItems: BlogItem[];
};

const owlImage = owl as LocalImage;
const rubiksImage = rubiks as LocalImage;
const readingImage = reading as LocalImage;

const BLOG_CHUNK_SIZE = 6;

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Community Spotlights",
    value: "community",
  },
  {
    label: "Ecosystem Spotlights",
    value: "ecosystem",
  },
  {
    label: "Product Highlights",
    value: "product",
  },
];

export default function Blog({ blogItems }: Props) {
  const [blogChunksCount, setBlogChunksCount] = useState(1);
  const blogsToShow = blogChunksCount * BLOG_CHUNK_SIZE;
  const hasMore = blogItems.length > blogsToShow;
  const latestBlog = blogItems.at(0);

  if (!latestBlog) throw new Error("No blogs found");

  return (
    <>
      <Head>
        <title>Stay up to Date with Iron Fish | Iron Fish Blog</title>
        <link
          href="/learn/blog/feed.rss"
          type="application/rss+xml"
          rel="alternate"
          title="Iron Fish Blog RSS Feed"
        />
        <link
          href="/learn/blog/feed.atom"
          type="application/atom+xml"
          rel="alternate"
          title="Iron Fish Blog Atom Feed"
        />
      </Head>
      <Box mb="150px">
        <Hero
          bg="purple.500"
          heading="Blog"
          subheading="Diving Into Iron Fish"
          description="Your go-to hub for all things Iron Fish. Check out our product deep dives, ecosystem highlights, recent news, and so much more."
          images={
            <>
              <HeroImageUtil
                image={owlImage}
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
                image={rubiksImage}
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
                image={readingImage}
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
          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            alignItems={{
              base: "stretch",
              lg: "center",
            }}
            mt="150px"
            mb={16}
          >
            <Box
              mb={{
                base: 8,
                lg: 0,
              }}
              w={{
                base: "100%",
                lg: "50%",
              }}
            >
              <ShadowBox shadowColor="transparent">
                <AspectRatio ratio={465 / 309} borderBottom="1.5px solid black">
                  {latestBlog.image && (
                    <Image alt="" src={latestBlog.image} fill />
                  )}
                </AspectRatio>
              </ShadowBox>
            </Box>
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              px={16}
              w={{
                base: "100%",
                lg: "50%",
              }}
            >
              <Text textStyle="h4" textTransform="uppercase" mb={4}>
                Featured Blog
              </Text>
              <Text as="h3" textStyle="h3" marginBottom={4} minHeight="2.5em">
                {latestBlog.title}
              </Text>
              <Button
                as={Link}
                href={`/learn/blog/${latestBlog.slug}`}
                size="sm"
                bg="white"
                _hover={{
                  bg: "gray.200",
                }}
              >
                Read Now
              </Button>
            </Flex>
          </Flex>
          <FilteredBlogsList blogItems={blogItems} />
          {/* <Filter
            options={filterOptions}
            selectedOption={filterOptions[0]}
            onChange={(option) => {
              console.log(option);
              // handleFilterChange(option);
              // replace(
              //   {
              //     query: {
              //       ...query,
              //       category: option.value,
              //     },
              //   },
              //   undefined,
              //   {
              //     shallow: true,
              //   }
              // );
            }}
            mb={16}
          />
          <Grid
            templateColumns={{
              base: "100%",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {blogItems.slice(0, blogsToShow).map((item) => {
              const imageSrc =
                item.image ?? "/images/blog/thumbnail-default.png";
              return (
                <GridItem key={item.id} display="flex">
                  <ShadowBox
                    shadowColor="white"
                    borderWidth="2px"
                    borderRadius="4px"
                  >
                    <AspectRatio
                      ratio={465 / 309}
                      borderBottom="1.5px solid black"
                    >
                      <Image alt="" src={imageSrc} fill />
                    </AspectRatio>
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
                        Read Now
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
          )} */}
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
      };
    })
    .sort((a, b) => {
      return a.timestamp > b.timestamp ? -1 : 1;
    });

  await generateBlogFeeds();

  return {
    props: {
      blogItems,
    },
  };
};
