import { readdirSync } from 'fs';
import path from 'path';
import { parseFileByPath } from './parseFileByPath';

export type SidebarItem =
  | string
  | {
      id: string;
      label?: string;
    };

export type SidebarCategory = {
  label: string;
  items: SidebarItem[];
};

export type SidebarDefinition = Array<SidebarCategory | SidebarItem>;

function buildSidebarItem(
  item: SidebarItem,
  contentMap: Record<string, Record<string, string>>,
  pathPrefix: string
) {
  if (typeof item === 'string') {
    return {
      title: contentMap[item].title,
      href: `${pathPrefix}/${contentMap[item].document}`,
    };
  }

  return {
    title: item.label ?? contentMap[item.id].title,
    href: `${pathPrefix}/${contentMap[item.id].document}`,
  };
}

export function getSidebarContent(
  sidebarDefinition: SidebarDefinition,
  contentPath: string,
  pathPrefix: string
) {
  const contentMap = readdirSync(contentPath)
    .filter((item) => item.endsWith('.mdx'))
    .map((item) => {
      const builtPath = path.join(contentPath, item);
      return {
        ...parseFileByPath(builtPath).frontMatter,
        document: item.replace(/\.mdx?$/, ''),
      } as Record<string, string>;
    })
    .reduce<Record<string, Record<string, string>>>((acc, current) => {
      acc[current.document] = current;
      return acc;
    }, {});

  return sidebarDefinition.map((item) => {
    if (typeof item !== 'string' && 'items' in item) {
      return {
        title: item.label,
        items: item.items.map((item) => {
          return buildSidebarItem(item, contentMap, pathPrefix);
        }),
      };
    } else {
      return buildSidebarItem(item, contentMap, pathPrefix);
    }
  });
}
