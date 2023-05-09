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
import { sidebar } from "../../../content/get-started/sidebar";

const CONTENT_DIR = ["content", "get-started"];

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
      seoTitlePrefix="Get Started with Iron Fish | "
    />
  );
}

const CONTENT_PATH = path.join(process.cwd(), ...CONTENT_DIR);

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || typeof params.slug !== "string") {
    throw new Error("Slug must be a string");
  }

  const { frontMatter, content } = parseFileByPath(
    path.join(CONTENT_PATH, `${params.slug}.mdx`)
  );

  const markdown = await renderMarkdown(content);

  return {
    props: {
      slug: params.slug,
      frontMatter,
      markdown,
      sidebarItems: getSidebarContent(
        sidebar,
        CONTENT_PATH,
        "/use/get-started"
      ),
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
