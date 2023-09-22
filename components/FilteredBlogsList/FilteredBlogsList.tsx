import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Box,
  Text,
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
import { useRouter } from "next/router";

const BLOG_CHUNK_SIZE = 6;

const filterOptionsMap = {
  all: {
    label: "All",
    value: "all",
  },
  media: {
    label: "Media",
    value: "media",
  },
  "community-highlight": {
    label: "Community Spotlights",
    value: "community-highlight",
  },
  "ecosystem-spotlight": {
    label: "Ecosystem Spotlights",
    value: "ecosystem-spotlight",
  },
  "product-highlight": {
    label: "Product Highlights",
    value: "product-highlight",
  },
};

const filterOptions = Object.values(filterOptionsMap);

export type BlogItem = {
  title: string;
  href: string;
  date: string;
  image: string | null;
  tags?: string[];
};

type Props = {
  blogItems: BlogItem[];
};

export function FilteredBlogsList({ blogItems }: Props) {
  const { query, replace } = useRouter();
  const [blogChunksCount, setBlogChunksCount] = useState(1);

  const { options, handleFilterChange } = useFilterOptions(filterOptions);

  const blogsToShow = blogChunksCount * BLOG_CHUNK_SIZE;

  const selectedOption = useMemo(() => {
    if (!query.category) return filterOptions[0];
    if (typeof query.category !== "string") return filterOptions[0];
    if (!(query.category in filterOptionsMap)) return filterOptions[0];
    return filterOptionsMap[query.category as keyof typeof filterOptionsMap];
  }, [query.category]);

  const filteredItems = useMemo(() => {
    return blogItems.filter((item) => {
      return selectedOption.value === "all"
        ? true
        : item.tags?.includes(selectedOption.value);
    });
  }, [blogItems, selectedOption.value]);

  return (
    <>
      <Filter
        options={options}
        selectedOption={selectedOption}
        onChange={(option) => {
          handleFilterChange(option);
          setBlogChunksCount(1);
          replace(
            {
              query: {
                ...query,
                category: option.value,
              },
            },
            undefined,
            {
              shallow: true,
            }
          );
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
        {filteredItems.slice(0, blogsToShow).map((item) => {
          const imageSrc = item.image ?? "/images/blog/thumbnail-default.png";
          const isInternal = item.href.startsWith("/");
          return (
            <GridItem key={item.href} display="flex">
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
                    as={isInternal ? Link : "a"}
                    href={item.href}
                    size="sm"
                    bg="white"
                    _hover={{
                      bg: "gray.200",
                    }}
                    {...(!isInternal && {
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                  >
                    Read Now
                  </Button>
                </Box>
              </ShadowBox>
            </GridItem>
          );
        })}
      </Grid>
      {filteredItems.length > blogsToShow && (
        <Flex justifyContent="center" mt={16}>
          <ArrowButton
            colorScheme="white"
            size="sm"
            onClick={() => setBlogChunksCount((prev) => prev + 1)}
          >
            Load More
          </ArrowButton>
        </Flex>
      )}
    </>
  );
}
