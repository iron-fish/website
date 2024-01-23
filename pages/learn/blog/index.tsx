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
  VStack,
} from "@/lib/ui";
import Image from "next/image";
import {
  FilteredBlogsList,
  BlogItem,
} from "@/components/FilteredBlogsList/FilteredBlogsList";
import rainbow from "../../../assets/heroImages/blog/rainbow.svg";
import rubiks from "../../../assets/heroImages/blog/rubiks.svg";
import plus from "../../../assets/heroImages/blog/plus.svg";
import generateBlogFeeds from "../../../lib/feeds";
import { MEDIA_ITEMS } from "@/content/media/media";
import { SearchField } from "@/components/SearchField/SearchField";

type Props = {
  blogItems: BlogItem[];
};

const rainbowImage = rainbow as LocalImage;
const rubiksImage = rubiks as LocalImage;
const plusImage = plus as LocalImage;

export default function Blog({ blogItems }: Props) {
  const latestBlog = blogItems.find((blog) => {
    return blog.href.startsWith("/");
  });

  const restBlogs = blogItems.filter((blog) => {
    return blog.href !== latestBlog?.href;
  });

  if (!latestBlog || !restBlogs) throw new Error("Unable to find blogs");

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
        <Box
          bg="purple.500"
          borderBottom="1.5px solid black"
          py={{
            base: 8,
            md: 16,
          }}
          px={{
            base: 6,
            md: 12,
          }}
          mb={{
            base: 8,
            md: "150px",
          }}
        >
          <Container w="100%" maxW="container.lg">
            <Flex
              direction={{
                base: "column",
                lg: "row",
              }}
              alignItems={{
                base: "stretch",
                lg: "center",
              }}
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
                <ShadowBox
                  shadowColor="transparent"
                  overflow="hidden"
                  borderWidth="2px"
                  borderRadius="4px"
                >
                  <AspectRatio ratio={465 / 309}>
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
                px={{
                  base: 0,
                  sm: 8,
                  lg: 16,
                }}
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
                  href={latestBlog.href}
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
          </Container>
        </Box>
        <Container
          w="100%"
          maxW="container.2xl"
          px={{
            base: 6,
            lg: 10,
            xl: 16,
          }}
        >
          <Flex direction="column" gap={8} alignItems="center">
            <Text as="h3" textStyle="h3" textAlign="center">
              Explore Topics
            </Text>
            <SearchField domain="blog" w="100%" maxW="800px" />
            <FilteredBlogsList blogItems={restBlogs} />
          </Flex>
        </Container>
      </Box>
    </>
  );
}

const CONTENT_PATH = path.join(process.cwd(), "content", "blog");

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mediaItems = MEDIA_ITEMS.map((item) => {
    return {
      title: item.title,
      href: item.link,
      date: format(parse(item.date, "yyyy-MM-dd", new Date()), "MMMM dd, yyyy"),
      timestamp: parse(item.date, "yyyy-MM-dd", new Date()).valueOf(),
      image: item.image,
      tags: ["media"],
    };
  });

  const blogItems = readdirSync(CONTENT_PATH)
    .filter((item) => item.endsWith(".mdx"))
    .map((item) => {
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
        href: `/learn/blog/${item.replace(/\.mdx?$/, "")}`,
        date: format(parse(date, "yyyy-MM-dd", new Date()), "MMMM dd, yyyy"),
        timestamp: parse(date, "yyyy-MM-dd", new Date()).valueOf(),
        tags: (frontMatter.tags ?? []) as string[],
        image,
      };
    })
    .concat(mediaItems)
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
