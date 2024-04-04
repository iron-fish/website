import {
  VStack,
  Text,
  Flex,
  AspectRatio,
  Container,
  ShadowBox,
} from "@/lib/ui";
import { Heading, Box, MDXRenderer } from "@/lib/ui";
import Head from "next/head";
import Image from "next/image";
import { ComponentProps } from "react";
import { authors } from "../../content/authors/authors";

type Props = {
  title: string;
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
  author?: string;
  image?: string;
  description?: string;
  seoTitle?: string;
  seoTitlePrefix?: string;
  seoTitlePostfix?: string;
};

function getAuthorDetails(author: string) {
  return author in authors ? authors[author] : null;
}

export function BlogLayout({
  author,
  title,
  markdown,
  image,
  description,
  seoTitle,
  seoTitlePrefix = "",
  seoTitlePostfix = "",
}: Props) {
  const fullTitle = seoTitlePrefix + (seoTitle || title) + seoTitlePostfix;
  const imageUrl = image && new URL(image, process.env.NEXT_PUBLIC_ORIGIN);
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        {description && (
          <>
            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
          </>
        )}
        {imageUrl && (
          <>
            <meta name="og:image" content={imageUrl.href} />
          </>
        )}
      </Head>
      <Box
        as="article"
        pt={{
          base: 8,
          md: 24,
        }}
        pb={{
          base: "100px",
          md: "200px",
        }}
        mx="auto"
        w="100%"
      >
        <Container
          maxW="container.sm"
          px={{
            base: 3,
            md: 0,
          }}
        >
          <Heading
            as="h1"
            size="2xl"
            my="8"
            fontWeight="medium"
            mb={author ? 8 : 16}
          >
            {title}
          </Heading>
          {author && (
            <Box mb={14}>
              <AuthorDetails author={author} />
            </Box>
          )}
        </Container>
        {image && (
          <Container maxW="container.lg" px={0} mb={24}>
            <AspectRatio ratio={1064 / 708}>
              <Image alt="" src={image} fill />
            </AspectRatio>
          </Container>
        )}
        <Container
          maxW="container.sm"
          px={{
            base: 3,
            md: 0,
          }}
        >
          <Box mb={16}>
            <MDXRenderer markdown={markdown} />
          </Box>
          {author && <AuthorDetails author={author} variant="lg" />}
        </Container>
      </Box>
    </>
  );
}

function AuthorDetails({
  author,
  variant = "sm",
}: {
  author: string;
  variant?: "sm" | "lg";
}) {
  const authorDetails = getAuthorDetails(author);

  if (!authorDetails) return null;

  if (variant === "sm") {
    return (
      <Flex>
        <Box
          height="60px"
          width="60px"
          minHeight="60px"
          minWidth="60px"
          borderRadius="full"
          position="relative"
          mr={4}
        >
          <Image alt="" src={authorDetails.image_url} fill />
        </Box>
        <VStack alignItems="flex-start" gap={0}>
          <Text textStyle="h4">{authorDetails.name}</Text>
          <Text textStyle="sm" color="#7f7f7f">
            {authorDetails.title}
          </Text>
        </VStack>
      </Flex>
    );
  }

  return (
    <ShadowBox
      p={{
        base: "48px 24px",
        md: 12,
      }}
      offset="10px"
      borderRadius={4}
    >
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box
          height="60px"
          width="60px"
          minHeight="60px"
          minWidth="60px"
          borderRadius="full"
          position="relative"
          mr={4}
          mb={{
            base: 6,
            md: 0,
          }}
        >
          <Image alt="" src={authorDetails.image_url} fill />
        </Box>
        <VStack alignItems="flex-start" gap={0}>
          <Text textStyle="h4">{authorDetails.name}</Text>
          <Text textStyle="sm" color="#7f7f7f">
            {authorDetails.title}
          </Text>
          <Text textStyle="sm" color="#7f7f7f">
            {authorDetails.description}
          </Text>
        </VStack>
      </Flex>
    </ShadowBox>
  );
}
