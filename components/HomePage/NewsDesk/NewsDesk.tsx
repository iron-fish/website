import {
  Box,
  Text,
  AspectRatio,
  Heading,
  Container,
  Grid,
  GridItem,
} from "@/lib/ui";
import Image from "next/image";
import { MEDIA_ITEMS } from "@/content/media/media";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  heading: {
    id: "NewsDesk.heading",
    defaultMessage: "Iron Fish on the News Desk",
  },
});

export function NewsDesk() {
  const { formatMessage } = useIntl();

  return (
    <Container
      maxW={{
        base: "704px",
        lg: "1600px",
      }}
      w="100%"
      px={{
        base: 4,
        lg: 16,
      }}
    >
      <Box>
        <Text fontSize="md" textTransform="uppercase" textAlign="center" mb={8}>
          {formatMessage(messages.heading)}
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
    <Grid
      as="a"
      href={href}
      target="_blank"
      templateColumns={{
        base: "1fr",
        lg: "7fr 3fr",
      }}
      borderTop="1px solid black"
      py={8}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      gap={{
        base: 6,
        lg: 8,
      }}
      _hover={{
        textDecoration: "underline",
      }}
    >
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxW={{
          base: "auto",
          lg: "60ch",
        }}
      >
        <Text fontSize="md" mb={3}>
          {date}
        </Text>
        <Heading fontSize="lg">{title}</Heading>
      </GridItem>
      <GridItem borderRadius={9} overflow="hidden">
        {image && (
          <AspectRatio ratio={362 / 154}>
            <Image alt="" src={image} fill />
          </AspectRatio>
        )}
      </GridItem>
    </Grid>
  );
}
