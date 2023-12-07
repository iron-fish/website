import {
  Hero,
  HeroImageUtil,
  LocalImage,
  Button,
  Flex,
  MDXRenderer,
  Container,
  Text,
} from "@/lib/ui";
import alan from "../../../assets/heroImages/grants/alan-grant.svg";
import hand from "../../../assets/heroImages/grants/hand.svg";
import bag from "../../../assets/heroImages/grants/bag.svg";
import Head from "next/head";
import { GRANTS_FORM_URL } from "@/shared/constants";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import path from "path";
import { MDXRemoteProps } from "next-mdx-remote";
import { GetStaticProps } from "next";

const alanImage = alan as LocalImage;
const handImage = hand as LocalImage;
const bagImage = bag as LocalImage;

type Props = {
  markdown: MDXRemoteProps;
};

export default function Grants({ markdown }: Props) {
  return (
    <>
      <Head>
        <title>Iron Fish Grants | Expand the Iron Fish ecosystem</title>
      </Head>
      <Hero
        bg="green.400"
        flexGrow={1}
        heading={null}
        subheading="Grant Application"
        description={
          <>
            We offer grants for projects that directly impact the Iron Fish
            ecosystem in a positive way. If you are a builder passionate about
            privacy in crypto, we invite you to apply. Do you have an idea
            that&apos;ll expand the Iron Fish ecosystem, enhance user experience
            or increase interoperability for Iron Fish? Click&nbsp;below!
          </>
        }
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
            href={GRANTS_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Apply Now
          </Button>
        </Flex>
      </Hero>
      <Container w="100%" maxW="container.xl" py="150px">
        <Text as="h2" textStyle="h3" mb={12} textAlign="center">
          Grants FAQ
        </Text>
        <MDXRenderer markdown={markdown} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { content } = parseFileByPath(
    path.join(process.cwd(), "content", "grants", "grants-faqs.mdx")
  );

  const markdown = await renderMarkdown(content);

  return {
    props: {
      markdown,
    },
  };
};
