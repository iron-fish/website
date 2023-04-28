import {
  Text,
  HStack,
  Button,
  useDisclosure,
  Collapse,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FancyArrowRight } from "../../icons";

type Props = {
  title: string;
  children: ReactNode;
};

export function FAQItem({ children, title }: Props) {
  const { isOpen, onToggle } = useDisclosure();
  const buttonSize = useBreakpointValue({ base: "48px", md: "67px" });
  const buttonScale = useBreakpointValue({
    base: "0.8",
    md: "1",
  });

  return (
    <Box borderWidth="1.5px 0 1.5px 0" borderColor="black" my="-1.5px">
      <HStack py={6} as="button" onClick={onToggle}>
        <Button
          as="div"
          height={buttonSize}
          width={buttonSize}
          minWidth={buttonSize}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={{
            base: 6,
            md: 10,
          }}
          position="relative"
          p={0}
        >
          <Box
            transition="transform 0.2s ease-in-out"
            transform={`rotate(${
              isOpen ? "-45deg" : "45deg"
            }) scale(${buttonScale})`}
            position="absolute"
          >
            <FancyArrowRight />
          </Box>
        </Button>
        <Text textAlign="left" textStyle="lg">
          {title}
        </Text>
      </HStack>
      <Collapse in={isOpen}>
        <Box
          textStyle="md"
          pb={6}
          ml={{
            base: 0,
            lg: "118px",
          }}
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
}
