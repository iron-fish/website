import { Container, FAQItem, Text, Box } from "@/lib/ui";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  heading: {
    id: "foundationFAQ.heading",
    defaultMessage: "Foundation FAQ",
  },
  applicationTitle: {
    id: "foundationFAQ.applicationTitle",
    defaultMessage: "What are the requirements to apply for a grant?",
  },
  applicationDescription: {
    id: "foundationFAQ.applicationDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  payoutCurrencyTitle: {
    id: "foundationFAQ.payoutCurrencyTitle",
    defaultMessage:
      "Can I ask the grant to be paid out in a stablecoin or IRON?",
  },
  payoutCurrencyDescription: {
    id: "foundationFAQ.payoutCurrencyDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  grantRecipientsTitle: {
    id: "foundationFAQ.grantRecipientsTitle",
    defaultMessage: "Who determines grant recipients?",
  },
  grantRecipientsDescription: {
    id: "foundationFAQ.grantRecipientsDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  whereToApplyTitle: {
    id: "foundationFAQ.whereToApplyTitle",
    defaultMessage: "Where can I apply for a grant?",
  },
  whereToApplyDescription: {
    id: "foundationFAQ.whereToApplyDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
});

const sections = [
  {
    title: messages.applicationTitle,
    description: messages.applicationDescription,
  },
  {
    title: messages.payoutCurrencyTitle,
    description: messages.payoutCurrencyDescription,
  },
  {
    title: messages.grantRecipientsTitle,
    description: messages.grantRecipientsDescription,
  },
  {
    title: messages.whereToApplyTitle,
    description: messages.whereToApplyDescription,
  },
];

export function FoundationFAQ() {
  const { formatMessage } = useIntl();
  return (
    <Box borderBottom="1.5px solid black">
      <Container w="100%" maxW="container.xl" py="150px">
        <Text as="h2" textStyle="h3" mb={12} textAlign="center">
          {formatMessage(messages.heading)}
        </Text>
        {sections.map(({ title, description }, i) => (
          <FAQItem title={formatMessage(title)} key={i}>
            {formatMessage(description)}
          </FAQItem>
        ))}
      </Container>
    </Box>
  );
}
