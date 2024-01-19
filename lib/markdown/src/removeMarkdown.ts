import { remark } from "remark";
import strip from "strip-markdown";

export async function removeMarkdown(content: string) {
  const result = await remark().use(strip).process(content);
  return String(result);
}
