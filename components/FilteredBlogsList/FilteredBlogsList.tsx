import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  Text,
  LocalImage,
  Grid,
  GridItem,
  ShadowBox,
  AspectRatio,
  Button,
  Flex,
  ArrowButton,
  Filter,
  useFilterOptions,
} from "@/lib/ui";
import Image from "next/image";

const BLOG_CHUNK_SIZE = 6;

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Community Spotlights",
    value: "community",
  },
  {
    label: "Ecosystem Spotlights",
    value: "ecosystem",
  },
  {
    label: "Product Highlights",
    value: "product",
  },
];

export type BlogItem = {
  title: string;
  slug: string;
  date: string;
  image: string | null;
  id: number;
};

type Props = {
  blogItems: BlogItem[];
};

export function FilteredBlogsList({ blogItems }: Props) {
  const [blogChunksCount, setBlogChunksCount] = useState(1);
  const blogsToShow = blogChunksCount * BLOG_CHUNK_SIZE;
  const hasMore = blogItems.length > blogsToShow;
  const latestBlog = blogItems.at(0);

  return (
    <>
      <Filter
        options={filterOptions}
        selectedOption={filterOptions[0]}
        onChange={(option) => {
          console.log(option);
          // handleFilterChange(option);
          // replace(
          //   {
          //     query: {
          //       ...query,
          //       category: option.value,
          //     },
          //   },
          //   undefined,
          //   {
          //     shallow: true,
          //   }
          // );
        }}
        mb={16}
      />
      <Grid
        templateColumns={{
          base: "100%",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {blogItems.slice(0, blogsToShow).map((item) => {
          const imageSrc = item.image ?? "/images/blog/thumbnail-default.png";
          return (
            <GridItem key={item.id} display="flex">
              <ShadowBox
                shadowColor="white"
                borderWidth="2px"
                borderRadius="4px"
              >
                <AspectRatio ratio={465 / 309} borderBottom="1.5px solid black">
                  <Image alt="" src={imageSrc} fill />
                </AspectRatio>
                <Box p={8} pb={16}>
                  <Text textStyle="sm" mb={4}>
                    {item.date}
                  </Text>
                  <Text
                    as="h3"
                    textStyle="h4"
                    marginBottom={4}
                    minHeight="2.5em"
                  >
                    {item.title}
                  </Text>
                  <Button
                    as={Link}
                    href={`/learn/blog/${item.slug}`}
                    size="sm"
                    bg="white"
                    _hover={{
                      bg: "gray.200",
                    }}
                  >
                    Read Now
                  </Button>
                </Box>
              </ShadowBox>
            </GridItem>
          );
        })}
      </Grid>
      {hasMore && (
        <Flex justifyContent="center" mt={16}>
          <ArrowButton
            colorScheme="white"
            size="sm"
            onClick={() => setBlogChunksCount((prev) => prev + 1)}
          >
            Read Older Articles
          </ArrowButton>
        </Flex>
      )}
    </>
  );
}
