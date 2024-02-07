import path from "path";
import { parseNestedDir, parseFileByPath } from "../../lib/markdown";
import { removeMarkdown } from "../../lib/markdown/src/removeMarkdown";

export type ContentItem = {
  title: any;
  category: string;
  body: string;
  ref: string;
};

export async function createContentItems(
  contentDir: string[],
  slugRoot: string
): Promise<ContentItem[]> {
  const contentPath = path.join(process.cwd(), ...contentDir);

  const withNestedDirs = parseNestedDir(contentPath).filter((subpath) => {
    return subpath.at(-1)?.endsWith(".mdx");
  });

  let contentIndex: ContentItem[] = [];

  for (const subpath of withNestedDirs) {
    const { frontMatter, content } = parseFileByPath(
      `${contentPath}/${subpath.join("/")}`
    );
    const slug = `${slugRoot}/${subpath.join("/").replace(".mdx", "")}`;
    const ref = JSON.stringify({
      documentPath: path.join(...contentDir, ...subpath),
      slug,
    });
    const body = content ? await removeMarkdown(content) : "";
    contentIndex.push({
      title: frontMatter.title ?? "",
      category: contentDir.at(-1) ?? "",
      body,
      ref,
    });
  }

  return contentIndex;
}
