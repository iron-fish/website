import { ArrowButton, Box, Button, Flex, Text, Container } from "@/lib/ui";
import { DownloadUrlsByPlatform } from "@/utils/nodeAppUrl/getNodeAppUrlByPlatform";
import { useDownloadLinkForPlatform } from "@/utils/nodeAppUrl/useDownloadLinkForPlatform";
import { useMemo } from "react";

type Props = {
  downloadUrlsByPlatform?: DownloadUrlsByPlatform;
};

const REPO_URL = "https://github.com/iron-fish/node-app";

export function DownloadForCurrentPlatform({ downloadUrlsByPlatform }: Props) {
  const linkData = useDownloadLinkForPlatform(downloadUrlsByPlatform);

  const linkProps = useMemo(() => {
    if (!linkData)
      return {
        opacity: 0,
      };

    const { url, label } = linkData;

    return url && label
      ? { href: url, children: label }
      : { href: REPO_URL, children: "View on GitHub", target: "_blank" };
  }, [linkData]);

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
      {downloadUrlsByPlatform && (
        <Text
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          View All Download Options
        </Text>
      )}
    </Flex>
  );
}

export function DownloadOptions({ downloadUrlsByPlatform }: Props) {
  if (!downloadUrlsByPlatform) return null;

  console.log({ downloadUrlsByPlatform });

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
