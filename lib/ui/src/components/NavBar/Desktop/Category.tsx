import { Grid, GridItem, HStack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ShadowBox } from "../../ShadowBox/ShadowBox";
import { ColorKeys } from "../../../theme";

type Props = {
  color: ColorKeys;
  items: Array<{
    title: string;
    description: string;
    href: string;
    image: string;
  }>;
  onLinkClick: () => void;
};

function getLinkProps(href: string): {
  as: "a" | typeof Link;
  target?: string;
  rel?: string;
} {
  if (/^mailto:/.test(href)) {
    return {
      as: "a",
    };
  }
  if (/^https?:/.test(href)) {
    return {
      target: "_blank",
      rel: "noreferrer",
      as: "a",
    };
  }
  return {
    as: Link,
  };
}

const ICON_SIZE = "85px";

export function Category({ items, color, onLinkClick }: Props) {
  return (
    <ShadowBox p={5} shadowColor={`${color}.500`}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        {items.map((item, i) => {
          return (
            <GridItem
              key={i}
              href={item.href}
              p={5}
              onClick={onLinkClick}
              _hover={{
                bg: `${color}.500`,
              }}
              {...getLinkProps(item.href)}
            >
              <HStack>
                <Box
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                  minHeight={ICON_SIZE}
                  minWidth={ICON_SIZE}
                  position="relative"
                  mr={4}
                >
                  <Image
                    fill
                    alt=""
                    src={item.image}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Box flexGrow={1}>
                  <Text fontSize="sm" mb={2} fontWeight="medium">
                    {item.title}
                  </Text>
                  <Text fontSize="xs">{item.description}</Text>
                </Box>
              </HStack>
            </GridItem>
          );
        })}
      </Grid>
    </ShadowBox>
  );
}
