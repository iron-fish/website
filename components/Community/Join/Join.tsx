import { Box, Text, Container, ArrowButton, Flex } from "@/lib/ui";
import Link from "next/link";
import { defineMessages, useIntl } from "react-intl";
import { CONSTANTS } from "../../../shared/constants";

const messages = defineMessages({
  heading: {
    id: "joinCommunity.heading",
    defaultMessage: "Join Our Diverse Community",
  },
});

export function Join() {
  const { formatMessage } = useIntl();
  return (
    <Box
      borderTop="1.5px solid black"
      bg="green.500"
      py={{
        base: 24,
        lg: 32,
        xl: "150px",
      }}
      px={{
        base: 4,
      }}
    >
      <Container
        maxW="80ch"
        mb={8}
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <Text as="h2" textStyle="h3" mb={8}>
          {formatMessage(messages.heading)}
        </Text>
      </Container>
      <Flex
        alignItems={{
          base: "stretch",
          sm: "center",
        }}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
        justifyContent="center"
        gap={{
          base: 6,
          sm: 8,
        }}
      >
        <ArrowButton
          as="a"
          href={CONSTANTS.SOCIAL_LINKS.discord}
          target="_blank"
          rel="noreferrer"
          size="sm"
          colorScheme="white"
        >
          Dive into Discord
        </ArrowButton>
        <ArrowButton
          as={Link}
          href="/learn/blog?category=community-highlight"
          size="sm"
          colorScheme="white"
        >
          Community Contributions
        </ArrowButton>
      </Flex>
    </Box>
  );
}
