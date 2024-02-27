import { SearchField } from "@/components/SearchField/SearchField";
import {
  Heading,
  Box,
  Grid,
  SidebarMenu,
  MDXRenderer,
  useBreakpointValue,
  Text,
  SidebarItems,
  headingToAnchorId,
  VStack,
  NAV_HEIGHT,
  HStack,
  SidebarItem,
  ArrowButton,
} from "@/lib/ui";
import { smoothScrollToEl } from "@/lib/ui/src/hooks/useSmoothScrollToHash";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
import { useIsClient } from "usehooks-ts";

type Props = {
  frontMatter: {
    title?: string;
    "seo-title"?: string;
    description?: string;
  };
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
  sidebarItems: SidebarItems;
  sidebarWidth?: string;
  githubPath?: string;
  seoTitlePrefix?: string;
};

const HEADING_SELECTOR = "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]";

const SEARCH_SUGGESTIONS = [
  {
    heading: "Installing the CLI",
    slug: "/use/get-started/installation",
  },
  {
    heading: "Download the Desktop App",
    slug: "/use/node-app",
  },
  {
    heading: "Mining",
    slug: "/use/get-started/mining",
  },
];

export function DocumentationLayout({
  frontMatter,
  markdown,
  sidebarItems,
  sidebarWidth = "250px",
  githubPath,
  seoTitlePrefix = "",
}: Props) {
  const showOnThisPage = useBreakpointValue({
    base: false,
    xl: true,
  });

  const contentRef = useRef<HTMLDivElement | null>(null);
  const markdownSrcRef = useRef<string | null>(null);
  const [contentHeadings, setContentHeadings] = useState<Array<{
    label: string;
    href: string;
  }> | null>(null);

  useEffect(() => {
    if (
      !contentRef.current ||
      markdownSrcRef.current === markdown.compiledSource
    )
      return;

    markdownSrcRef.current = markdown.compiledSource;

    const headings = Array.from(
      contentRef.current.querySelectorAll<HTMLHeadingElement>(HEADING_SELECTOR)
    ).map((el) => {
      return {
        label: el.innerText,
        href: `#${headingToAnchorId(el as HTMLHeadingElement)}`,
      };
    });

    setContentHeadings(headings);
  }, [markdown]);

  return (
    <>
      <Head>
        <title>
          {seoTitlePrefix + (frontMatter["seo-title"] || frontMatter.title)}
        </title>
      </Head>
      <Grid
        templateColumns={{
          base: "100%",
          md: `${sidebarWidth} 1fr`,
          xl: `${sidebarWidth} auto ${sidebarWidth}`,
        }}
        flexGrow={{
          base: 0,
          md: 1,
        }}
      >
        <SidebarMenu items={sidebarItems} />
        <Box
          as="article"
          maxW="container.lg"
          py={8}
          pb={40}
          px={8}
          mx="auto"
          w="100%"
          overflow="auto"
          ref={contentRef}
        >
          <HStack justifyContent="flex-end">
            <Box
              w="100%"
              maxW={{
                base: "100%",
                sm: "250px",
              }}
            >
              <SearchField
                domain="documentation"
                suggestions={SEARCH_SUGGESTIONS}
              />
            </Box>
          </HStack>
          <Heading as="h1" size="2xl" mt={8} mb={16} fontWeight="medium">
            {frontMatter.title}
          </Heading>
          <MDXRenderer markdown={markdown} />
          <PrevNextButtons sidebarItems={sidebarItems} />
        </Box>
        {showOnThisPage && contentHeadings && contentHeadings.length > 0 && (
          <Box
            py="96px"
            pr={14}
            maxH="100vh"
            position="sticky"
            overflow="auto"
            top={NAV_HEIGHT}
          >
            {githubPath && (
              <Box textAlign="left" mb={5}>
                <Text
                  as="a"
                  color="#7F7F7F"
                  _hover={{
                    textDecoration: "underline",
                  }}
                  href={`https://github.com/iron-fish/website/tree/master/${githubPath}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Edit Page on Github
                </Text>
              </Box>
            )}
            <Text textTransform="uppercase" mb={5}>
              On This Page
            </Text>
            <VStack alignItems="flex-start" gap={0}>
              {contentHeadings.map((heading, i) => (
                <Text
                  as="a"
                  key={i}
                  href={heading.href}
                  color="#7f7f7f"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(heading.href);
                    if (target) {
                      smoothScrollToEl(target);
                    }
                  }}
                >
                  {heading.label}
                </Text>
              ))}
            </VStack>
          </Box>
        )}
      </Grid>
    </>
  );
}

function flattenSidebarItems(sidebarItems: SidebarItems): SidebarItem[] {
  return sidebarItems.flatMap((item) => {
    if ("items" in item) {
      return flattenSidebarItems(item.items);
    }

    return item;
  });
}

function PrevNextButtons({ sidebarItems }: { sidebarItems: SidebarItems }) {
  const router = useRouter();
  const isClient = useIsClient();

  const flattenedItems = useMemo(() => {
    return flattenSidebarItems(sidebarItems);
  }, [sidebarItems]);

  const { prevHref, nextHref } = useMemo(() => {
    const currentIndex = flattenedItems.findIndex(
      (item) => item.href === router.asPath
    );

    return {
      prevHref: flattenedItems[currentIndex - 1]?.href ?? null,
      nextHref: flattenedItems[currentIndex + 1]?.href ?? null,
    };
  }, [flattenedItems, router.asPath]);

  if (!isClient) return null;

  return (
    <HStack justifyContent="space-between" mt={20}>
      <ArrowButton
        size="sm"
        colorScheme="white"
        arrowStyle="left"
        {...(prevHref
          ? {
              as: Link,
              href: prevHref,
            }
          : { isDisabled: true })}
      >
        Prev
      </ArrowButton>
      <ArrowButton
        size="sm"
        colorScheme="white"
        {...(nextHref
          ? {
              as: Link,
              href: nextHref,
            }
          : { isDisabled: true })}
      >
        Next
      </ArrowButton>
    </HStack>
  );
}
