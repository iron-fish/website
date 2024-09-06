import { Box } from "@/lib/ui";
import { FancyLinkSection } from "../../FancyLinkSection/FancyLinkSection";

const BG = "#C7F182";

export function Tokenomics() {
  return (
    <Box bg={BG} py="150px" borderY="1px solid black">
      <FancyLinkSection
        reverse
        heading="Understanding our Tokenomics"
        description={`Learn how Iron Fish's tokenomics are designed to foster community participation and to secure the network, with a capped token supply and strategic distribution to reward early contributors.`}
        ctaText="Learn More"
        ctaLink="/learn/tokenomics"
        imageUrl="/images/home/fish-coins.svg"
        containerProps={{
          bg: BG,
          maxW: {
            base: "704px",
            lg: "1600px",
          },
          w: "100%",
          mb: {
            base: 24,
            md: 32,
            xl: "150px",
          },
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
