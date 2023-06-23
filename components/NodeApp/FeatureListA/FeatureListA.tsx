import { Container, Text, Heading, Grid, GridItem } from "@/lib/ui";
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

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
  3: <Image alt="" src={image4} />,
};

export function FeatureListA() {
  const expandingListProps = useAutoExpandingList();

  return (
    <Container w="100%" maxW="container.xl" py="150px">
      {/* <Text
        as="h2"
        textStyle="h3"
        mt={{
          base: "50px",
          md: "100px",
          lg: "150px",
        }}
        mb={{
          base: "96px",
          md: "128px",
          lg: "150px",
        }}
        textAlign="center"
      >
        Download the Node App
      </Text> */}
      <Grid templateColumns="repeat(2, 1fr)" mb="200px" gap={10}>
        <GridItem>
          <Text textStyle="h3" mb={10}>
            The perfect app for everyday use
          </Text>
          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              heading={
                <Heading fontSize="xl">
                  Easy Access to Iron Fish Network
                </Heading>
              }
              body={
                <Text>
                  Once the app has synced the node, you can start using $IRON
                  and your custom assets right away. If you do use the command
                  line wallet, anything you do there is reflected in the node
                  app, and vice versa.
                </Text>
              }
            />
            <AutoExpandingList.Item
              heading={
                <Heading fontSize="xl">Centralized Account View</Heading>
              }
              body={
                <Text>
                  Access a centralized view of all your accounts: address book,
                  balances, transactions, and more.
                </Text>
              }
            />
            <AutoExpandingList.Item
              heading={<Heading fontSize="xl">Encryption Made Simple</Heading>}
              body={
                <Text>
                  The node app has the same level of security as running a node
                  via the command line, and is more secure than using third
                  party applications.
                </Text>
              }
            />
            <AutoExpandingList.Item
              heading={
                <Heading fontSize="xl">Bridge Assets [Coming Soon]</Heading>
              }
              body={
                <Text>
                  Soon you&apos;ll be able to encrypt assets like Bitcoin and
                  Ethereum, we pave the way for complete privacy in web3
                  transactions. Unlocking the true potential of a private and
                  secure blockchain ecosystem.
                </Text>
              }
            />
          </AutoExpandingList>
        </GridItem>
        <GridItem display="flex" justifyContent="flex-end">
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
