import { Hero, HeroImageUtil, LocalImage, Button, Flex } from "@/lib/ui";
import alan from "../../../assets/heroImages/grants/alan-grant.svg";
import hand from "../../../assets/heroImages/grants/hand.svg";
import bag from "../../../assets/heroImages/grants/bag.svg";
import Head from "next/head";

const alanImage = alan as LocalImage;
const handImage = hand as LocalImage;
const bagImage = bag as LocalImage;

export default function Grants() {
  return (
    <>
      <Head>
        <title>Iron Fish Grants | Improve the Iron Fish ecosystem</title>
      </Head>
      <Hero
        bg="green.400"
        heading=""
        subheading="Grant Application"
        description={
          <>
            We offer grants for projects that directly impact the Iron Fish
            ecosystem in a positive way. If you are a builder passionate about
            privacy in crypto, we invite you to apply. Do you have an idea
            that&apos;ll expand the Iron Fish ecosystem, enhance user experience
            or increase interoperability for Iron Fish?
            <br />
            Click below!
          </>
        }
        textContainerProps={{
          maxW: "760px",
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
                md: "-30px",
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
            Apply Now
          </Button>
        </Flex>
      </Hero>
    </>
  );
}
