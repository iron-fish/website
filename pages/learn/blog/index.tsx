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

type Props = {
  blogItems: BlogItem[];
};

const rainbowImage = rainbow as LocalImage;
const rubiksImage = rubiks as LocalImage;
const plusImage = plus as LocalImage;

export default function Blog({ blogItems, ...rest }: Props) {
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
                image={rainbowImage}
                top={{
                  md: "-20px",
                  xl: "30px",
                }}
                left={{
                  md: "20px",
                  xl: "30px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
              <HeroImageUtil
                image={rubiksImage}
                bottom={{
                  md: "-80px",
                  xl: "30px",
                }}
                left={{
                  md: "-50px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 850px)`,
                }}
              />
              <HeroImageUtil
                image={plusImage}
                top={{
                  md: "10px",
                  xl: "150px",
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
          <FilteredBlogsList blogItems={blogItems} />
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
