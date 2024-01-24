import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { TextHighlighter } from "@/components/TextHighlighter/TextHighlighter";
import { MdClose } from "react-icons/md";
import { useDebounce } from "usehooks-ts";
import { SearchInput } from "../SearchInput/SearchInput";
import { SearchSection } from "../SearchSection/SearchSection";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { useRouter } from "next/router";

export const DOMAINS = {
  documentation: {
    endpoint: "/api/search/documentation",
    placeholder: "Search the docs",
  },
  blog: {
    endpoint: "/api/search/blog",
    placeholder: "Search the blog",
  },
};

export type Domains = keyof typeof DOMAINS;

function fetchSearchResults(domain: Domains, query: string) {
  const endpoint = DOMAINS[domain].endpoint;
  return fetch(`${endpoint}?q=${encodeURIComponent(query)}`).then((res) =>
    res.json()
  );
}

type Props = {
  domain: Domains;
  suggestions?: Array<{
    heading: string;
    slug: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
};

export function SearchModal({ domain, suggestions, isOpen, onClose }: Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce<string>(searchQuery.toLowerCase(), 1000);

  const { data, isLoading } = useQuery({
    queryKey: ["SearchField", domain, debouncedQuery],
    queryFn: () => fetchSearchResults(domain, searchQuery),
    enabled: debouncedQuery.length > 0,
  });

  const handleClose = useCallback(() => {
    onClose();
    setSearchQuery("");
  }, [onClose]);

  const hasQuery = debouncedQuery.length > 0;
  const showResults = hasQuery && !isLoading && data?.length > 0;
  const showNoReultsFound = hasQuery && !isLoading && data?.length === 0;
  const showSuggested = !!suggestions && (!hasQuery || showNoReultsFound);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent w="calc(100% - 1rem)" maxW="650px">
        <ModalBody px={6} pt={4} pb={hasQuery || showSuggested ? 6 : 4}>
          <HStack gap={6} mb={hasQuery || showSuggested ? 8 : 0}>
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Box
              as="button"
              aria-label="Close modal"
              cursor="pointer"
              onClick={handleClose}
            >
              <MdClose size="1.8rem" color="#7F7F7F" />
            </Box>
          </HStack>
          {hasQuery && (
            <SearchSection heading="Search Results">
              {isLoading && (
                <HStack justifyContent="center">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    color="gray.300"
                    size="xl"
                  />
                </HStack>
              )}
              {showResults &&
                data?.map((result: any, i: number) => {
                  return (
                    <SearchSection.Item
                      key={i}
                      icon={<MdOutlineInsertDriveFile />}
                      onClick={() => {
                        handleClose();
                        router.push(result.slug);
                      }}
                    >
                      <TextHighlighter
                        content={result.title}
                        highlights={result.highlights.title ?? []}
                        fontWeight="bold"
                        mb={1}
                      />
                      <TextHighlighter
                        skipToHighlight
                        content={result.body}
                        highlights={result.highlights.body ?? []}
                      />
                    </SearchSection.Item>
                  );
                })}
              {showNoReultsFound && (
                <Text textAlign="center" py={4}>
                  No results found
                </Text>
              )}
            </SearchSection>
          )}
          {showSuggested && (
            <SearchSection heading="Suggested">
              {suggestions.map((suggestion, i) => (
                <SearchSection.Item
                  key={i}
                  icon={<MdOutlineInsertDriveFile />}
                  onClick={() => {
                    handleClose();
                    router.push(suggestion.slug);
                  }}
                >
                  <Text fontWeight="bold">{suggestion.heading}</Text>
                </SearchSection.Item>
              ))}
            </SearchSection>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
