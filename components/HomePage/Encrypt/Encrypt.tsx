import { FancyLinkSection } from "../../FancyLinkSection/FancyLinkSection";

export function Encrypt() {
  return (
    <FancyLinkSection
      heading="Encrypt your Crypto"
      description={`Multi-asset functionality enables bridge providers to transfer any crypto asset to the Iron Fish network for private transactions.`}
      ctaText="Read our Whitepaper"
      ctaLink="/learn/whitepaper"
      imageUrl="/images/home/balloon-fish.svg"
      containerProps={{
        maxW: {
          base: "704px",
          lg: "1600px",
        },
        w: "100%",
        py: {
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
  );
}
