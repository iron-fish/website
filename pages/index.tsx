import { readdirSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { parseFileByPath } from "@/lib/markdown";
import { format, parse } from "date-fns";
import { Box } from "@/lib/ui";
import { FromTheBlog } from "@/components/HomePage/FromTheBlog/FromTheBlog";
import { BlogItem } from "@/components/FilteredBlogsList/FilteredBlogsList";
import { Community } from "../components/HomePage/Community/Community";
import { Hero } from "../components/HomePage/Hero/Hero";
import { UseCase } from "../components/HomePage/UseCase/UseCase";
import { Whitepaper } from "../components/HomePage/Whitepaper/Whitepaper";
import { WhyIronFish } from "../components/HomePage/WhyIronFish/WhyIronFish";

type Props = {
  blogItems: BlogItem[];
};

export default function Index({ blogItems }: Props) {
  return (
    <Box>
      <Hero />
      <Whitepaper />
      <UseCase />
      <WhyIronFish />
      <FromTheBlog blogItems={blogItems} />
      <Community />
    </Box>
  );
}

const CONTENT_PATH = path.join(process.cwd(), "content", "blog");

export const getStaticProps: GetStaticProps<Props> = async () => {
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
    .sort((a, b) => {
      return a.timestamp > b.timestamp ? -1 : 1;
    });

  return {
    props: {
      blogItems: blogItems.slice(0, 3),
    },
  };
};
