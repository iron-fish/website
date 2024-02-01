import { Box, Flex, Hero, HeroImageUtil, LocalImage, Text } from "@/lib/ui";
import eel from "../../../assets/heroImages/node-app/eel.svg";
import octopus from "../../../assets/heroImages/node-app/octopus.svg";
import nodeApp from "../../../assets/heroImages/node-app/node-app.svg";
import { NodeAppUIImage } from "../../../components/NodeAppUIImage/NodeAppImage";
import { useIsClient } from "usehooks-ts";
import Head from "next/head";
import { FeatureListA } from "@/components/NodeApp/FeatureListA/FeatureListA";
import { FeatureListB } from "@/components/NodeApp/FeatureListB/FeatureListB";
import {
  DownloadOptions,
  DownloadForCurrentPlatform,
} from "@/components/NodeApp/Download/Download";
import {
  getNodeAppUrlByPlatform,
  DownloadUrlsByPlatform,
} from "@/utils/nodeAppUrl/getNodeAppUrlByPlatform";
import { NodeAppFaqs } from "@/components/NodeApp/NodeAppFaqs/NodeAppFaqs";

const eelImage = eel as LocalImage;
const octopusImage = octopus as LocalImage;
const appImage = nodeApp as LocalImage;

type Props = {
  downloadUrlsByPlatform?: DownloadUrlsByPlatform;
};

export default function NodeApp({ downloadUrlsByPlatform }: Props) {
  const isClient = useIsClient();
  return (
    <>
      <Head>
        <title>Iron Fish Node App | A Privacy-Focused Desktop GUI</title>
      </Head>
      <Box>
        <Box bg="orange.500">
          <Hero
            bg="orange.500"
            heading={
              <Flex as="h1" alignItems="center" justifyContent="center" mb={10}>
                <Text as="span" textStyle="lg">
                  Node App
                </Text>
                <Box
                  as="span"
                  bg="black"
                  color="orange.500"
                  py={1}
                  px={3}
                  borderRadius="full"
                  ml={2}
                >
                  Beta
                </Box>
              </Flex>
            }
            subheading="Built for everyone"
            description="Set up a wallet and make secure transactions with our easy-to-use desktop node app."
            borderBottom="none"
            textContainerProps={{
              pb: {
                base: "48px",
                md: "48px",
              },
            }}
            images={
              <>
                <HeroImageUtil
                  image={eelImage}
                  top={{
                    md: "0px",
                    xl: "20px",
                  }}
                  left={{
                    md: "-120px",
                    xl: "30px",
                    "2xl": `calc(50vw - 700px)`,
                  }}
                />
                <HeroImageUtil
                  image={appImage}
                  bottom={{
                    md: "20px",
                    xl: "15px",
                  }}
                  left={{
                    md: "-50px",
                    xl: "-20px",
                    "2xl": `calc(50vw - 850px)`,
                  }}
                />
                <HeroImageUtil
                  image={octopusImage}
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
          >
            <Flex mb="64px" justifyContent="center" px={2}>
              <DownloadForCurrentPlatform
                downloadUrlsByPlatform={downloadUrlsByPlatform}
              />
            </Flex>
          </Hero>
          <Box px={8} borderBottom="1.5px solid black">
            {isClient && <NodeAppUIImage transform="translateY(1.5px)" />}
          </Box>
        </Box>
        <DownloadOptions
          mt="150px"
          downloadUrlsByPlatform={downloadUrlsByPlatform}
        />
        <FeatureListA />
        <FeatureListB />
        <NodeAppFaqs />
        <DownloadOptions
          bg="orange.500"
          py="150px"
          downloadUrlsByPlatform={downloadUrlsByPlatform}
        />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  let downloadUrlsByPlatform = {};

  try {
    downloadUrlsByPlatform = await getNodeAppUrlByPlatform();
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      downloadUrlsByPlatform,
    },
    revalidate: 60 * 15, // TTL: 15 mins
  };
}
