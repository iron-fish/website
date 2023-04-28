import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  ShadowBox,
  Stack,
  Text,
} from "@/lib/ui";
import FullLogo from "./assets/full-logo.svg";
import HexFish from "./assets/hex-fish.svg";

export function LogoDownloads() {
  return (
    <Container
      px={{
        base: 3,
        md: 8,
      }}
      maxW={{
        base: "704px",
        lg: "1600px",
      }}
      w="100%"
      mb={{
        base: 24,
        md: 32,
        xl: "150px",
      }}
      pl={{
        lg: "40px",
        xl: "64px",
        "2xl": "128px",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        gap={{
          base: 16,
          lg: 16,
        }}
        maxW={{
          base: "704px",
          lg: "100%",
        }}
        w="100%"
        margin="0 auto"
      >
        <Flex
          direction="column"
          maxW="650px"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text textStyle="h3" mb={8}>
            Logo Downloads
          </Text>
          <Text textStyle="lg" mb={8}>
            We provided vector versions of our logo and mark. Please do not
            alter or edit these files if you plan to use them in any public
            facing way.
          </Text>
          <Button
            as="a"
            href="/downloads/media-kit/logos/iron-fish-logos.zip"
            bg="white"
            _hover={{
              bg: "gray.200",
            }}
          >
            Download Files
          </Button>
        </Flex>
        <Box w="100%" maxW="510px">
          <ShadowBox>
            <Flex flexDirection="column" px={12} py="96px" alignItems="center">
              <Image src={FullLogo} alt="Iron Fish logo" />
              <Text
                fontSize="26px"
                fontFamily="FavoritExtendedIf"
                mt={8}
                mb={2}
              >
                Full Logo
              </Text>
              <HStack gap={1} mb={24}>
                <FileType format="svg" />
                <FileType format="png" />
              </HStack>
              <Image src={HexFish} alt="Iron Fish logo" />
              <Text
                fontSize="26px"
                fontFamily="FavoritExtendedIf"
                mt={8}
                mb={2}
              >
                Hex Fish
              </Text>
              <HStack gap={1}>
                <FileType format="svg" />
                <FileType format="png" />
              </HStack>
            </Flex>
          </ShadowBox>
        </Box>
      </Stack>
    </Container>
  );
}

function FileType({ format }: { format: string }) {
  return (
    <Box border="1px solid #D9D9D9" borderRadius="6px" px={1}>
      <Text color="#777777">.{format}</Text>
    </Box>
  );
}
