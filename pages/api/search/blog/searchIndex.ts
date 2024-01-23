import {
  ContentItem,
  createContentItems,
} from "@/lib/search/createContentItems/createContentItems";
import lunr from "lunr";
import { NextApiRequest, NextApiResponse } from "next";

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

async function getSearchIndex() {
  let contentIndex: ContentItem[] = await createContentItems(
    ["content", "blog"],
    "/learn/blog"
  );

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

const MAX_AGE = 60 * 60 * 24;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const searchIndex = await getSearchIndex();

  res.setHeader("Cache-Control", `s-maxage=${MAX_AGE}, stale-while-revalidate`);

  return res.status(200).json(searchIndex);
}
