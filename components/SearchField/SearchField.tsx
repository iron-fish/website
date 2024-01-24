import { Box, BoxProps, useDisclosure } from "@chakra-ui/react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchModal, Domains, DOMAINS } from "./SearchModal/SearchModal";

type Props = BoxProps & {
  domain: Domains;
  suggestions?: Array<{
    heading: string;
    slug: string;
  }>;
};

export function SearchField({ domain, suggestions, ...rest }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...rest}>
      <SearchInput
        as="button"
        onClick={onOpen}
        placeholder={DOMAINS[domain].placeholder}
        _placeholder={{
          color: "#7F7F7F",
        }}
      />
      <SearchModal
        domain={domain}
        suggestions={suggestions}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}
