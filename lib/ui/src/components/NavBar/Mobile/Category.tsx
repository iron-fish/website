import {
  HStack,
  Box,
  Text,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ColorKeys } from "../../../theme";

type Props = {
  href: string;
  color: ColorKeys;
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
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

export function Category({
  href,
  color,
  image,
  title,
  description,
  onClick,
}: Props) {
  const iconSize = useBreakpointValue({
    base: "80px",
    md: "85px",
  });
  return (
    <GridItem
      href={href}
      p={5}
      _hover={{
        bg: `${color}.500`,
      }}
      onClick={onClick}
      {...getLinkProps(href)}
    >
      <HStack>
        <Box
          height={iconSize}
          width={iconSize}
          minHeight={iconSize}
          minWidth={iconSize}
          position="relative"
          mr={4}
        >
          <Image fill alt="" src={image} style={{ objectFit: "contain" }} />
        </Box>
        <Box flexGrow={1}>
          <Text fontSize="sm" mb={2} fontWeight="medium">
            {title}
          </Text>
          <Text fontSize="xs">{description}</Text>
        </Box>
      </HStack>
    </GridItem>
  );
}
