import { NextApiRequest, NextApiResponse } from "next";
import blogSearchIndex from "@/search/indexes/blog-index.json";

const MAX_AGE = 60 * 60 * 24;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", `s-maxage=${MAX_AGE}, stale-while-revalidate`);

  return res.status(200).json(blogSearchIndex);
}
