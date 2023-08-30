import elasticlunr from "elasticlunr";
import {
  createContentIndex,
  ContentItem,
} from "./createContentIndex/createContentIndex";

const CONTENT_DIRS = ["documentation", "get-started", "whitepaper"].map(
  (item) => ["content", item]
);

export const CONTENT_INDEX = CONTENT_DIRS.flatMap((contentDir) =>
  createContentIndex(contentDir)
);

const searchIndex = elasticlunr<ContentItem>(function () {
  this.addField("title");
  this.addField("slug");
  this.addField("category");
  this.addField("body");
  this.setRef("slug");
});

CONTENT_INDEX.forEach((item) => {
  console.log(item);
  searchIndex.addDoc(item);
});

export { searchIndex };
