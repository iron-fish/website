import { useCallback, useState } from "react";
import { StackProps, Box, HStack, Text } from "@chakra-ui/react";
import { ShadowBox } from "../ShadowBox/ShadowBox";

type Option = {
  label: string;
  value: string;
};

export function useFilterOptions(options: Array<Option>) {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleFilterChange = useCallback((option: Option) => {
    setSelectedOption(option);
  }, []);

  return { options, selectedOption, handleFilterChange };
}

type Props = Omit<StackProps, "onChange"> & {
  options: Array<Option>;
  selectedOption: Option;
  onChange: (option: Option) => void;
};

export function Filter({ options, selectedOption, onChange, ...rest }: Props) {
  return (
    <HStack justifyContent="center" {...rest}>
      {options.map((option) => {
        const selected = option.value === selectedOption.value;
        return (
          <ShadowBox
            onClick={() => onChange(option)}
            key={option.value}
            shadowColor="white"
            borderRadius={0}
            borderWidth="1px"
            width="auto"
            cursor="pointer"
          >
            <Box
              px={5}
              py={3}
              bg={selected ? "black" : "white"}
              _hover={{ bg: selected ? "black" : "gray.100" }}
              _focus={{ bg: selected ? "black" : "gray.100" }}
            >
              <Text color={selected ? "white" : undefined}>{option.label}</Text>
            </Box>
          </ShadowBox>
        );
      })}
    </HStack>
  );
}
