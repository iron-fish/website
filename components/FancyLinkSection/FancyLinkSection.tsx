import {
  Heading,
  Grid,
  Box,
  Text,
  GridItem,
  Container,
  FancyArrowRight,
  AspectRatio,
  Flex,
  ContainerProps,
} from "@/lib/ui";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  description: string | string[];
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  reverse?: boolean;
  ctaColor?: string;
  containerProps?: ContainerProps;
};

function asArray(value: string | string[]) {
  return Array.isArray(value) ? value : [value];
}

export function FancyLinkSection({
  heading,
  description,
  ctaText,
  ctaLink,
  imageUrl,
  reverse,
  ctaColor = "black",
  containerProps,
}: Props) {
  return (
    <Container
      maxW={{
        base: "704px",
        lg: "1344px",
      }}
      margin="0 auto"
      w="100%"
      {...containerProps}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
        }}
        w="100%"
        gap={{
          base: "4rem",
          lg: "180px",
        }}
      >
        <GridItem order={reverse ? 2 : 1} display="flex" alignItems="center">
          <Box w="100%">
            <Heading as="h2" size="h3" mb={8}>
              {heading}
            </Heading>
            {asArray(description).map((text, i) => (
              <Text textStyle="lg" mb={8} key={i}>
                {text}
              </Text>
            ))}
            <Flex
              display="inline-flex"
              alignItems="center"
              gap={3}
              as={ctaLink.startsWith("http") ? "a" : Link}
              target={ctaLink.startsWith("http") ? "_blank" : undefined}
              rel={ctaLink.startsWith("http") ? "noreferrer" : undefined}
              href={ctaLink}
              pb={4}
              position="relative"
              color={ctaColor}
              _hover={{
                "& > div:last-child": {
                  w: "100%",
                },
              }}
            >
              <Text textStyle="h4" fontWeight="bold">
                {ctaText}
              </Text>
              <FancyArrowRight />
              <Box
                w="0%"
                h="2px"
                bg="currentColor"
                position="absolute"
                bottom="0"
                left="0"
                transition="width 0.15s ease-in-out"
              />
            </Flex>
          </Box>
        </GridItem>
        <GridItem position="relative" order={reverse ? 1 : 2}>
          <Box maxW="510px" margin="0 auto">
            <AspectRatio position="relative" ratio={0.7}>
              <Image
                src={imageUrl}
                alt=""
                style={{ objectFit: "contain" }}
                fill
              />
            </AspectRatio>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
