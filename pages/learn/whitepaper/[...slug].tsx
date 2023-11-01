import { readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { MDXRenderer, SidebarItems } from "@/lib/ui";
import {
  getSidebarContent,
  parseFileByPath,
  renderMarkdown,
} from "@/lib/markdown";
import { ComponentProps } from "react";
import { DocumentationLayout } from "../../../layouts/Documentation/Documentation";
import { sidebar } from "../../../content/whitepaper/sidebar";
import { parseNestedDir } from "@/lib/markdown/src/parseNestedDir";

const CONTENT_DIR = ["content", "whitepaper"];

type Props = {
  slug: string;
  frontMatter: {
    title?: string;
    description?: string;
  };
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
  sidebarItems: SidebarItems;
};

export default function DocumentationPage({
  frontMatter,
  markdown,
  sidebarItems,
  slug,
}: Props) {
  return (
    <DocumentationLayout
      frontMatter={frontMatter}
      markdown={markdown}
      sidebarItems={sidebarItems}
      githubPath={CONTENT_DIR.join("/") + `/${slug}.mdx`}
      seoTitlePrefix="Iron Fish Whitepaper | "
    />
  );
}

const CONTENT_PATH = path.join(process.cwd(), ...CONTENT_DIR);

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params?.slug.join("/") : null;

  if (typeof slug !== "string") {
    throw new Error("Slug must be a string");
  }

  const { frontMatter, content } = parseFileByPath(
    path.join(CONTENT_PATH, `${slug}.mdx`)
  );

  const markdown = await renderMarkdown(content);

  return {
    props: {
      slug,
      frontMatter,
      markdown,
      sidebarItems: getSidebarContent(
        sidebar,
        CONTENT_PATH,
        "/learn/whitepaper"
      ),
    },
  };
};

export const getStaticPaths: GetStaticPaths<{
  slug: Array<string>;
}> = async () => {
  const paths = parseNestedDir(CONTENT_PATH)
    .filter((item) => item[item.length - 1].endsWith(".mdx"))
    .map((item) => {
      item[item.length - 1] = item[item.length - 1].replace(/\.mdx?$/, "");
      return {
        params: {
          slug: item,
        },
      };
    });

  return { paths, fallback: false };
};
