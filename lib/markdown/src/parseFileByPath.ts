import { readFileSync } from "fs";
import * as matter from "gray-matter";

export function parseFileByPath(path: string, footer = "") {
  const fileContents = readFileSync(path).toString() + footer;
  const { data, content } = matter.default(fileContents);
  return {
    frontMatter: data,
    content,
  };
}
