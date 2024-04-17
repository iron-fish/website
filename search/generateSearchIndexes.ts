import fs from "fs";
import path from "path";
import lunr from "lunr";
import {
  ContentItem,
  createContentItems,
} from "./createContentItems/createContentItems";
import {
  buildNormalizedHyphens,
  registerNormalizeHyphens,
} from "./utils/normalizeHyphens";

const INDEXES_DIR = path.join(process.cwd(), "search", "indexes");

registerNormalizeHyphens();

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
    this.use(buildNormalizedHyphens);

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
  console.log("Generating search indices...");
  console.time("Generated search indices in ");

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
  console.timeEnd("Generated search indices in ");
}

main();
