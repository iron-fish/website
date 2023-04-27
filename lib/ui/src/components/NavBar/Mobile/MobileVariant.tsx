import { Button, HStack, Box, VStack, Text, Grid } from "@chakra-ui/react";
import { useLockedBody } from "usehooks-ts";
import { NavItems } from "../types";
import {
  RxHamburgerMenu,
  RxCross1,
  RxChevronDown,
  RxChevronUp,
  RxChevronRight,
} from "react-icons/rx";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import { ShadowBox } from "../../ShadowBox/ShadowBox";
import { Category } from "./Category";
import { FancyArrowRight } from "../../../icons";
import { NAV_HEIGHT } from "../NavBar";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

export function MobileVariant({ content }: { content: NavItems }) {
  const [isOpen, setLocked] = useLockedBody(false);
  const router = useRouter();

  const toggleMobileMenu = useCallback(() => {
    setLocked(!isOpen);
  }, [isOpen, setLocked]);

  useEffect(() => {
    return () => {
      setLocked(false);
    };
  }, [setLocked]);

  useEffect(() => {
    function handleRouteChange() {
      setLocked(false);
    }

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, setLocked]);

  return (
    <>
      <HStack alignItems="stretch">
        <HStack>
          <Button
            borderRadius="full"
            height={{
              base: "52px",
              sm: "64px",
            }}
            width={{
              base: "52px",
              sm: "64px",
            }}
            position="relative"
            padding={0}
            onClick={toggleMobileMenu}
          >
            <Box position="absolute">
              {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </Box>
          </Button>
        </HStack>
      </HStack>
      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 1.5px)"
          left={0}
          right={0}
          pt="2px"
          as={Accordion}
          overflow="auto"
          bg="white"
          allowToggle
          height={`calc(100vh - ${NAV_HEIGHT})`}
        >
          <VStack alignItems="stretch" padding={2} pb={24}>
            {content.map((item, i) => {
              if ("items" in item) {
                const category = item;
                return (
                  <AccordionItem key={i}>
                    {({ isExpanded }) => (
                      <ShadowBox shadowColor={`${category.color}.500`}>
                        <AccordionButton
                          _hover={{
                            bg: "transparent",
                          }}
                          p={0}
                        >
                          <HStack
                            justify="space-between"
                            align="center"
                            width="100%"
                            px={8}
                            py={6}
                          >
                            <Text textStyle="h5">{category.label}</Text>
                            {isExpanded ? (
                              <RxChevronUp size="30" />
                            ) : (
                              <RxChevronDown size="30" />
                            )}
                          </HStack>
                        </AccordionButton>
                        <AccordionPanel>
                          <Grid
                            templateColumns={{
                              base: "repeat(1, 1fr)",
                              lg: "repeat(2, 1fr)",
                            }}
                          >
                            {category.items.map(
                              ({ title, href, image, description }, i) => (
                                <Category
                                  key={i}
                                  title={title}
                                  description={description}
                                  href={href}
                                  image={image}
                                  color={category.color}
                                />
                              )
                            )}
                          </Grid>
                        </AccordionPanel>
                      </ShadowBox>
                    )}
                  </AccordionItem>
                );
              }

              return (
                <ShadowBox
                  shadowColor={`purple.500`}
                  key={i}
                  as={item.href.startsWith("http") ? "a" : Link}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <HStack
                    justify="space-between"
                    align="center"
                    width="100%"
                    px={8}
                    py={6}
                  >
                    <Text textStyle="h5">{item.label}</Text>
                    <RxChevronRight size="30" />
                  </HStack>
                </ShadowBox>
              );
            })}
            <Box py={6}>
              <Button size="lg" as={Link} href="/use/get-started">
                <Box mr={4}>Get Started</Box>
                <FancyArrowRight />
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
}
