import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import {
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Link,
  Box,
  chakra,
  Divider,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";
import { MDXProvider as BaseMDXProvider } from "@mdx-js/react";
import { kebabCase } from "lodash-es";
import { Terminal } from "../../components/Terminal/Terminal";
import { FAQItem } from "../../components/FAQItem/FAQItem";
import { ReactNode, ComponentProps, useState, useCallback } from "react";
import { useSmoothScrollToHash } from "../../hooks/useSmoothScrollToHash";

export function headingToAnchorId(headingEl: HTMLHeadingElement) {
  return kebabCase(headingEl.innerText.toLowerCase());
}

function HeadingWithAnchor(props: ComponentProps<typeof Heading>) {
  const [headingId, setHeadingId] = useState("");
  const handleHeadingId = useCallback((ref: HTMLHeadingElement | null) => {
    ref?.innerText && setHeadingId(headingToAnchorId(ref));
  }, []);

  return (
    <Heading
      {...props}
      id={headingId}
      ref={handleHeadingId}
      fontWeight="normal"
      _hover={{
        'a[href^="#"]': {
          color: "blue",
        },
      }}
    >
      {props.children}&nbsp;
      {headingId && (
        <Link href={`#${headingId}`} color="transparent">
          #
        </Link>
      )}
    </Heading>
  );
}

const DEFAULT_TEXT_PROPS = {
  fontSize: "md",
  lineHeight: 1.6,
};

const rendererComponents: ComponentProps<typeof MDXRemote>["components"] = {
  h1: (props) => (
    <HeadingWithAnchor
      {...props}
      as="h1"
      fontSize="2xl"
      my="8"
      fontWeight="medium"
    />
  ),
  h2: (props) => (
    <HeadingWithAnchor {...props} as="h2" fontSize="3xl" mt="12" mb="6" />
  ),
  h3: (props) => (
    <HeadingWithAnchor {...props} as="h3" fontSize="2xl" mt="10" mb="6" />
  ),
  h4: (props) => (
    <HeadingWithAnchor {...props} as="h4" fontSize="xl" mt="8" mb="4" />
  ),
  h5: (props) => (
    <HeadingWithAnchor {...props} as="h5" fontSize="lg" mt="8" mb="4" />
  ),
  p: (props) => <Text {...props} mb="6" {...DEFAULT_TEXT_PROPS} />,
  ul: (props) => (
    <UnorderedList
      {...props}
      as="ul"
      spacing="2"
      mb="6"
      {...DEFAULT_TEXT_PROPS}
    />
  ),
  ol: (props) => (
    <OrderedList
      {...props}
      as="ol"
      spacing="2"
      mb="6"
      {...DEFAULT_TEXT_PROPS}
    />
  ),
  li: (props) => <ListItem {...props} as="li" {...DEFAULT_TEXT_PROPS} />,
  a: ({ href, children }) => {
    const isExternalLink =
      !href?.startsWith("/") &&
      !href?.startsWith("#") &&
      !href?.startsWith("mailto:");
    return (
      <Link
        as={href?.startsWith("/") ? NextLink : "a"}
        href={href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noreferrer" : undefined}
        fontWeight="medium"
        textDecoration="underline"
        // https://webaim.org/blog/wcag-2-0-and-link-colors/
        color="#3344dd"
        _visited={{ color: "#884488" }}
      >
        {children}
      </Link>
    );
  },
  pre: ({ children }) => {
    return (
      <Box borderRadius="lg" my={4} overflow="hidden">
        <chakra.pre whiteSpace="pre-wrap">{children}</chakra.pre>
      </Box>
    );
  },
  hr: () => <Divider my={16} />,
  table: (props) => (
    <Box overflow="auto">
      <Box as="table" {...props} {...DEFAULT_TEXT_PROPS} mb={8} />
    </Box>
  ),
};

function MDXRenderer({ markdown }: { markdown: MDXRemoteProps }) {
  useSmoothScrollToHash();
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
        />
      </Head>
      <MDXRemote {...markdown} components={rendererComponents} />
    </>
  );
}

const providerComponents = {
  Terminal,
  FAQItem,
  Img: (props: any) => <Image my={6} alt="" w="100%" {...props} />,
};

export function MDXProvider({ children }: { children: ReactNode }) {
  return (
    <BaseMDXProvider components={providerComponents}>
      {children}
    </BaseMDXProvider>
  );
}

MDXRenderer.Provider = MDXProvider;

export { MDXRenderer };
