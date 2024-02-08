import path from "path";
import { GetStaticProps } from "next";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import { MDXRemoteProps } from "next-mdx-remote";
import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  MDXRenderer,
  Text,
  LocalImage,
  chakra,
} from "@/lib/ui";
import glass from "../../../assets/heroImages/faq/glass.svg";
import jelly from "../../../assets/heroImages/faq/jelly.svg";
import question from "../../../assets/heroImages/faq/question.svg";
import Head from "next/head";
import { FaqMoreInfo } from "@/components/FaqMoreInfo/FaqMoreInfo";

type Props = {
  markdown: MDXRemoteProps;
};

const glassImage = glass as LocalImage;
const jellyImage = jelly as LocalImage;
const questionImage = question as LocalImage;

export default function FAQ({ markdown }: Props) {
  return (
    <>
      <Head>
        <title>Iron Fish FAQ | Answers to Your Most Common Questions</title>
      </Head>
      <Box mb="150px">
        <Hero
          bg="blue.500"
          heading="Frequently Asked Questions"
          subheading="Privacy shouldn't be rocket science"
          description="Well...to make blockchain technology private is extremely difficult, perhaps more difficult than rocket science."
          images={
            <>
              <HeroImageUtil
                image={jellyImage}
                top={{
                  md: "-150px",
                  xl: "-30px",
                }}
                left={{
                  md: "-120px",
                  xl: "30px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
              <HeroImageUtil
                image={glassImage}
                bottom={{
                  md: "-80px",
                  xl: "15px",
                }}
                left={{
                  md: "-50px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 850px)`,
                }}
              />
              <HeroImageUtil
                image={questionImage}
                top={{
                  md: "20px",
                  xl: "85px",
                }}
                right={{
                  md: "-120px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
            </>
          }
        />
        <Container w="100%" maxW="container.lg">
          <FaqMoreInfo />
          <MDXRenderer markdown={markdown} />
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { content } = parseFileByPath(
    path.join(process.cwd(), "content", "faqs", "faqs.mdx")
  );

  const markdown = await renderMarkdown(content);

  return {
    props: {
      markdown,
    },
  };
};
