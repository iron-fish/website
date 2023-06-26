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

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
  3: <Image alt="" src={image4} />,
};

function ComingSoon() {
  return (
    <Box
      textTransform="uppercase"
      bg="#F3F3F4"
      color="#7F7F7F"
      borderRadius="full"
      fontSize="sm"
      px={3}
    >
      Coming Soon
    </Box>
  );
}

export function FeatureListA() {
  const expandingListProps = useAutoExpandingList();

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
            The perfect app for everyday use
          </Text>
          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLORS.GREEN}
              heading={
                <Heading fontSize="xl">
                  Easy Access to Iron Fish Network
                </Heading>
              }
              body={
                <Box>
                  <Text>
                    Once the app has synced the node, you can start using $IRON
                    and your custom assets right away. If you do use the command
                    line wallet, anything you do there is reflected in the node
                    app, and vice versa.
                  </Text>
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
                <Heading fontSize="xl">Centralized Account View</Heading>
              }
              body={
                <Box>
                  <Text>
                    Access a centralized view of all your accounts: address
                    book, balances, transactions, and more.
                  </Text>
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
              heading={<Heading fontSize="xl">Encryption Made Simple</Heading>}
              body={
                <Box>
                  <Text>
                    The node app has the same level of security as running a
                    node via the command line, and is more secure than using
                    third party applications.
                  </Text>
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
                  <Heading fontSize="xl">Bridge Assets</Heading>
                  <ComingSoon />
                </Flex>
              }
              body={
                <Box>
                  <Text>
                    Soon you&apos;ll be able to encrypt assets like Bitcoin and
                    Ethereum, we pave the way for complete privacy in web3
                    transactions. Unlocking the true potential of a private and
                    secure blockchain ecosystem.
                  </Text>
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
