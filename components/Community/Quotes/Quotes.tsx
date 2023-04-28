import {
  Box,
  Button,
  Container,
  FancyArrowRight,
  useBreakpointValue,
  Text,
  HStack,
  Flex,
} from "@/lib/ui";
import { useCallback, useState } from "react";

const QUOTES = [
  {
    quote:
      "Keeping my financial information confidential is important .Cryptocurrencies like Iron Fish give me peace of mind knowing that my transactions are secure and my privacy is protected.",
    author: "Anonymous",
    title: "Iron Fish Community Member",
  },
  {
    quote:
      "I value my financial privacy and want to ensure that my personal information is not shared with unauthorized parties - Iron Fish keeps my information from being compromised",
    author: "Anonymous",
    title: "Iron Fish Community Member",
  },
  {
    quote: `As a cryptocurrency investor, I understand the risks associated with public ledgers that reveal transaction details. I've now found the anonymity that should be the standard`,
    author: "Anonymous",
    title: "Iron Fish Community Member",
  },
  {
    quote: `As a privacy advocate, I believe in the fundamental right to financial privacy. Iron Fish ensure that individuals can maintain control over their financial information.`,
    author: "Anonymous",
    title: "Iron Fish Community Member",
  },
];

// A react component that takes an array of quotes and cycles through them, with forward and back buttons

export function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const buttonSize = useBreakpointValue({ base: "48px", md: "67px" });

  const onNextClick = useCallback(() => {
    setQuoteIndex((index) => (index + 1) % QUOTES.length);
  }, []);

  const onBackClick = useCallback(() => {
    setQuoteIndex((index) => (index - 1 + QUOTES.length) % QUOTES.length);
  }, []);

  return (
    <Box bg="green.500" borderY="1.5px solid black">
      <Container
        maxW="container.2xl"
        py={{
          base: "4rem",
          md: "8rem",
          lg: "9rem",
        }}
      >
        <Box>
          <Text textStyle="h5" mb={8}>
            &ldquo;{QUOTES[quoteIndex].quote}&rdquo;
          </Text>
          <Text textStyle="lg">{QUOTES[quoteIndex].author}</Text>
          <Text textStyle="md">{QUOTES[quoteIndex].title}</Text>
        </Box>
        <Flex mt={16} justifyContent="center">
          <Button
            height={buttonSize}
            width={buttonSize}
            minWidth={buttonSize}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            p={0}
            onClick={onBackClick}
          >
            <Box position="absolute" transform="rotate(180deg)">
              <FancyArrowRight />
            </Box>
          </Button>
          <HStack
            mx={{
              base: 6,
              md: 10,
            }}
            gap={2}
          >
            {Array.from({ length: QUOTES.length }).map((_, index) => (
              <Indicator key={index} active={index === quoteIndex} />
            ))}
          </HStack>
          <Button
            height={buttonSize}
            width={buttonSize}
            minWidth={buttonSize}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            p={0}
            onClick={onNextClick}
          >
            <Box position="absolute">
              <FancyArrowRight />
            </Box>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

function Indicator({ active }: { active?: boolean }) {
  return (
    <Box
      border="1.5px solid black"
      borderRadius="full"
      height="24px"
      width="24px"
      bg={active ? "black" : "transparent"}
    />
  );
}
