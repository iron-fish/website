import { Container, Text, Heading, Grid, GridItem, Box, Flex } from "@/lib/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/AutoExpandingList/AutoExpandingList";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "./assets/image-01.svg";
import image2 from "./assets/image-02.svg";
import image3 from "./assets/image-03.svg";
import image4 from "./assets/image-04.svg";
import { CHIP_COLORS } from "../shared/chipColors";
import { defineMessages, useIntl } from "react-intl";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
  3: <Image alt="" src={image4} />,
};

const messages = defineMessages({
  title: {
    id: "FeatureListA.title",
    defaultMessage: "The perfect app for everyday use",
  },
  feature1Heading: {
    id: "FeatureListA.feature1Heading",
    defaultMessage: "Easy Access to Iron Fish Network",
  },
  feature1Body: {
    id: "FeatureListA.feature1Body",
    defaultMessage:
      "Once the app has synced the node, you can start using $IRON and your custom assets right away. If you do use the command line wallet, anything you do there is reflected in the node app, and vice versa.",
  },
  feature2Heading: {
    id: "FeatureListA.feature2Heading",
    defaultMessage: "Centralized Account View",
  },
  feature2Body: {
    id: "FeatureListA.feature2Body",
    defaultMessage:
      "Access a centralized view of all your accounts: address book, balances, transactions, and more.",
  },
  feature3Heading: {
    id: "FeatureListA.feature3Heading",
    defaultMessage: "Encryption Made Simple",
  },
  feature3Body: {
    id: "FeatureListA.feature3Body",
    defaultMessage:
      "The node app has the same level of security as running a node via the command line, and is more secure than using third party applications.",
  },
  feature4Heading: {
    id: "FeatureListA.feature4Heading",
    defaultMessage: "Bridge Assets",
  },
  feature4Body: {
    id: "FeatureListA.feature4Body",
    defaultMessage:
      "We are the first to support multi-asset transactions, we pave the way for complete privacy in web3 transactions. Unlocking the true potential of a private and secure blockchain ecosystem.",
  },
});

export function FeatureListA() {
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
            {formatMessage(messages.title)}
          </Text>
          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLORS.GREEN}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.feature1Heading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.feature1Body)}</Text>
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
              chipColor={CHIP_COLORS.PINK}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.feature2Heading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.feature2Body)}</Text>
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
              chipColor={CHIP_COLORS.BLUE}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.feature3Heading)}
                </Heading>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.feature3Body)}</Text>
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
            <AutoExpandingList.Item
              chipColor={CHIP_COLORS.ORANGE}
              heading={
                <Flex
                  flexDirection={{
                    base: "column",
                    md: "row",
                  }}
                  alignItems={{
                    base: "flex-start",
                    md: "center",
                  }}
                  gap={{
                    base: 4,
                    md: 2,
                  }}
                  justifyContent="space-between"
                  w="100%"
                >
                  <Heading fontSize="xl">
                    {formatMessage(messages.feature4Heading)}
                  </Heading>
                </Flex>
              }
              body={
                <Box>
                  <Text>{formatMessage(messages.feature4Body)}</Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  >
                    <Image alt="" src={image4} />
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
