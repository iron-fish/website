import { Box, Button, Container, Stack, Text } from "@/lib/ui";

export function IllustrationPack() {
  return (
    <Container
      w="100%"
      maxW="container.2xl"
      pl={{
        lg: "40px",
        xl: "64px",
        "2xl": "128px",
      }}
      pr={{
        base: 3,
        lg: 0,
      }}
    >
      <Stack
        alignItems="stretch"
        justifyContent="space-between"
        direction={{
          base: "column",
          lg: "row",
        }}
      >
        <Box
          py={{
            base: 16,
            lg: "300px",
          }}
          maxW={{
            base: "100%",
            lg: "50%",
          }}
          pr={{
            base: 0,
            lg: "110px",
          }}
        >
          <Text textStyle="h3" mb={8}>
            Illustration Pack
          </Text>
          <Text textStyle="lg" mb={8}>
            We provided vector versions of our brand illustrations. Feel free to
            use these illustrations accompanying any Iron Fish related content.
          </Text>
          <Button
            as="a"
            href="/downloads/media-kit/iron-fish-illustration-pack.zip"
            bg="white"
            _hover={{
              bg: "gray.200",
            }}
          >
            Download Files
          </Button>
        </Box>
        <Box
          w={{
            base: "100%",
            lg: "50%",
          }}
          h={{
            base: "440px",
            lg: "auto",
          }}
          bgImage={`url("/images/media-kit/illustration-pack-bg.svg")`}
          backgroundSize="cover"
          backgroundPosition={{
            base: "top center",
            lg: "left center",
          }}
        />
      </Stack>
    </Container>
  );
}
