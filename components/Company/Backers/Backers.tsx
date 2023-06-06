import {
  Box,
  Text,
  Container,
  ArrowButton,
  Flex,
  Grid,
  GridItem,
} from "@/lib/ui";
import { defineMessages, useIntl } from "react-intl";
import Image from "next/image";
import ImgA16z from "./assets/backer-a16z.png";
import ImgElad from "./assets/backer-elad.png";
import ImgSequoia from "./assets/backer-sequoia.png";
import ImgBalaji from "./assets/backer-balaji.png";
import ImgElectric from "./assets/backer-electric.png";
import ImgLinda from "./assets/backer-linda.png";

const messages = defineMessages({
  heading: {
    id: "backers.heading",
    defaultMessage: "World-class builders and backers",
  },
});

export function Backers() {
  const { formatMessage } = useIntl();
  return (
    <Box
      borderTop="1.5px solid black"
      bg="purple.500"
      py={{
        base: 24,
        lg: 32,
        xl: "150px",
      }}
      px={{
        base: 4,
      }}
    >
      <Container mb={8} textAlign="center" w="100%" maxW="container.xl">
        <Text as="h2" textStyle="h3" maxW="20ch" mx="auto">
          {formatMessage(messages.heading)}
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          w="100%"
          gap={{
            base: 8,
            md: 14,
          }}
          mt={{
            base: 16,
            md: 9,
          }}
          mb={16}
        >
          {[ImgA16z, ImgElad, ImgSequoia, ImgBalaji, ImgElectric, ImgLinda].map(
            (img, i) => (
              <GridItem
                key={i}
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={img} height={52} alt="" />
              </GridItem>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}
