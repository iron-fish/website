import { NextApiRequest, NextApiResponse } from "next";
import { search } from "@/lib/search";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import { removeMarkdown } from "@/lib/markdown/src/removeMarkdown";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q, max } = req.query;

  if (typeof q !== "string") {
    return res.status(400).json({ message: "Bad Request" });
  }

  const maxResults = isNaN(Number(max)) ? 10 : Number(max);

  const searchResults = await search(q, maxResults);

  let formattedResults: {
    title: string;
    slug: string;
    body: string;
    highlights: { title: number[]; body: number[] };
  }[] = [];

  for (const item of searchResults) {
    const { documentPath, slug } = JSON.parse(item.ref);
    const parsed = parseFileByPath(documentPath);

    const highlights = Object.values(item.matchData.metadata).reduce(
      (acc, { body, title }) => {
        return {
          title: title ? [...acc.title, ...title.position] : acc.title,
          body: body ? [...acc.body, ...body.position] : acc.body,
        };
      },
      { title: [], body: [] }
    );

    formattedResults.push({
      title: parsed.frontMatter.title,
      slug,
      body: await removeMarkdown(parsed.content),
      highlights: highlights,
    });
  }

  return res.status(200).json(formattedResults);
}
