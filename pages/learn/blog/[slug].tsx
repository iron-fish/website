import { readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { MDXRenderer } from "@/lib/ui";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import { ComponentProps } from "react";
import { BlogLayout } from "../../../layouts/Blog/Blog";
import { assertString } from "@/lib/utils";

type Props = {
  author: string;
  title: string;
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
  seoTitle: string;
  image?: string;
  description?: string;
};

const FOOTER = `
---

#### Join the Iron Fish community 🏃🐟

* 🎤 [Discord](https://discord.ironfish.network/)
* 🐦 [Twitter](https://twitter.com/ironfishcrypto)
* 📧 [Email Updates](mailto:contact@ironfish.network)
`;

export default function BlogPage({
  author,
  title,
  markdown,
  seoTitle,
  image,
  description,
}: Props) {
  return (
    <BlogLayout
      author={author}
      title={title}
      markdown={markdown}
      image={image}
      description={description}
      seoTitle={seoTitle}
      seoTitlePostfix=" | Iron Fish Blog"
    />
  );
}

const CONTENT_PATH = path.join(process.cwd(), "content", "blog");

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || typeof params.slug !== "string") {
    throw new Error("Slug must be a string");
  }

  const { frontMatter, content } = parseFileByPath(
    path.join(CONTENT_PATH, `${params.slug}.mdx`),
    FOOTER
  );

  const markdown = await renderMarkdown(content);

  return {
    props: {
      title: assertString(frontMatter.title),
      description: assertString(frontMatter.description, ""),
      author: assertString(frontMatter.author),
      image: assertString(frontMatter.image, ""),
      seoTitle: assertString(frontMatter["seo-title"], ""),
      markdown,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = readdirSync(CONTENT_PATH)
    .filter((item) => item.endsWith(".mdx"))
    .map((item) => {
      const slug = item.replace(/\.mdx?$/, "");
      return {
        params: {
          slug,
        },
      };
    });

  return { paths, fallback: false };
};
