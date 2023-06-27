import { Container, Text, Heading, Grid, GridItem, Box } from "@/lib/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/AutoExpandingList/AutoExpandingList";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CHIP_COLORS } from "../shared/chipColors";
import image1 from "./assets/image-01.svg";
import image2 from "./assets/image-02.svg";
import image3 from "./assets/image-03.svg";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
};

export function FeatureListB() {
  const expandingListProps = useAutoExpandingList();

  return (
    <Box color="white" bg="black" py="150px">
      <Container w="100%" maxW="container.xl">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={10}
        >
          <GridItem
            display={{
              base: "none",
              md: "flex",
            }}
            justifyContent="flex-start"
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
          <GridItem>
            <Text textStyle="h3" mb={2}>
              Privacy Needs a Home
            </Text>
            <AutoExpandingList theme="dark" {...expandingListProps}>
              <AutoExpandingList.Item
                chipColor={CHIP_COLORS.GREEN}
                heading={<Heading fontSize="xl">Decentralized Privacy</Heading>}
                body={
                  <Box>
                    <Text>
                      The more the ecosystem grows, the stronger and more
                      decentralized it is. Check out the node tab in the app to
                      see all the nodes you&apos;re connected with.
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
                  <Heading fontSize="xl">Accessible, safe crypto</Heading>
                }
                body={
                  <Box>
                    <Text>
                      With the node app, anyone can use Iron Fish for fully
                      encrypted transactions, regardless of technical skill.
                      Send and receive $IRON or custom assets with just a few
                      clicks.
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
                chipColor={CHIP_COLORS.ORANGE}
                heading={
                  <Heading fontSize="xl">Compliance, not compromise</Heading>
                }
                body={
                  <Box>
                    <Text>
                      Like all Iron Fish users, node app users receive a set of
                      view keys that allow them to provide read-only access to
                      their transaction records. You can offer this access when
                      proof of payment or other compliance tasks are necessary.
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
            </AutoExpandingList>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
