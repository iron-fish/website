import { Box, Flex, HStack, List, ListItem, Text, GridItem } from "@/lib/ui";
import Link from "next/link";
import { NewsletterSignUp } from "../NewsletterSignUp/NewsletterSignUp";
import { useNavLinks } from "../../shared/navLinks/useNavLinks";
import { Circle } from "./assets/Circle";
import { Logo } from "./assets/Logo";
import { BsTwitter, BsDiscord, BsGithub, BsTelegram } from "react-icons/bs";
import { defineMessages, useIntl } from "react-intl";
import { CONSTANTS } from "../../shared/constants";
import { CategoryNavItem } from "@/lib/ui";

const messages = defineMessages({
  newsletter: {
    id: "footer.newsletter",
    defaultMessage:
      "Join our newsletter and stay up to date with privacy and crypto.",
  },
});

export function Footer() {
  const links = useNavLinks();
  const { formatMessage } = useIntl();
  return (
    <Box
      bg="black"
      color="white"
      py={24}
      px={{
        base: 8,
        md: 16,
      }}
    >
      <Box mb={24}>
        <Logo />
      </Box>
      <Text
        fontSize={{
          base: "24px",
          md: "36px",
        }}
        maxW="25ch"
        mb={8}
        fontFamily="FavoritExtendedIf"
      >
        {formatMessage(messages.newsletter)}
      </Text>
      <Box mb={24} display="flex" w="100%" justifyContent="flex-start">
        <NewsletterSignUp />
      </Box>
      <Box
        display={{
          base: "grid",
          lg: "flex",
        }}
        mb={24}
        justifyContent="space-between"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: undefined,
        }}
      >
        {links
          .filter((link): link is CategoryNavItem => "items" in link)
          .map((category, i, arr) => {
            const categoryColor = `${category.color}.500`;
            return (
              <GridItem
                key={i}
                mb={{
                  base: 16,
                  lg: 0,
                }}
                mr={
                  arr.length === i + 1
                    ? {
                        base: 0,
                        lg: "3vw",
                      }
                    : undefined
                }
              >
                <Text color={categoryColor} fontStyle="sm" mb={3}>
                  {category.label}
                </Text>
                <List>
                  {category.items.map((item, i) => {
                    return (
                      <ListItem key={i} mb={3}>
                        <Text
                          as={Link}
                          href={item.href}
                          fontStyle="sm"
                          color="rgba(255, 255, 255, 0.7)"
                          _hover={{
                            color: categoryColor,
                            transition: "color 0.2s",
                            opacity: 1,
                          }}
                        >
                          {item.title}
                        </Text>
                      </ListItem>
                    );
                  })}
                </List>
              </GridItem>
            );
          })}
      </Box>
      <Flex
        alignItems={{
          base: "flex-start",
          lg: "center",
        }}
        w="100%"
        flexDirection={{
          base: "column",
          lg: "row",
        }}
      >
        <Flex
          alignItems="center"
          w="100%"
          mb={{
            base: 16,
            lg: 0,
          }}
        >
          <Circle />
          <Flex
            ml={4}
            alignItems={{
              base: "flex-start",
              md: "center",
            }}
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <Text
              as={Link}
              href="/privacy-policy"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </Text>
            <Text
              mx={2}
              display={{
                base: "none",
                md: "block",
              }}
            >
              |
            </Text>
            <Text>Copyright {new Date().getFullYear()} Iron Fish.</Text>
          </Flex>
        </Flex>
        <HStack
          alignItems="center"
          flexGrow={1}
          justifyContent={{
            base: "space-between",
            lg: "flex-end",
          }}
          w={{
            base: "100%",
            lg: "auto",
          }}
          gap={{
            base: 4,
            md: 16,
          }}
        >
          <Link
            href={CONSTANTS.SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter size={30} />
          </Link>
          <Link
            href={CONSTANTS.SOCIAL_LINKS.discord}
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord size={30} />
          </Link>
          <Link
            href={CONSTANTS.SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={30} />
          </Link>
          <Link
            href={CONSTANTS.SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram size={30} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
