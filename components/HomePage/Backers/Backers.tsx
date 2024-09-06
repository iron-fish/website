import { Box, Text } from "@/lib/ui";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { defineMessages, useIntl } from "react-intl";
import ImgA16z from "./assets/backer-a16z.png";
import ImgElad from "./assets/backer-elad.png";
import ImgSequoia from "./assets/backer-sequoia.png";
import ImgElectric from "./assets/backer-electric.png";
import ImgLinda from "./assets/backer-linda.png";
import ImgDragonfly from "./assets/backer-dragonfly.png";

const messages = defineMessages({
  heading: {
    id: "Backers.heading",
    defaultMessage: "Founded by veterans and top investors",
  },
});

export function Backers() {
  const { formatMessage } = useIntl();

  return (
    <Box mb={20}>
      <Text fontSize="md" textAlign="center" textTransform="uppercase" mb={8}>
        {formatMessage(messages.heading)}
      </Text>
      <Marquee autoFill>
        {[
          ImgLinda,
          ImgElad,
          ImgSequoia,
          ImgElectric,
          ImgA16z,
          ImgDragonfly,
        ].map((img, i) => (
          <Box key={i} mx={16} filter="grayscale(1)">
            <Image src={img} height={30} alt="" />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
