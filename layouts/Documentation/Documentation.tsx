import {
  Heading,
  Box,
  Grid,
  SidebarMenu,
  MDXRenderer,
  useBreakpointValue,
  Text,
  SidebarItems,
} from "@/lib/ui";
import { ComponentProps } from "react";

type Props = {
  frontMatter: {
    title?: string;
    description?: string;
  };
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
  sidebarItems: SidebarItems;
  sidebarWidth?: string;
  githubPath?: string;
};

export function DocumentationLayout({
  frontMatter,
  markdown,
  sidebarItems,
  sidebarWidth = "250px",
  githubPath,
}: Props) {
  const showOnThisPage = useBreakpointValue({
    base: false,
    xl: true,
  });
  return (
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
      {/* @todo: Build "On this page" component */}
      {showOnThisPage && <Box height="200px" />}
    </Grid>
  );
}
