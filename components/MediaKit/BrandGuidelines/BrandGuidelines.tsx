import {
  Box,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox,
  Grid,
  GridItem,
  Flex,
  Spacer,
} from "@/lib/ui";
import { ReactNode } from "react";
import Image from "next/image";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import LogoMargins from "./assets/logo-margins.svg";
import LogoDo from "./assets/logo-do.svg";
import LogoDont from "./assets/logo-dont.svg";

const sections = [
  {
    heading: "Brand Colors",
    description:
      "Our brand colors are chosen to be fun, playful and dynamic. Our main colors are pink, green and blue.",
    figure: <Colors />,
  },
  {
    heading: "Logo Margin",
    description:
      "The Iron Fish logo and mark should have at minimum 32px of spacing between it and other elements.",
    figure: (
      <Box mb="70px">
        <Image src={LogoMargins} alt="Logo Margins" />
      </Box>
    ),
  },
  {
    heading: "Logo Contrast",
    description:
      "Our logo and mark should mainly be black on a light background. When using a dark background, use white.",
    figure: <Contrast />,
  },
  {
    heading: "Logo Construction ",
    description:
      "Do not alter the layout of our full logo by changing the location of the hex fish in relation to the word.",
    figure: (
      <Box mb="120px">
        <Do />
        <Image src={LogoDo} alt="Example of correct logo usage" />
        <Spacer h="50px" />
        <Dont />
        <Image src={LogoDont} alt="Example of incorrect logo usage" />
      </Box>
    ),
  },
];

export function BrandGuidelines() {
  return (
    <Box bg="purple.400" borderY="2px solid black">
      <Container
        maxW="container.2xl"
        py={{
          base: "4rem",
          md: "8rem",
          lg: "9rem",
        }}
        pr={{
          base: 3,
          md: 8,
        }}
        pl={{
          lg: "40px",
          xl: "64px",
          "2xl": "128px",
        }}
      >
        <StickySideBySideView>
          <StickySideBySideView.Item>
            <Text textStyle="h3" mb={8}>
              Brand Guidelines
            </Text>
            <Text textStyle="lg">
              You&apos;re encouraged to use the Iron Fish guidelines when
              displaying the logo and marks. We&apos;ll outline different use
              cases of our brand assets as well as provide our brand colors.
            </Text>
          </StickySideBySideView.Item>
          <StickySideBySideView.Item>
            {sections.map((section, i) => (
              <Section
                key={i}
                heading={section.heading}
                description={section.description}
                figure={section.figure}
              />
            ))}
          </StickySideBySideView.Item>
        </StickySideBySideView>
      </Container>
    </Box>
  );
}

type SectionProps = {
  heading: string;
  description: string;
  figure?: ReactNode;
};

function Section({ heading, description, figure }: SectionProps) {
  return (
    <Box mb={8}>
      <Box
        maxW={{
          base: "100%",
          md: "450px",
        }}
      >
        <ShadowBox p={12}>
          {figure}
          <Text textStyle="h4" mb={5}>
            {heading}
          </Text>
          <Text>{description}</Text>
        </ShadowBox>
      </Box>
    </Box>
  );
}

const COLORS = [
  { value: "#FFF4E0" },
  { value: "#FFEC1F" },
  { value: "#FFCD85" },
  { value: "#FFC2E8" },
  { value: "#DE83F0" },
  { value: "#F15929" },
  { value: "#8AE1EF" },
  { value: "#2C72FF" },
  { value: "#1D0070", textColor: "white" },
  { value: "#C7F182" },
  { value: "#63D798" },
  { value: "#389810" },
];

function Colors() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} mb="84px">
      {COLORS.map((item) => (
        <GridItem
          key={item.value}
          bg={item.value}
          h="44px"
          border="2px solid black"
          borderRadius="3px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={item.textColor || "black"}>{item.value}</Text>
        </GridItem>
      ))}
    </Grid>
  );
}

function ContrastFish({ bg, color }: { bg: string; color: string }) {
  return (
    <Flex justifyContent="center" py={8} bg={bg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={27}
        fill="none"
      >
        <path
          fill={color}
          d="m41.876 12.8-1.338-2.403-4.537-8.153-.975-1.752A.937.937 0 0 0 34.207 0h-13.7a.937.937 0 0 0-.818.492l-1.091 1.961-4.793 8.617a.425.425 0 0 1-.474.201.43.43 0 0 1-.31-.42V6.753C13.02 3.03 10.1 0 6.51 0H.946C.423 0 0 .439 0 .98v5.774c0 2.694 1.545 5.101 3.936 6.135.157.067.26.227.26.4v.004a.44.44 0 0 1-.26.403C1.56 14.723.014 17.116 0 19.792v5.816c0 .542.423.98.945.98h5.563c3.59 0 6.509-3.03 6.509-6.753v-4.096c0-.198.13-.372.31-.421a.422.422 0 0 1 .474.205l5.104 9.168.78 1.406a.937.937 0 0 0 .82.492h13.699a.937.937 0 0 0 .818-.492l1.45-2.606 3.408-6.127.048-.089 1.565-2.814.376-.676a1.01 1.01 0 0 0 .007-.984ZM27.46 18.455c-2.671 0-4.847-2.315-4.847-5.161 0-2.846 2.172-5.162 4.847-5.162 2.67 0 4.847 2.316 4.847 5.162s-2.176 5.161-4.847 5.161Z"
        />
      </svg>
    </Flex>
  );
}

function Do() {
  return (
    <Text color="#389810" display="flex" alignItems="center" gap={2} mb={1}>
      <IoMdCheckmark />
      Do...
    </Text>
  );
}

function Dont() {
  return (
    <Text color="#F15929" display="flex" alignItems="center" gap={2} mb={1}>
      <IoMdClose />
      Don&apos;t...
    </Text>
  );
}

function Contrast() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4} mb="64px">
      <GridItem>
        <Do />
        <ContrastFish bg="#FFEC1F" color="black" />
      </GridItem>
      <GridItem>
        <Dont />
        <ContrastFish bg="#FFEC1F" color="white" />
      </GridItem>
      <GridItem>
        <Do />
        <ContrastFish bg="#1D0070" color="white" />
      </GridItem>
      <GridItem>
        <Dont />
        <ContrastFish bg="#1D0070" color="#8AE1EF" />
      </GridItem>
    </Grid>
  );
}
