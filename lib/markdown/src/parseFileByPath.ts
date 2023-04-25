import { readFileSync } from "fs";
import * as matter from "gray-matter";

export function parseFileByPath(path: string) {
  const { data, content } = matter.default(readFileSync(path));
  return {
    frontMatter: data,
    content,
  };
}
