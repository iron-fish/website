import Link from "next/link";
import {
  Box,
  Container,
  Text,
  ShadowBox,
  AspectRatio,
  Button,
  Flex,
} from "@/lib/ui";
import Image from "next/image";

export function FeaturedBlog({
  image,
  title,
  href,
}: {
  image: string | null;
  title: string;
  href: string;
}) {
  return (
    <Box
      bg="purple.500"
      borderBottom="1.5px solid black"
      py={{
        base: 8,
        md: 16,
      }}
      px={{
        base: 6,
        md: 12,
      }}
      mb={{
        base: 8,
        md: "150px",
      }}
    >
      <Container w="100%" maxW="container.lg">
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          alignItems={{
            base: "stretch",
            lg: "center",
          }}
        >
          <Box
            mb={{
              base: 8,
              lg: 0,
            }}
            w={{
              base: "100%",
              lg: "50%",
            }}
          >
            <ShadowBox
              shadowColor="transparent"
              overflow="hidden"
              borderWidth="2px"
              borderRadius="4px"
            >
              <AspectRatio ratio={465 / 309}>
                {image && <Image alt="" src={image} fill />}
              </AspectRatio>
            </ShadowBox>
          </Box>
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            px={{
              base: 0,
              sm: 8,
              lg: 16,
            }}
            w={{
              base: "100%",
              lg: "50%",
            }}
          >
            <Text textStyle="h4" textTransform="uppercase" mb={4}>
              Featured Blog
            </Text>
            <Text as="h3" textStyle="h3" marginBottom={4} minHeight="2.5em">
              {title}
            </Text>
            <Button
              as={Link}
              href={href}
              size="sm"
              bg="white"
              _hover={{
                bg: "gray.200",
              }}
            >
              Read Now
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
