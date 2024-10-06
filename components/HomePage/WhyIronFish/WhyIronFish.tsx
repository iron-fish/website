import {
  Box,
  Grid,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox,
  Flex,
  FancyArrowRight,
} from "@/lib/ui";
import { ReactNode } from "react";
import { Decentralized } from "./icons/Decentralized";
import { Handshake } from "./icons/Handdhake";
import { Lock } from "./icons/Lock";
import Link from "next/link";

const sections = [
  {
    heading: "Privacy without compromise",
    description:
      "Every crypto asset deserves access to a privacy layer. With Iron Fish you can transfer any asset in a safe and private way.",
    image: <Lock />,
  },
  {
    heading: "Your finance, truly decentralized",
    description:
      "Powered by a global network of miners and nodes, Iron Fish is censorship resistant and offers a privacy-enabled platform for everyday crypto transactions.",
    image: <Decentralized />,
  },
  {
    heading: "A common-sense approach to compliance",
    description: (
      <Grid gap={4}>
        <Text>
          Every transfer in and out of Iron Fish passes through ChainPort&apos;s
          sanction screening and real-time threat detection models. We take a
          strong stance that Iron Fish is to be used for good, and malicious
          addresses attempting to bridge to Iron Fish will have their funds
          frozen.
        </Text>
        <Flex mt="">
          <Flex
            as={Link}
            href="/learn/blog/2024-08-15-safety"
            display="flex"
            alignItems="center"
            gap={2}
            pb={2}
            position="relative"
            color="#c54ade"
            _hover={{
              '[data-name="link-underline"]': {
                width: "100%",
              },
            }}
          >
            <Text>Learn more.</Text>
            <Box transform="scale(0.7)">
              <FancyArrowRight />
            </Box>
            <Box
              data-name="link-underline"
              w="0%"
              h="2px"
              bg="currentColor"
              position="absolute"
              bottom="0"
              left="0"
              transition="width 0.15s ease-in-out"
            />
          </Flex>
        </Flex>
      </Grid>
    ),
    image: <Handshake />,
  },
];

export function WhyIronFish() {
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
            {sections.map((section, i, arr) => {
              return (
                <Section
                  key={i}
                  heading={section.heading}
                  description={section.description}
                  image={section.image}
                  number={i + 1}
                  totalItems={arr.length}
                />
              );
            })}
          </StickySideBySideView.Item>
        </StickySideBySideView>
      </Container>
    </Box>
  );
}

type SectionProps = {
  heading: string;
  description: string | ReactNode;
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
          {typeof description === "string" ? (
            <Text>{description}</Text>
          ) : (
            description
          )}
        </ShadowBox>
      </Box>
    </Box>
  );
}
