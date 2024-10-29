import { Box, Text, Container, ArrowButton, Flex } from "@/lib/ui";
import { defineMessages, useIntl } from "react-intl";
import { CONSTANTS } from "../../shared/constants";

const messages = defineMessages({
  heading: {
    id: "ContactUs.heading",
    defaultMessage: "Want to say hello?",
  },
  emailLink: {
    id: "ContactUs.contact",
    defaultMessage: "Drop us a line",
  },
});

export function ContactUs() {
  const { formatMessage } = useIntl();
  return (
    <Box
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
      >
        <ArrowButton
          as="a"
          href={`mailto:${CONSTANTS.CONTACT_US_EMAIL}`}
          target="_blank"
          rel="noreferrer"
          size="sm"
          colorScheme="white"
        >
          {formatMessage(messages.emailLink)}
        </ArrowButton>
      </Flex>
    </Box>
  );
}
