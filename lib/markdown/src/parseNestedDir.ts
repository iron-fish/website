import fs from "fs";
import path from "path";

export function parseNestedDir(
  workingDirectory: string,
  _nestedPath?: string[]
): Array<Array<string>> {
  const rootPath = path.join(workingDirectory, _nestedPath?.join("/") ?? "");

  const content = fs.readdirSync(rootPath);
  return content.reduce<Array<Array<string>>>((acc, curr) => {
    const currentPath = path.join(rootPath, curr);

    if (!fs.statSync(currentPath).isDirectory()) {
      acc.push([...(_nestedPath ?? []), curr]);
      return acc;
    }

    return [
      ...acc,
      ...parseNestedDir(workingDirectory, [...(_nestedPath ?? []), curr]),
    ];
  }, []);
}
