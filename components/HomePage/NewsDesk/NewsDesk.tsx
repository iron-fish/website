import { Box, Text, AspectRatio, HStack, Heading, Container } from "@/lib/ui";
import Image from "next/image";
import Link from "next/link";
import { MEDIA_ITEMS } from "@/content/media/media";

export function NewsDesk() {
  return (
    <Container
      maxW={{
        base: "704px",
        lg: "1600px",
      }}
      w="100%"
      px={16}
    >
      <Box>
        <Text fontSize="md" textTransform="uppercase" textAlign="center" mb={8}>
          Iron Fish on the News Desk
        </Text>
        <Box>
          {MEDIA_ITEMS.slice(0, 3).map((item, i) => (
            <Story
              key={i}
              date={item.date}
              title={item.title}
              image={item.image}
              href={item.link}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

function Story({
  date,
  title,
  href,
  image,
}: {
  date: string;
  title: string;
  href: string;
  image?: string | null;
}) {
  return (
    <HStack
      as="a"
      href={href}
      target="_blank"
      justify="space-between"
      borderTop="1px solid black"
      py={8}
      _hover={{
        textDecoration: "underline",
      }}
    >
      <Box maxW="60ch">
        <Text fontSize="md" mb={3}>
          {date}
        </Text>
        <Heading fontSize="lg">{title}</Heading>
      </Box>
      <Box w="40%" borderRadius={9} overflow="hidden">
        {image && (
          <AspectRatio ratio={362 / 154}>
            <Image alt="" src={image} fill />
          </AspectRatio>
        )}
      </Box>
    </HStack>
  );
}
