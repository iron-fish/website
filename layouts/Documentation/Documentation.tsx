import {
  Heading,
  Box,
  Grid,
  SidebarMenu,
  MDXRenderer,
  useBreakpointValue,
} from '@/lib/ui';
import { ComponentProps } from 'react';

type SidebarItems = Array<
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      items: Array<{
        title: string;
        href: string;
      }>;
    }
>;

type Props = {
  slug: string;
  frontMatter: {
    title?: string;
    description?: string;
  };
  markdown: ComponentProps<typeof MDXRenderer>['markdown'];
  sidebarItems: SidebarItems;
  sidebarWidth?: string;
};

export function DocumentationLayout({
  frontMatter,
  markdown,
  sidebarItems,
  sidebarWidth = '235px',
}: Props) {
  const showOnThisPage = useBreakpointValue({
    base: false,
    xl: true,
  });
  return (
    <Grid
      templateColumns={{
        base: '100%',
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
      </Box>
      {/* @todo: Build "On this page" component */}
      {showOnThisPage && <Box height="200px" />}
    </Grid>
  );
}
