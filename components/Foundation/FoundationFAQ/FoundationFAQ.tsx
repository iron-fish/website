import { Container, FAQItem, Text, Box, Link } from "@/lib/ui";
import { GRANTS_FORM_URL } from "@/shared/constants";
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
      "To be eligible for a grant, you must provide KYC information. All grants are subject to the laws of the recipient's governing country.",
  },
  payoutCurrencyTitle: {
    id: "foundationFAQ.payoutCurrencyTitle",
    defaultMessage:
      "Can I ask the grant to be paid out in a stablecoin or IRON?",
  },
  payoutCurrencyDescription: {
    id: "foundationFAQ.payoutCurrencyDescription",
    defaultMessage: "Grants can be made in IRON, USD, or stablecoins.",
  },
  grantRecipientsTitle: {
    id: "foundationFAQ.grantRecipientsTitle",
    defaultMessage: "Who determines grant recipients?",
  },
  grantRecipientsDescription: {
    id: "foundationFAQ.grantRecipientsDescription",
    defaultMessage:
      "Grant acceptance is at the sole discretion of the Foundation.",
  },
  whereToApplyTitle: {
    id: "foundationFAQ.whereToApplyTitle",
    defaultMessage: "Where can I apply for a grant?",
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
    description: GRANTS_FORM_URL,
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
            {typeof description === "string" ? (
              <Link href={description} isExternal>
                {description}
              </Link>
            ) : (
              formatMessage(description)
            )}
          </FAQItem>
        ))}
      </Container>
    </Box>
  );
}
