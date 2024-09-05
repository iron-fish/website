import { Box, Text } from "@/lib/ui";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ImgA16z from "./assets/backer-a16z.png";
import ImgElad from "./assets/backer-elad.png";
import ImgSequoia from "./assets/backer-sequoia.png";
import ImgBalaji from "./assets/backer-balaji.png";
import ImgElectric from "./assets/backer-electric.png";
import ImgLinda from "./assets/backer-linda.png";

export function Backers() {
  return (
    <Box mb={20}>
      <Text fontSize="md" textAlign="center" textTransform="uppercase" mb={8}>
        Founded by veterans and top investors
      </Text>
      <Marquee autoFill>
        {[ImgA16z, ImgElad, ImgSequoia, ImgBalaji, ImgElectric, ImgLinda].map(
          (img, i) => (
            <Box key={i} mx={16} filter="grayscale(1)">
              <Image src={img} height={52} alt="" />
            </Box>
          )
        )}
      </Marquee>
    </Box>
  );
}
