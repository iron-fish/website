import { Container, Text, Heading, Grid, GridItem, Box, Flex } from "@/lib/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/AutoExpandingList/AutoExpandingList";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import image1 from "./assets/image-01.svg";
import image2 from "./assets/image-02.svg";
import image3 from "./assets/image-03.svg";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
};

const messages = defineMessages({
  ourPrinciples: {
    id: "OurPrinciples.ourPrinciples",
    defaultMessage: "Our Principles",
  },
  encryptionHeading: {
    id: "OurPrinciples.encryptionHeading",
    defaultMessage: "Encryption is the Future of Crypto",
  },
  encryptionBody1: {
    id: "OurPrinciples.encryptionBody1",
    defaultMessage:
      "Privacy is a fundamental right, and yet everyday people give away personal information — often without even realizing it. We empower users to decide when and how to share their data, by ensuring all transactions are encrypted.",
  },
  encryptionBody2: {
    id: "OurPrinciples.encryptionBody2",
    defaultMessage:
      "We do not compromise on protection — using zero-knowledge proofs (zk-SNARKs) and the highest industry standards for encryption.",
  },
  buildTogetherHeading: {
    id: "OurPrinciples.buildTogetherHeading",
    defaultMessage: "We Build, Together",
  },
  buildTogetherBody: {
    id: "OurPrinciples.buildTogetherBody",
    defaultMessage:
      "As a decentralized, open-source network, Iron Fish relies on an engaged community to support protocol development and raise awareness of privacy as a social good. Our community is the heart of our platform.",
  },
  complianceHeading: {
    id: "OurPrinciples.complianceHeading",
    defaultMessage: "Common Sense Compliance",
  },
  complianceBody: {
    id: "OurPrinciples.complianceBody",
    defaultMessage:
      "To date, crypto privacy projects have either failed to offer necessary levels of protection or more often, they've fallen on the wrong side of public authorities. Iron Fish addresses this impasse with a leading edge platform with built-in compliance controls.",
  },
});

export function OurPrinciples() {
  const expandingListProps = useAutoExpandingList();
  const { formatMessage } = useIntl();

  return (
    <Container w="100%" maxW="container.xl" py="150px">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={10}
      >
        <GridItem>
          <Text textStyle="h3" mb={2}>
            {formatMessage(messages.ourPrinciples)}
          </Text>
          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.encryptionHeading)}
                </Heading>
              }
              body={
                <Box>
                  <Text mb={6}>{formatMessage(messages.encryptionBody1)}</Text>
                  <Text>{formatMessage(messages.encryptionBody2)}</Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image1} />
                  </Box>
                </Box>
              }
            />
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.buildTogetherHeading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.buildTogetherBody)}</Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image2} />
                  </Box>
                </Box>
              }
            />
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.complianceHeading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.complianceBody)}</Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image3} />
                  </Box>
                </Box>
              }
            />
          </AutoExpandingList>
        </GridItem>
        <GridItem
          display={{
            base: "none",
            md: "flex",
          }}
          justifyContent="flex-end"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={expandingListProps.activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {expandingListProps.activeIndex in IMAGE_BY_INDEX &&
                IMAGE_BY_INDEX[
                  expandingListProps.activeIndex as keyof typeof IMAGE_BY_INDEX
                ]}
            </motion.div>
          </AnimatePresence>
        </GridItem>
      </Grid>
    </Container>
  );
}
