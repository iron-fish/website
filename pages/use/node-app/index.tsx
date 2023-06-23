import { Box, Flex, Hero, HeroImageUtil, LocalImage } from "@/lib/ui";
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
  Platform,
  DownloadUrlsByPlatform,
} from "@/utils/nodeAppUrl/getNodeAppUrlByPlatform";
import { useState } from "react";
import { UAParser } from "ua-parser-js";

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
        <title>
          Iron Fish Node App | A User-Friendly Interface for Managing Your Node
        </title>
      </Head>
      <Box>
        <Box bg="orange.500">
          <Hero
            bg="orange.500"
            heading="Node App Beta"
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
            <Flex mb="64px" justifyContent="center">
              <DownloadForCurrentPlatform
                downloadUrlsByPlatform={downloadUrlsByPlatform}
              />
            </Flex>
          </Hero>
          <Box px={8}>{isClient && <NodeAppUIImage />}</Box>
        </Box>
        <DownloadOptions />
        <FeatureListA />
        <FeatureListB />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  let downloadUrlsByPlatform;

  try {
    downloadUrlsByPlatform = await getNodeAppUrlByPlatform();
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      downloadUrlsByPlatform,
    },
    revalidate: 60,
  };
}
