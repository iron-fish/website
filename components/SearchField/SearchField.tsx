import { Box, BoxProps, useDisclosure } from "@chakra-ui/react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchModal, Domains } from "./SearchModal/SearchModal";

type Props = BoxProps & {
  domain: Domains;
};

export function SearchField({ domain, ...rest }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...rest}>
      <SearchInput
        as="button"
        onClick={onOpen}
        _placeholder={{
          color: "#7F7F7F",
        }}
      />
      <SearchModal domain={domain} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
