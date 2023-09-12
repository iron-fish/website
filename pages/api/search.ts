import { NextApiRequest, NextApiResponse } from "next";
import { searchIndex } from "@/lib/search";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q, max } = req.query;

  if (typeof q !== "string") {
    return res.status(400).json({ message: "Bad Request" });
  }

  const maxResults = isNaN(Number(max)) ? 5 : Number(max);

  const searchResults = searchIndex.search(q, {}).slice(0, maxResults);

  return res.status(200).json({ searchResults });
}
