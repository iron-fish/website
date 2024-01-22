import {
  ContentItem,
  createContentItems,
} from "./createContentItems/createContentItems";
import lunr from "lunr";

const SEARCH_CONTENT = [
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
];

let searchIndex: lunr.Index;

async function getSearchIndex() {
  if (searchIndex) {
    return searchIndex;
  }

  let contentIndex: ContentItem[] = [];

  for (const { contentDir, slugRoot } of SEARCH_CONTENT) {
    contentIndex = contentIndex.concat(
      await createContentItems(contentDir, slugRoot)
    );
  }

  contentIndex = contentIndex.flat();

  searchIndex = lunr(function () {
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

  return searchIndex;
}

export async function search(query: string, maxResults = 10) {
  const index = await getSearchIndex();
  return index;
  // return index.search(query).slice(0, maxResults);
}
