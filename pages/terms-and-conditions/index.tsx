import { GetStaticProps } from "next";
import path from "path";
import { BlogLayout } from "../../layouts/Blog/Blog";
import { ComponentProps } from "react";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import { assertString } from "@/lib/utils";
import { MDXRenderer } from "@/lib/ui";

type Props = {
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
};

export default function PrivacyPolicy({ markdown }: Props) {
  return (
    <BlogLayout
      title="Terms and Conditions"
      seoTitle="Iron Fish Terms and Conditions | Iron Fish"
      markdown={markdown}
    />
  );
}

const CONTENT_PATH = path.join(
  process.cwd(),
  "content",
  "legal",
  "terms-and-conditions.mdx"
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { frontMatter, content } = parseFileByPath(CONTENT_PATH);

  const markdown = await renderMarkdown(content);

  return {
    props: {
      title: assertString(frontMatter.title),
      description: assertString(frontMatter.description, ""),
      markdown,
    },
  };
};
