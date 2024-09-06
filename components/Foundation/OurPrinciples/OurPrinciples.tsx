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

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
};

export function OurPrinciples() {
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
            Our Principles
          </Text>
          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  Encryption is the Future of Crypto
                </Heading>
              }
              body={
                <Box>
                  <Text mb={6}>
                    Privacy is a fundamental right, and yet everyday people give
                    away personal information — often without even realizing it.
                    We empower users to decide when and how to share their data,
                    by ensuring all transactions are encrypted.
                  </Text>
                  <Text>
                    We do not compromise on protection — using zero-knowledge
                    proofs (zk-SNARKs) and the highest industry standards for
                    encryption.
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
              chipColor={CHIP_COLOR}
              heading={<Heading fontSize="xl">We Build, Together</Heading>}
              body={
                <Box>
                  <Text>
                    As a decentralized, open-source network, Iron Fish relies on
                    an engaged community to support protocol development and
                    raise awareness of privacy as a social good. Our community
                    is the heart of our platform.
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
              chipColor={CHIP_COLOR}
              heading={<Heading fontSize="xl">Common Sense Compliance</Heading>}
              body={
                <Box>
                  <Text>
                    To date, crypto privacy projects have either failed to offer
                    necessary levels of protection or more often, they&apos;ve
                    fallen on the wrong side of public authorities. Iron Fish
                    addresses this impasse with a leading edge platform with
                    built-in compliance controls.
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
