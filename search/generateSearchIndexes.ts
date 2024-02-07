import fs from "fs";
import path from "path";
import url from "url";
import {
  ContentItem,
  createContentItems,
} from "./createContentItems/createContentItems";
import lunr from "lunr";

const INDEXES_DIR = path.join(
  url.fileURLToPath(new URL(".", import.meta.url)),
  "indexes"
);

async function buildSearchIndex(
  content: Array<{
    contentDir: string[];
    slugRoot: string;
  }>
) {
  let contentIndex: ContentItem[] = [];

  for (const { contentDir, slugRoot } of content) {
    contentIndex = contentIndex.concat(
      await createContentItems(contentDir, slugRoot)
    );
  }

  contentIndex = contentIndex.flat();

  const searchIndex = lunr(function () {
    this.field("title");
    this.field("ref");
    this.field("category");
    this.field("body");
    this.ref("ref");

    this.metadataWhitelist = ["position"];

    contentIndex.forEach((item) => {
      this.add(item);
    });
  });

  return searchIndex.toJSON();
}

async function main() {
  const documentationIndex = await buildSearchIndex([
    {
      contentDir: ["content", "documentation"],
      slugRoot: "/developers/documentation",
    },
    {
      contentDir: ["content", "get-started"],
      slugRoot: "/use/get-started",
    },
    {
      contentDir: ["content", "whitepaper"],
      slugRoot: "/learn/whitepaper",
    },
  ]);

  fs.writeFileSync(
    path.join(INDEXES_DIR, "documentation-index.json"),
    JSON.stringify(documentationIndex)
  );

  const blogIndex = await buildSearchIndex([
    {
      contentDir: ["content", "blog"],
      slugRoot: "/learn/blog",
    },
  ]);

  fs.writeFileSync(
    path.join(INDEXES_DIR, "blog-index.json"),
    JSON.stringify(blogIndex)
  );
}

main();
