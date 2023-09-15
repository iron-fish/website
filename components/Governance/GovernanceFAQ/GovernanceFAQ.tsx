import { Container, FAQItem, Text, Box } from "@/lib/ui";
import { Link } from "@chakra-ui/next-js";
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
      "In our eyes, the ultimate governance is merge permissions into the Iron Fish core node implementation repository. Currently, merge permissions are reserved for IF Labs engineers and the Iron Fish Foundation.",
  },
  governanceStructureTitle: {
    id: "governanceFaq.governanceStructureTitle",
    defaultMessage: "Where can I discuss governance structure proposals?",
  },
  governanceStructureDescription: {
    id: "governanceFaq.governanceStructureDescription",
    defaultMessage:
      "All submissions should come through the Discourse forum under the Governance section.",
  },
  namingConventionTitle: {
    id: "governanceFaq.namingConventionTitle",
    defaultMessage: "What is the naming convention for proposals?",
  },
  namingConventionDescription: {
    id: "governanceFaq.namingConventionDescription",
    defaultMessage: "[Proposal] Username-Governance-Proposal",
  },
  deadlineTitle: {
    id: "governanceFaq.deadlineTitle",
    defaultMessage: "When is the proposal deadline?",
  },
  deadlineDescription: {
    id: "governanceFaq.deadlineDescription",
    defaultMessage:
      "All proposals should be submitted by end of day on October 1, 2023.",
  },
  reviewProcessLengthTitle: {
    id: "governanceFaq.reviewProcessLengthTitle",
    defaultMessage: "How long is the review process?",
  },
  reviewProcessLengthDescription: {
    id: "governanceFaq.reviewProcessLengthDescription",
    defaultMessage:
      "From October 1–31, 2023, the Foundation will review all submitted proposals. During this process, we may suggest amendments or have questions, so please keep an eye out for communication from us.",
  },
  grantApplicationTitle: {
    id: "governanceFaq.grantApplicationTitle",
    defaultMessage:
      "Where can I apply for a grant to execute an approved proposal?",
  },
  grantApplicationDescription: {
    id: "governanceFaq.grantApplicationDescription",
    defaultMessage:
      "Grants are determined by the Iron Fish Foundation. To learn more, visit the <foundationLink>foundation page</foundationLink>.",
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

function FormatFoundationLink(value: unknown) {
  if (!Array.isArray(value)) return null;

  return (
    <Link textDecoration="underline" href="/community/foundation">
      {value}
    </Link>
  );
}

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
            {formatMessage(description, {
              foundationLink: FormatFoundationLink,
            })}
          </FAQItem>
        ))}
      </Container>
    </Box>
  );
}
