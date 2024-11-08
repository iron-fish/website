import { Box } from "@/lib/ui";
import { FancyLinkSection } from "../../FancyLinkSection/FancyLinkSection";
import { defineMessages, useIntl } from "react-intl";

const BG = "#C7F182";

const messages = defineMessages({
  heading: {
    id: "Tokenomics.heading",
    defaultMessage: "Tokenomics",
  },
  description: {
    id: "Tokenomics.description",
    defaultMessage:
      "Iron Fish's tokenomics are designed to foster community participation and to secure the network, with a capped token supply and strategic distribution to reward early contributors.",
  },
  ctaText: {
    id: "Tokenomics.ctaText",
    defaultMessage: "Learn More",
  },
});

export function Tokenomics() {
  const { formatMessage } = useIntl();

  return (
    <Box
      bg={BG}
      py={{
        base: 24,
        md: 32,
        xl: "150px",
      }}
      borderY="1px solid black"
    >
      <FancyLinkSection
        reverse
        heading={formatMessage(messages.heading)}
        description={formatMessage(messages.description)}
        ctaText={formatMessage(messages.ctaText)}
        ctaLink="/learn/tokenomics"
        imageUrl="/images/home/fish-coins.svg"
        containerProps={{
          bg: BG,
          maxW: {
            base: "704px",
            lg: "1600px",
          },
          w: "100%",
          pl: {
            lg: "40px",
            xl: "64px",
            "2xl": "128px",
          },
        }}
      />
    </Box>
  );
}
