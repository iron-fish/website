import { parseFileByPath } from "@/lib/markdown";
import { removeMarkdown } from "@/lib/markdown/src/removeMarkdown";
import lunr from "lunr";
import { NextApiRequest, NextApiResponse } from "next";

function getHostUrl(headers: NextApiRequest["headers"]) {
  const protocol = headers["x-forwarded-proto"] || "http";
  const originalHost = String(headers["x-forwarded-host"] || headers.host);
  const host = originalHost?.startsWith("localhost:")
    ? originalHost.replace("localhost", "127.0.0.1")
    : originalHost;
  return `${protocol}://${host}`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q, max } = req.query;

  if (typeof q !== "string") {
    return res.status(400).json({ message: "Bad Request" });
  }

  const searchIndexResponse = await fetch(
    `${getHostUrl(req.headers)}/api/search/documentation/searchIndex`
  );

  const searchIndex = await searchIndexResponse.json();

  const lunrIndex = lunr.Index.load(searchIndex);

  const maxResults = isNaN(Number(max)) ? 10 : Number(max);

  const searchResults = lunrIndex.search(q).slice(0, maxResults);

  let formattedResults: Array<{
    title: string;
    slug: string;
    body: string;
    highlights: { title: number[]; body: number[] };
  }> = [];

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
