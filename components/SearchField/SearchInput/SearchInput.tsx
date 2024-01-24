import { CiSearch } from "react-icons/ci";
import {
  Input,
  InputProps,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

type Props = {
  as?: "input" | "button";
} & Omit<InputProps, "as">;

export function SearchInput({ as, ...rest }: Props) {
  const isButton = as === "button";
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <CiSearch />
      </InputLeftElement>
      <Input
        role={isButton ? "button" : undefined}
        readOnly={isButton}
        type={isButton ? undefined : "text"}
        fontSize="sm"
        borderColor="black"
        borderRadius={4}
        _hover={{
          borderColor: "black",
          outline: "none",
        }}
        _focusVisible={{
          borderColor: "black",
          outline: "none",
        }}
        {...rest}
      />
    </InputGroup>
  );
}
