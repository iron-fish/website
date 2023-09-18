import {
  Hero,
  HeroImageUtil,
  Button,
  Flex,
  Box,
  Container,
  ThickLink,
  Text,
} from "@/lib/ui";
import Head from "next/head";
import { GovernanceStructure } from "@/components/Governance/GovernanceStructure/GovernanceStructure";
import { GovernanceFAQ } from "@/components/Governance/GovernanceFAQ/GovernanceFAQ";
import { DiscordCTA } from "@/components/Governance/DiscordCTA/DiscordCTA";
import { defineMessages, useIntl } from "react-intl";
import betta from "../../../assets/heroImages/governance/betta.svg";
import angler from "../../../assets/heroImages/governance/angler.svg";
import jelly from "../../../assets/heroImages/governance/jelly.svg";

const messages = defineMessages({
  heading: {
    id: "governance.heading",
    defaultMessage: "Iron Fish Governance",
  },
  subheading: {
    id: "governance.subheading",
    defaultMessage: "Community-led protocol decisions",
  },
  description: {
    id: "governance.description",
    defaultMessage:
      "The Foundation has launched a Discourse website and put out a public call for governance submissions.",
  },
  submitProposal: {
    id: "governance.submitProposal",
    defaultMessage: "Submit Proposal",
  },
  communityDriven: {
    id: "governance.communityDriven",
    defaultMessage:
      "Iron Fish has always been a <underline>community driven project.</underline> Since mainnet launch, our focus has been on how to continue bolstering Iron Fish's decentralization and resilience.",
  },
});

function Underline(value: unknown) {
  if (!Array.isArray(value)) return null;

  return <ThickLink underlineColor="green.400">{value[0]}</ThickLink>;
}

export default function Governance() {
  const { formatMessage } = useIntl();
  return (
    <Box>
      <Head>
        <title>Iron Fish Governance | Community-led protocol decisions</title>
      </Head>
      <Hero
        bg="green.400"
        flexGrow={1}
        heading={formatMessage(messages.heading)}
        subheading={formatMessage(messages.subheading)}
        description={formatMessage(messages.description)}
        textContainerProps={{
          maxW: {
            base: "container.sm",
            xl: "750px",
            "2xl": "780px",
          },
          pb: {
            base: "40px",
            md: "50px",
          },
        }}
        images={
          <>
            <HeroImageUtil
              image={betta}
              top={{
                md: "-60px",
                xl: "80px",
              }}
              left={{
                md: "-90px",
                xl: "30px",
                "2xl": `calc(50vw - 700px)`,
              }}
            />
            <HeroImageUtil
              image={angler}
              bottom={{
                md: "20px",
                xl: "100px",
              }}
              left={{
                md: "-50px",
                xl: "-20px",
                "2xl": `calc(50vw - 780px)`,
              }}
            />
            <HeroImageUtil
              image={jelly}
              top={{
                md: "20px",
                xl: "200px",
              }}
              right={{
                md: "-120px",
                xl: "-20px",
                "2xl": `calc(50vw - 700px)`,
              }}
            />
          </>
        }
      >
        <Flex mb="120px" justifyContent="center" px={2}>
          <Button
            bg="white"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.100" }}
            size="lg"
            as="a"
            href="https://discourse.ironfish.network/t/request-for-proposal-iron-fish-foundation-governance/23"
            target="_blank"
            rel="noreferrer"
          >
            {formatMessage(messages.submitProposal)}
          </Button>
        </Flex>
      </Hero>

      <Container w="100%" maxW="container.md">
        <Text
          textStyle="h5"
          my={{
            base: "50px",
            md: "100px",
            lg: "150px",
          }}
          textAlign="center"
        >
          {formatMessage(messages.communityDriven, {
            underline: Underline,
          })}
        </Text>
      </Container>

      <GovernanceStructure />
      <GovernanceFAQ />
      <DiscordCTA />
    </Box>
  );
}
