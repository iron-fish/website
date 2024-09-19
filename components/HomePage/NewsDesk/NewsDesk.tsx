import {
  Box,
  Text,
  AspectRatio,
  Heading,
  Container,
  Grid,
  GridItem,
  Flex,
} from "@/lib/ui";
import Image from "next/image";
import { defineMessages, useIntl } from "react-intl";
import { format, parse } from "date-fns";

const messages = defineMessages({
  heading: {
    id: "NewsDesk.heading",
    defaultMessage: "Iron Fish on the news",
  },
});

const MEDIA_ITEMS = [
  {
    title: `A16z-backed Iron Fish launches privacy-focused blockchain on mainnet`,
    link: `https://www.theblock.co/post/227336/a16z-backed-iron-fish-launches-mainnet-blockchain`,
    date: `2023-04-20`,
    image: "/images/home/news-desk/the-block.png",
  },
  {
    title: `Iron Fish Raises $27 Million To Build A Cryptocurrency Beyond The Reach Of Surveillance States`,
    link: `https://www.forbes.com/sites/michaeldelcastillo/2021/11/30/iron-fish-raises-27-million-to-build-a-cryptocurrency-beyond-the-reach-of-surveillance-states/`,
    date: `2021-11-30`,
    image: "/images/home/news-desk/forbes.png",
  },
  {
    title: `A16z Leads $28M Round for Privacy Coin Iron Fish`,
    link: `https://www.coindesk.com/business/2021/11/30/a16z-leads-28m-round-for-privacy-coin-iron-fish/`,
    date: `2021-11-30`,
    image: "/images/home/news-desk/coindesk.png",
  },
];

export function NewsDesk() {
  const { formatMessage } = useIntl();

  return (
    <Container
      maxW={{
        // base: "704px",
        base: "100%",
        lg: "1600px",
      }}
      w="100%"
      px={{
        base: 0,
        lg: 8,
        xl: 16,
      }}
      pb={16}
    >
      <Box>
        <Text fontSize="md" textTransform="uppercase" textAlign="center" mb={8}>
          {formatMessage(messages.heading)}
        </Text>
        <Box
          h="1px"
          bg="black"
          my={8}
          marginX={{
            base: 6,
            lg: 0,
          }}
        />
        <Grid
          templateColumns={{
            base: "repeat(3, 380px)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{
            base: "30px",
          }}
          overflow="auto"
          paddingX={{
            base: 6,
            lg: 0,
          }}
        >
          {MEDIA_ITEMS.slice(0, 3).map((item, i) => (
            <GridItem
              key={i}
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              justifyContent="stretch"
            >
              <Story
                date={item.date}
                title={item.title}
                image={item.image}
                href={item.link}
              />
            </GridItem>
          ))}
        </Grid>
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
    <Flex
      as="a"
      href={href}
      target="_blank"
      _hover={{
        textDecoration: "underline",
      }}
      h="100%"
      flexDirection="column"
      alignItems="stretch"
    >
      <Text fontSize="md" mb={3}>
        {format(parse(date, "yyyy-MM-dd", new Date()), "MMMM dd, yyyy")}
      </Text>
      <Heading fontSize="lg" mb={5}>
        {title}
      </Heading>
      {image && (
        <AspectRatio
          ratio={362 / 154}
          borderRadius={9}
          overflow="hidden"
          mt="auto"
        >
          <Image alt="" src={image} fill />
        </AspectRatio>
      )}
    </Flex>
  );
}
