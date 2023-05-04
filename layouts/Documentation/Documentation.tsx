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
} from "@/lib/ui";
import { smoothScrollToEl } from "@/lib/ui/src/hooks/useSmoothScrollToHash";
import Head from "next/head";
import { ComponentProps, useEffect, useRef, useState } from "react";

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
          py={{
            base: 8,
            md: 24,
          }}
          pb={40}
          px={8}
          mx="auto"
          w="100%"
          overflow="auto"
          ref={contentRef}
        >
          <Heading as="h1" size="2xl" mt={8} mb={16} fontWeight="medium">
            {frontMatter.title}
          </Heading>
          <MDXRenderer markdown={markdown} />
          {githubPath && (
            <Box textAlign="center" mt="16">
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
