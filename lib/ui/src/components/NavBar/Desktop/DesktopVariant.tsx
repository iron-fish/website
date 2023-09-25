import { Category } from "./Category";
import { IoChevronDownSharp } from "react-icons/io5";
import { kebabCase } from "lodash-es";
import { Box, Button, HStack, Text, Flex, FancyArrowRight } from "@/lib/ui";
import { NavItems } from "../types";
import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function useHandleLinkClick() {
  const [forceClose, setForceClose] = useState(false);

  const handleLinkClick = useCallback(() => {
    setForceClose(true);
    setTimeout(() => setForceClose(false), 0);
  }, []);

  return { forceClose, handleLinkClick };
}

export function DesktopVariant({ content }: { content: NavItems }) {
  const router = useRouter();
  const { forceClose, handleLinkClick } = useHandleLinkClick();

  return (
    <>
      <HStack spacing={0} as="ul" alignItems="stretch">
        {content.map((item, i) => {
          if ("href" in item) {
            const isInternal = item.href.startsWith("/");
            return (
              <Flex
                key={i}
                px={4}
                cursor="pointer"
                alignItems="center"
                as={isInternal ? Link : "a"}
                href={item.href}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noreferrer"}
              >
                <Text fontWeight="medium" mr={2}>
                  {item.label}
                </Text>
              </Flex>
            );
          }

          const isActiveItem =
            "items" in item &&
            item.items.some((link) => {
              return router.pathname.startsWith(link.href);
            });

          const itemId = `${kebabCase(item.label)}-item`;
          return (
            <Flex
              key={i}
              px={4}
              cursor="pointer"
              alignItems="center"
              id={itemId}
            >
              <Text
                fontWeight="medium"
                position="relative"
                mr={2}
                sx={{
                  [`#${itemId}:hover &:before`]: {
                    bg: "black",
                  },
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "calc(100% + 2.25ch)",
                  height: "1.5px",
                  bg: isActiveItem ? "black" : "transparent",
                }}
              >
                {item.label}
              </Text>
              <IoChevronDownSharp size="1.15rem" />
              <Box
                display="none"
                mx="auto"
                pt={4}
                px={12}
                pb={12}
                position="absolute"
                top="100%"
                left="50vw"
                transform="translateX(-50%)"
                sx={{
                  [`#${itemId}:hover &`]: {
                    display: forceClose ? "none" : "block",
                  },
                }}
              >
                <Box width="850px" mx="auto">
                  <Category
                    items={item.items}
                    color={item.color}
                    onLinkClick={handleLinkClick}
                  />
                </Box>
              </Box>
            </Flex>
          );
        })}
      </HStack>
      <HStack alignItems="center">
        <Button size="lg" as={Link} href="/use/get-started">
          <Box mr={4}>Get Started</Box>
          <FancyArrowRight />
        </Button>
      </HStack>
    </>
  );
}
