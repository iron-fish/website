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
import image4 from "./assets/image-04.svg";
import { defineMessages, useIntl } from "react-intl";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={image1} />,
  1: <Image alt="" src={image2} />,
  2: <Image alt="" src={image3} />,
  3: <Image alt="" src={image4} />,
};

const messages = defineMessages({
  title: {
    id: "FeatureListB.title",
    defaultMessage: "Privacy Needs a Home",
  },
  decentralizedPrivacyHeading: {
    id: "FeatureListB.decentralizedPrivacyHeading",
    defaultMessage: "Decentralized Privacy",
  },
  decentralizedPrivacyBody: {
    id: "FeatureListB.decentralizedPrivacyBody",
    defaultMessage:
      "The more the ecosystem grows, the stronger and more decentralized it is. Check out the node tab in the app to see all the nodes you're connected with.",
  },
  accessibleCryptoHeading: {
    id: "FeatureListB.accessibleCryptoHeading",
    defaultMessage: "Accessible, safe crypto",
  },
  accessibleCryptoBody: {
    id: "FeatureListB.accessibleCryptoBody",
    defaultMessage:
      "With the node app, anyone can use Iron Fish for fully encrypted transactions, regardless of technical skill. Send and receive $IRON or custom assets with just a few clicks.",
  },
  complianceHeading: {
    id: "FeatureListB.complianceHeading",
    defaultMessage: "Compliance, not compromise",
  },
  complianceBody: {
    id: "FeatureListB.complianceBody",
    defaultMessage:
      "Like all Iron Fish users, node app users receive a set of view keys that allow them to provide read-only access to their transaction records. You can offer this access when proof of payment or other compliance tasks are necessary.",
  },
  ledgerSupportHeading: {
    id: "FeatureListB.ledgerSupportHeading",
    defaultMessage: "Ledger Support",
  },
  ledgerSupportBody: {
    id: "FeatureListB.ledgerSupportBody",
    defaultMessage:
      "Physically secure your Iron Fish transactions with full Ledger integration in the Node App. This is the easiest and safest way to secure your assets.",
  },
});

export function FeatureListB() {
  const expandingListProps = useAutoExpandingList();
  const { formatMessage } = useIntl();

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
              {formatMessage(messages.title)}
            </Text>
            <AutoExpandingList theme="dark" {...expandingListProps}>
              <AutoExpandingList.Item
                chipColor={CHIP_COLORS.GREEN}
                heading={
                  <Heading fontSize="xl">
                    {formatMessage(messages.decentralizedPrivacyHeading)}
                  </Heading>
                }
                body={
                  <Box>
                    <Text>
                      {formatMessage(messages.decentralizedPrivacyBody)}
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
                  <Heading fontSize="xl">
                    {formatMessage(messages.accessibleCryptoHeading)}
                  </Heading>
                }
                body={
                  <Box>
                    <Text>{formatMessage(messages.accessibleCryptoBody)}</Text>
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
              <AutoExpandingList.Item
                chipColor={CHIP_COLORS.BLUE}
                heading={
                  <Heading fontSize="xl">
                    {formatMessage(messages.ledgerSupportHeading)}
                  </Heading>
                }
                body={
                  <Box>
                    <Text>{formatMessage(messages.ledgerSupportBody)}</Text>
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
        </Grid>
      </Container>
    </Box>
  );
}
