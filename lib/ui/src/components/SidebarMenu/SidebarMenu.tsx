import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Collapse,
  HStack,
  Link,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useIsClient } from "usehooks-ts";
import { NAV_HEIGHT } from "../NavBar/NavBar";

export type SidebarItem = {
  title: string;
  href: string;
};

export type SidebarItems = Array<
  | SidebarItem
  | {
      title: string;
      items: SidebarItems;
    }
>;

const FONT_SIZE = "1rem";

export function SidebarMenu({ items }: { items: SidebarItems }) {
  const { isOpen, onToggle } = useDisclosure();
  const isClient = useIsClient();
  const isExpandable = useBreakpointValue(
    {
      base: true,
      md: false,
    },
    {
      fallback: "md",
    }
  );

  if (!isExpandable) {
    return <MenuList items={items} />;
  }

  if (!isClient) {
    return null;
  }

  return (
    <Box borderBottom="1.5px solid black">
      <HStack
        as="button"
        onClick={onToggle}
        p={3}
        textAlign="left"
        w="100%"
        gap={2}
      >
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        <Text>Menu</Text>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Box px={3} py={6}>
          <MenuList items={items} />
        </Box>
      </Collapse>
    </Box>
  );
}

function createNestedMenuItems(
  items: SidebarItems,
  router: NextRouter
): ReactNode {
  return items.map((item) => {
    if ("href" in item) {
      const isActive = router.asPath.split("#")[0] === item.href;
      return (
        <Link
          as={NextLink}
          href={item.href}
          key={item.href}
          fontWeight={isActive ? "bold" : "normal"}
          color={isActive ? "inherit" : "#7f7f7f"}
        >
          {item.title}
        </Link>
      );
    }

    function isSelected(
      item:
        | SidebarItem
        | {
            title: string;
            items: SidebarItems;
          }
    ): boolean {
      if ("items" in item) {
        return item.items.some((subItem) => {
          if ("href" in subItem) {
            return router.asPath.split("#")[0] === subItem.href;
          }

          return isSelected(subItem);
        });
      }
      return false;
    }

    const isAccordionItemSelected = isSelected(item);
    return (
      <Accordion
        key={item.title}
        defaultIndex={isAccordionItemSelected ? 0 : -1}
        allowToggle
        border="none"
        w="100%"
      >
        <AccordionItem border="none">
          <Text as="div" role="heading" w="100%">
            <AccordionButton
              fontSize={FONT_SIZE}
              p={0}
              position="relative"
              color={isAccordionItemSelected ? "inherit" : "#7f7f7f"}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                as="span"
                fontWeight={isAccordionItemSelected ? "bold" : "normal"}
                color={isAccordionItemSelected ? "inherit" : "#7f7f7f"}
              >
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pl={2} pb={2} pr={0}>
            <VStack alignItems="flex-start" gap={1}>
              {createNestedMenuItems(item.items, router)}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  });
}

function MenuList({ items }: { items: SidebarItems }): JSX.Element {
  const router = useRouter();

  return (
    <VStack
      align="start"
      py={{
        base: 0,
        md: 8,
      }}
      pl={{
        base: 6,
        md: 8,
      }}
      pr={{
        base: 0,
        md: 2,
      }}
      flexGrow={1}
      alignItems="stretch"
      borderRight={{
        base: "none",
        md: "1.5px solid",
      }}
      position={{
        base: "relative",
        md: "sticky",
      }}
      top={{
        base: "auto",
        md: NAV_HEIGHT,
      }}
      maxHeight={{
        base: "none",
        md: "100vh",
      }}
      gap={1}
      overflow="auto"
    >
      {createNestedMenuItems(items, router)}
    </VStack>
  );
}
