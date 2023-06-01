import Head from "next/head";
import {
  Box,
  Container,
  Hero,
  HeroImageUtil,
  Text,
  LocalImage,
  Grid,
  GridItem,
  ShadowBox,
  AspectRatio,
  ThickLink,
  ArrowButton,
} from "@/lib/ui";
import plug from "@/assets/heroImages/ecosystem/plug.svg";
import hands from "@/assets/heroImages/ecosystem/hands.svg";
import footGuy from "@/assets/heroImages/ecosystem/foot-guy.svg";
import Image from "next/image";
import { ECOSYSTEM, ECOSYSTEM_TYPES } from "@/content/ecosystem/ecosystem";
import {
  Filter,
  useFilterOptions,
} from "@/lib/ui/src/components/Filters/Filter";

const plugImage = plug as LocalImage;
const handsImage = hands as LocalImage;
const footGuyImage = footGuy as LocalImage;

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
].concat(
  ECOSYSTEM_TYPES.map((type) => ({
    label: type,
    value: type,
  }))
);

export default function Ecosystem() {
  const { options, selectedOption, handleFilterChange } =
    useFilterOptions(filterOptions);

  const filteredOptions = ECOSYSTEM.filter((item) =>
    selectedOption.value === "all" ? true : item.type === selectedOption.value
  );

  return (
    <>
      <Head>
        <title>Iron Fish Ecosystem | Wallets, Tools, Integrations</title>
      </Head>
      <Box mb="150px">
        <Hero
          bg="orange.500"
          heading="Ecosystem"
          subheading="How Will You Use Iron Fish?"
          description="Our ecosystem is vast and offers a variety of apps and integrations to choose from."
          images={
            <>
              <HeroImageUtil
                image={plugImage}
                top={{
                  md: "-80px",
                  xl: "10px",
                }}
                left={{
                  md: "-120px",
                  xl: "30px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
              <HeroImageUtil
                image={handsImage}
                bottom={{
                  md: "-80px",
                  xl: "15px",
                }}
                left={{
                  md: "-50px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 850px)`,
                }}
              />
              <HeroImageUtil
                image={footGuyImage}
                top={{
                  md: "20px",
                  xl: "85px",
                }}
                right={{
                  md: "-120px",
                  xl: "-20px",
                  "2xl": `calc(50vw - 700px)`,
                }}
              />
            </>
          }
        />
        <Container
          w="100%"
          maxW="container.2xl"
          px={{
            base: 6,
            lg: 10,
            xl: 16,
          }}
        >
          <Text
            textStyle="h5"
            my={{
              base: "50px",
              md: "100px",
              lg: "150px",
            }}
            textAlign="center"
            maxW="container.md"
            mx="auto"
          >
            Want to be on this list? Reach out to us at{" "}
            <ThickLink
              underlineColor="orange.500"
              as="a"
              href="mailto:partnerships@ironfish.network"
              cursor="pointer"
            >
              partnerships@ironfish.network
            </ThickLink>
            .
          </Text>
          <Filter
            options={options}
            selectedOption={selectedOption}
            onChange={handleFilterChange}
            mb={16}
          />
          <Grid
            templateColumns={{
              base: "100%",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {filteredOptions.map((item) => {
              return (
                <GridItem key={item.name} display="flex">
                  <ShadowBox
                    shadowColor="white"
                    borderWidth="2px"
                    borderRadius="4px"
                  >
                    <AspectRatio
                      ratio={465 / 309}
                      borderBottom="2px solid black"
                    >
                      <Image alt="" src={item.image} fill />
                    </AspectRatio>
                    <Box p={8} pb={16}>
                      <Text textStyle="sm" mb={4}>
                        {item.type}
                      </Text>
                      <Text as="h3" textStyle="h4" marginBottom={8}>
                        {item.name}
                      </Text>
                      <ArrowButton
                        tilted
                        as="a"
                        target="_blank"
                        rel="noreferrer"
                        href={item.link}
                        size="sm"
                        colorScheme="white"
                      >
                        Visit
                      </ArrowButton>
                    </Box>
                  </ShadowBox>
                </GridItem>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
