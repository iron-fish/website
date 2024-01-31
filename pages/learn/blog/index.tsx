import { readdirSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { parseFileByPath } from "@/lib/markdown";
import { format, parse } from "date-fns";
import Head from "next/head";
import { Box, Container, Text, Flex } from "@/lib/ui";
import {
  FilteredBlogsList,
  BlogItem,
} from "@/components/FilteredBlogsList/FilteredBlogsList";
import generateBlogFeeds from "../../../lib/feeds";
import { MEDIA_ITEMS } from "@/content/media/media";
import { SearchField } from "@/components/SearchField/SearchField";
import { FeaturedBlog } from "@/components/Blog/FeaturedBlog/FeaturedBlog";

const SEARCH_SUGGESTIONS = [
  {
    heading: "Web3: Our Vision for the Future of the Internet",
    slug: "/learn/blog/2023-04-24-web3-our-vision",
  },
  {
    heading: "A Clear Use Case: Digital Transactions",
    slug: "/learn/blog/2023-04-10-digital-transactions",
  },
  {
    heading: "The Story Behind the 'Iron Fish' Name",
    slug: "/learn/blog/2021-03-02-why-iron-fish",
  },
];

type Props = {
  blogItems: BlogItem[];
};

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
        <FeaturedBlog
          image={latestBlog.image}
          title={latestBlog.title}
          href={latestBlog.href}
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
          <Flex direction="column" gap={8} alignItems="center">
            <Text as="h3" textStyle="h3" textAlign="center">
              Explore Topics
            </Text>
            <SearchField
              domain="blog"
              suggestions={SEARCH_SUGGESTIONS}
              w="100%"
              maxW="800px"
            />
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
