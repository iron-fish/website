import {
  Box,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox,
} from "@/lib/ui";
import { ReactNode } from "react";
import { Book } from "./icons/Book";
import { Lightning } from "./icons/Lightning";
import { Chat } from "./icons/Chat";

const sections = [
  {
    heading: "A Place to Learn",
    description:
      "The diverse Iron Fish community includes new and experienced crypto users keen to learn and share knowledge on places like Discord and the entirely user-driven Community Wiki.",
    image: <Book />,
  },
  {
    heading: "A Place to Create",
    description:
      "Iron Fish users express their support in numerous ways, from murals and art to bug reports and community-built tools. If you create something, let us know!",
    image: <Lightning />,
  },
  {
    heading: "A Place to Engage",
    description:
      "What do you care about? We want to know! Through Discord, Twitter, and more, the Iron Fish community is here to spark conversation and drive crypto innovation forward.",
    image: <Chat />,
  },
];

export function OurCommunityIs() {
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
            <Text textStyle="h3">Our Community Is</Text>
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
        <ShadowBox p={12} shadowColor="green.500">
          <Box
            borderRadius="full"
            bg="green.500"
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
