import path from "path";
import { parseNestedDir, parseFileByPath } from "@/lib/markdown";

export type ContentItem = {
  title: any;
  slug: string;
  category: string;
  body: string;
};

export function createContentIndex(contentDir: string[]): ContentItem[] {
  const contentPath = path.join(process.cwd(), ...contentDir);

  return parseNestedDir(contentPath)
    .filter((subpath) => {
      return subpath.at(-1)?.endsWith(".mdx");
    })
    .map((subpath) => {
      const { frontMatter, content } = parseFileByPath(
        `${contentPath}/${subpath.join("/")}`
      );
      const slug =
        "/" +
        contentDir
          .slice(1)
          .concat(subpath)
          .join("/")
          .replace(/\.mdx?$/, "");
      return {
        title: frontMatter.title ?? "",
        slug: slug ?? "",
        category: contentDir.at(-1) ?? "",
        body: content ?? "",
      };
    });
}
