import { NavItems } from "@/lib/ui";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { links } from "./links";

export function useNavLinks(): NavItems {
  const { formatMessage } = useIntl();
  return useMemo(() => {
    return links.map((link) => {
      if ("href" in link) {
        return {
          label: formatMessage(link.label),
          href: link.href,
          color: link.color,
        };
      }

      const { label, items, color } = link;
      return {
        label: formatMessage(label),
        items: items.map(({ title, description, href, image }) => {
          return {
            title: formatMessage(title),
            description: formatMessage(description),
            href,
            image,
          };
        }),
        color,
      };
    });
  }, [formatMessage]);
}
