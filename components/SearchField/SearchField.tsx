import { useDisclosure } from "@chakra-ui/react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchModal } from "./SearchModal/SearchModal";

export function SearchField() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SearchInput
        as="button"
        onClick={onOpen}
        _placeholder={{
          color: "#7F7F7F",
        }}
      />
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
