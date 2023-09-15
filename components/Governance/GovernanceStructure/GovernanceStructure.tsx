import {
  Box,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox,
} from "@/lib/ui";
import { ReactNode } from "react";
import { useIntl, defineMessages } from "react-intl";
import { Discussion } from "./icons/Discussion";
import { Feedback } from "./icons/Feedback";
import { FIP } from "./icons/FIP";
import { Merge } from "./icons/Merge";
import { Review } from "./icons/Review";

const messages = defineMessages({
  mainHeading: {
    id: "governanceStructure.mainHeading",
    defaultMessage: "Governance Structure",
  },
  mainDescription: {
    id: "governanceStructure.mainDescription",
    defaultMessage:
      "Anyone can submit a proposal. A proposal is a request to introduce a change to the core Iron Fish protocol. Currently, the interim process for proposals to be accepted is:",
  },
  discussionHeading: {
    id: "governanceStructure.discussionHeading",
    defaultMessage: "Start a discussion",
  },
  discussionDescription: {
    id: "governanceStructure.discussionDescription",
    defaultMessage:
      "Start a discussion about your idea on Discourse. Be as specific as possible, and make your claim for why this proposal is important. ",
  },
  feedbackHeading: {
    id: "governanceStructure.feedbackHeading",
    defaultMessage: "Get feedback",
  },
  feedbackDescription: {
    id: "governanceStructure.feedbackDescription",
    defaultMessage:
      "Get feedback from the community, especially from the core Iron Fish node implementation contributors.",
  },
  fipHeading: {
    id: "governanceStructure.fipHeading",
    defaultMessage: "Fish Improvement Proposal",
  },
  fipDescription: {
    id: "governanceStructure.fipDescription",
    defaultMessage:
      "Once discussions converge, draft a FIP (Fish Improvement Proposal) and submit a clear, well-defined Pull Request with corresponding code contributions as defined by your proposal (either directly through your efforts, or from other developers in the community by championing your idea).",
  },
  reviewHeading: {
    id: "governanceStructure.reviewHeading",
    defaultMessage: "Review",
  },
  reviewDescription: {
    id: "governanceStructure.reviewDescription",
    defaultMessage:
      "Ask those who have merge permissions to review your PR, and resolve any comments.",
  },
  mergingHeading: {
    id: "governanceStructure.mergingHeading",
    defaultMessage: "Merging",
  },
  mergingDescription: {
    id: "governanceStructure.mergingDescription",
    defaultMessage:
      "Once the PR gets merged, that FIP is marked as accepted and merged into the FIP repository.",
  },
});

const sections = [
  {
    heading: messages.discussionHeading,
    description: messages.discussionDescription,
    image: <Discussion />,
  },
  {
    heading: messages.feedbackHeading,
    description: messages.feedbackDescription,
    image: <Feedback />,
  },
  {
    heading: messages.fipHeading,
    description: messages.fipDescription,
    image: <FIP />,
  },
  {
    heading: messages.reviewHeading,
    description: messages.reviewDescription,
    image: <Review />,
  },
  {
    heading: messages.mergingHeading,
    description: messages.mergingDescription,
    image: <Merge />,
  },
];

export function GovernanceStructure() {
  const { formatMessage } = useIntl();

  return (
    <Box
      borderTop="1.5px solid black"
      borderBottom="1.5px solid black"
      bg="green.400"
      pl={{
        base: 0,
        md: 8,
        lg: 3,
        xl: 20,
      }}
    >
      <Container
        maxW="container.2xl"
        py={{
          base: "4rem",
          md: "8rem",
          lg: "9rem",
        }}
      >
        <StickySideBySideView>
          <StickySideBySideView.Item>
            <Text textStyle="h3" mb={8}>
              {formatMessage(messages.mainHeading)}
            </Text>
            <Text textStyle="lg" maxW="37ch">
              {formatMessage(messages.mainDescription)}
            </Text>
          </StickySideBySideView.Item>
          <StickySideBySideView.Item>
            {sections.map((section, i, arr) => (
              <Section
                key={i}
                heading={formatMessage(section.heading)}
                description={formatMessage(section.description)}
                image={section.image}
                number={i + 1}
                totalItems={arr.length}
              />
            ))}
          </StickySideBySideView.Item>
        </StickySideBySideView>
      </Container>
    </Box>
  );
}

type SectionProps = {
  heading: string;
  description: string;
  image: ReactNode;
  number: number;
  totalItems: number;
};

function Section({
  heading,
  description,
  image,
  number,
  totalItems,
}: SectionProps) {
  return (
    <Box mb={8}>
      <Box
        maxW={{
          base: "100%",
          md: "450px",
        }}
      >
        <ShadowBox p={12} shadowColor="green.400">
          <Box
            borderRadius="full"
            bg="green.400"
            display="inline-block"
            px={3}
            py={1}
            mb={32}
          >
            <Text fontSize="xs" color="black">
              {number} / {totalItems}
            </Text>
          </Box>
          <Box mb={10}>{image}</Box>
          <Text textStyle="h4" mb={5}>
            {heading}
          </Text>
          <Text>{description}</Text>
        </ShadowBox>
      </Box>
    </Box>
  );
}
