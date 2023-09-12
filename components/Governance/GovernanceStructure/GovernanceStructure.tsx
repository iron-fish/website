import {
  Box,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox,
} from "@/lib/ui";
import { ReactNode } from "react";
import { Decentralized } from "./icons/Decentralized";
import { Handshake } from "./icons/Handdhake";
import { Lock } from "./icons/Lock";

const sections = [
  {
    heading: "Privacy without compromise",
    description:
      "Iron Fish is built from the ground up with zk-SNARK technology. Integrating encryption solutions at the foundation of our protocol delivers maximal security across the platform.",
    image: <Lock />,
  },
  {
    heading: "Your finance, truly decentralized",
    description:
      "Powered by a global network of miners and nodes, Iron Fish is a censorship resistant, resilient, and privacy-enabled platform for everyday crypto transactions.",
    image: <Decentralized />,
  },
  {
    heading: "A common-sense approach to compliance",
    description:
      "With an Iron Fish account, users receive a set of view keys that allow them to provide read-only access to their transactions records. This feature enables users to share account information for compliance and situations requiring proof of transaction.",
    image: <Handshake />,
  },
];

export function GovernanceStructure() {
  return (
    <Box
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
            <Text textStyle="h3">Why Use Iron Fish?</Text>
          </StickySideBySideView.Item>
          <StickySideBySideView.Item>
            {sections.map((section, i, arr) => (
              <Section
                key={i}
                heading={section.heading}
                description={section.description}
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
        <ShadowBox p={12}>
          <Box
            borderRadius="full"
            bg="purple.500"
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
