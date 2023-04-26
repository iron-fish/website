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
import { MDXProvider as BaseMDXProvider } from "@mdx-js/react";
import { Terminal } from "../../components/Terminal/Terminal";
import { FAQItem } from "../../components/FAQItem/FAQItem";
import { ReactNode, ComponentProps, useState, useCallback } from "react";
import { kebabCase } from "lodash-es";
import { useSmoothScrollToHash } from "../../hooks/useSmoothScrollToHash";

function HeadingWithAnchor(props: ComponentProps<typeof Heading>) {
  const [headingId, setHeadingId] = useState("");
  const handleHeadingId = useCallback((ref: HTMLHeadingElement | null) => {
    ref?.innerText && setHeadingId(kebabCase(ref.innerText.toLowerCase()));
  }, []);

  return (
    <Heading
      {...props}
      ref={handleHeadingId}
      id={headingId}
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
    <HeadingWithAnchor {...props} fontSize="2xl" my="8" fontWeight="medium" />
  ),
  h2: (props) => <HeadingWithAnchor {...props} fontSize="3xl" mt="12" mb="6" />,
  h3: (props) => <HeadingWithAnchor {...props} fontSize="2xl" mt="12" mb="6" />,
  h4: (props) => <HeadingWithAnchor {...props} fontSize="xl" my="4" />,
  h5: (props) => <HeadingWithAnchor {...props} fontSize="lg" my="4" />,
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
    return (
      <Link
        as={href?.startsWith("/") ? NextLink : "a"}
        href={href}
        target={href?.startsWith("/") ? undefined : "_blank"}
        rel="noreferrer"
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
  return <MDXRemote {...markdown} components={rendererComponents} />;
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
