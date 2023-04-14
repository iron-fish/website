import { readFileSync } from 'fs';
import * as matter from 'gray-matter';

export function parseFileByPath(path: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data, content } = matter.default(readFileSync(path));
  return {
    frontMatter: data,
    content,
  };
}
