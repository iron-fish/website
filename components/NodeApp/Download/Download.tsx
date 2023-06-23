import {
  ArrowButton,
  Box,
  Button,
  Flex,
  Text,
  Container,
  ButtonProps,
  forwardRef,
  BoxProps,
} from "@/lib/ui";
import { smoothScrollToElByQuerySelector } from "@/lib/ui/src/hooks/useSmoothScrollToHash";
import {
  DownloadUrlsByPlatform,
  PLATFORM_LABELS,
  Platform,
} from "@/utils/nodeAppUrl/getNodeAppUrlByPlatform";
import { useDownloadLinkForPlatform } from "@/utils/nodeAppUrl/useDownloadLinkForPlatform";
import { useMemo } from "react";
import { BsDownload } from "react-icons/bs";

type Props = {
  downloadUrlsByPlatform?: DownloadUrlsByPlatform;
};

const REPO_URL = "https://github.com/iron-fish/node-app";
const DOWNLOAD_OPTIONS_TARGET = "download-options";

const DownloadButton = forwardRef<ButtonProps, "a">((props, ref) => (
  <Button
    bg="white"
    _hover={{ bg: "gray.100" }}
    _focus={{ bg: "gray.100" }}
    ref={ref}
    {...props}
  />
));

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
      <DownloadButton as="a" size="lg" mb={5} {...linkProps} />
      {downloadUrlsByPlatform && (
        <Text
          as="a"
          onClick={() => {
            smoothScrollToElByQuerySelector(
              `[data-target-id="${DOWNLOAD_OPTIONS_TARGET}"]`
            );
          }}
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

export function DownloadOptions({
  downloadUrlsByPlatform,
  ...rest
}: Props & BoxProps) {
  if (!downloadUrlsByPlatform) return null;

  return (
    <Box {...rest}>
      <Text
        as="h2"
        data-target-id={DOWNLOAD_OPTIONS_TARGET}
        textStyle="h3"
        mb={10}
        textAlign="center"
      >
        Download the Node App
      </Text>
      <Container
        w="100%"
        maxW="container.xl"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
      >
        {Object.entries(PLATFORM_LABELS).map(([platform, label]) => {
          return (
            <DownloadButton
              key={platform}
              download
              as="a"
              href={downloadUrlsByPlatform[platform as Platform]}
              size="sm"
              colorScheme="white"
              rightIcon={<BsDownload />}
            >
              {label}
            </DownloadButton>
          );
        })}
        <ArrowButton
          as="a"
          href="#"
          size="sm"
          colorScheme="white"
          arrowStyle="tilted"
        >
          View on GitHub
        </ArrowButton>
      </Container>
    </Box>
  );
}
