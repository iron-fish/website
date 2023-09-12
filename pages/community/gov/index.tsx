import { Hero, HeroImageUtil, LocalImage, Button, Flex, Box } from "@/lib/ui";
import alan from "../../../assets/heroImages/grants/alan-grant.svg";
import hand from "../../../assets/heroImages/grants/hand.svg";
import bag from "../../../assets/heroImages/grants/bag.svg";
import Head from "next/head";
import { GovernanceStructure } from "@/components/Governance/GovernanceStructure/GovernanceStructure";
import { GovernanceFAQ } from "@/components/Governance/GovernanceFAQ/GovernanceFAQ";
import { DiscordCTA } from "@/components/Governance/DiscordCTA/DiscordCTA";

const alanImage = alan as LocalImage;
const handImage = hand as LocalImage;
const bagImage = bag as LocalImage;

export default function Governance() {
  return (
    <Box>
      <Head>
        <title>Iron Fish Grants | Expand the Iron Fish ecosystem</title>
      </Head>
      <Hero
        bg="green.400"
        flexGrow={1}
        heading="Iron Fish Governance"
        subheading="Community-led protocol decisions"
        description="The Foundation has launched a Discourse website and put out a public call for governance submissions."
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
              image={alanImage}
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
              image={handImage}
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
              image={bagImage}
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5ws1lLHg7aao87744Us7wO7dADvPiGl2ZEBPRBnDB-mXiAg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Submit Proposal
          </Button>
        </Flex>
      </Hero>

      <GovernanceStructure />
      <GovernanceFAQ />
      <DiscordCTA />
    </Box>
  );
}
