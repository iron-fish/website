import { Container, FAQItem, Text, Box } from "@/lib/ui";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  heading: {
    id: "governanceFaq.heading",
    defaultMessage: "Governance FAQ",
  },
  mergeTitle: {
    id: "governanceFaq.mergeTitle",
    defaultMessage: "Who has merge permissions?",
  },
  mergeDescription: {
    id: "governanceFaq.mergeDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  governanceStructureTitle: {
    id: "governanceFaq.governanceStructureTitle",
    defaultMessage: "Where can I discuss governance structure proposals?",
  },
  governanceStructureDescription: {
    id: "governanceFaq.governanceStructureDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  namingConventionTitle: {
    id: "governanceFaq.namingConventionTitle",
    defaultMessage: "What is the naming convention for proposals?",
  },
  namingConventionDescription: {
    id: "governanceFaq.namingConventionDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  deadlineTitle: {
    id: "governanceFaq.deadlineTitle",
    defaultMessage: "When is the proposal deadline?",
  },
  deadlineDescription: {
    id: "governanceFaq.deadlineDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  reviewProcessLengthTitle: {
    id: "governanceFaq.reviewProcessLengthTitle",
    defaultMessage: "How long is the review process?",
  },
  reviewProcessLengthDescription: {
    id: "governanceFaq.reviewProcessLengthDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
  grantApplicationTitle: {
    id: "governanceFaq.grantApplicationTitle",
    defaultMessage:
      "Where can I apply for a grant to execute an approved proposal?",
  },
  grantApplicationDescription: {
    id: "governanceFaq.grantApplicationDescription",
    defaultMessage:
      "Quam diu etiam furor iste tuus nos eludet? Me non paenitet nullum festiviorem excogitasse ad hoc. Etiam habebis sem dicantur magna mollis euismod.",
  },
});

const sections = [
  {
    title: messages.mergeTitle,
    description: messages.mergeDescription,
  },
  {
    title: messages.governanceStructureTitle,
    description: messages.governanceStructureDescription,
  },
  {
    title: messages.namingConventionTitle,
    description: messages.namingConventionDescription,
  },
  {
    title: messages.deadlineTitle,
    description: messages.deadlineDescription,
  },
  {
    title: messages.reviewProcessLengthTitle,
    description: messages.reviewProcessLengthDescription,
  },
  {
    title: messages.grantApplicationTitle,
    description: messages.grantApplicationDescription,
  },
];

export function GovernanceFAQ() {
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
