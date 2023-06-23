import { ArrowButton, Box, Button, Flex, Text, Container } from "@/lib/ui";
import {
  PLATFORMS,
  Platform,
  DownloadUrlsByPlatform,
} from "@/utils/nodeAppUrl/getNodeAppUrlByPlatform";
import { useEffect, useMemo, useState } from "react";
import { UAParser } from "ua-parser-js";

type Props = {
  downloadUrlsByPlatform?: DownloadUrlsByPlatform;
};

// function useUserPlatform() {
//   const [platform, setPlatform] = useState("");

//   useEffect(() => {
//     const doFetch = () => {
//       fetch("/api/user-platform")
//         .then((res) => res.json())
//         .then((data) => {
//           setPlatform(data.platform);
//         });
//     };

//     doFetch();
//   }, []);

//   return platform;
// }

const REPO_URL = "https://github.com/iron-fish/node-app";

export function DownloadForCurrentPlatform({ downloadUrlsByPlatform }: Props) {
  const { url, label } = useDownloadLinkForPlatform(downloadUrlsByPlatform);

  const linkProps =
    url && label
      ? { href: url, children: label }
      : { href: REPO_URL, children: "View on GitHub" };

  return (
    <Flex direction="column" alignItems="center">
      <Button
        as="a"
        size="lg"
        bg="white"
        _hover={{
          bg: "gray.100",
        }}
        mb={5}
        {...linkProps}
      />
      <Text
        cursor="pointer"
        _hover={{
          textDecoration: "underline",
        }}
      >
        View Download Options
      </Text>
    </Flex>
  );
}

export function DownloadOptions() {
  return (
    <Box>
      <Text
        as="h2"
        textStyle="h3"
        mt={{
          base: "50px",
          md: "100px",
          lg: "150px",
        }}
        mb={{
          base: "96px",
          md: "128px",
          lg: "150px",
        }}
        textAlign="center"
      >
        Download the Node App
      </Text>
      <Container w="100%" maxW="container.xl">
        <DownloadButton />
      </Container>
    </Box>
  );
}

function DownloadButton() {
  return (
    <ArrowButton
      as="a"
      href="#"
      size="sm"
      colorScheme="white"
      // arrowStyle="hidden"
      ml={3}
    >
      Read More
    </ArrowButton>
  );
}

function useDownloadLinkForPlatform(
  downloadUrlsByPlatform?: DownloadUrlsByPlatform
) {
  const [ua] = useState(() => {
    const parser = new UAParser();
    return parser.getResult();
  });

  const { platform, label, url } = useMemo(() => {
    const notFoundOption = {
      platform: null,
      label: null,
      url: null,
    };

    if (!downloadUrlsByPlatform) {
      return notFoundOption;
    }

    if (ua.os.name === "Mac OS") {
      return ua.cpu.architecture === "arm64"
        ? {
            platform: PLATFORMS.MAC_ARM,
            label: "Mac (Apple Silicon)",
            url: downloadUrlsByPlatform[PLATFORMS.MAC_ARM],
          }
        : {
            platform: PLATFORMS.MAC_INTEL,
            label: "Mac (Intel)",
            url: downloadUrlsByPlatform[PLATFORMS.MAC_INTEL],
          };
    }

    if (ua.os.name === "Windows") {
      return {
        platform: PLATFORMS.WINDOWS,
        label: "Windows",
        url: downloadUrlsByPlatform[PLATFORMS.WINDOWS],
      };
    }

    if (ua.os.name === "Linux") {
      return {
        platform: PLATFORMS.LINUX,
        label: "Linux",
        url: downloadUrlsByPlatform[PLATFORMS.LINUX],
      };
    }

    return notFoundOption;
  }, [downloadUrlsByPlatform, ua.cpu.architecture, ua.os.name]);

  return { platform, label, url };
}
