import { Box, Flex, Input, Text, chakra, VStack } from "@/lib/ui";
import {
  useMailchimpSubscribe,
  MAILCHIMP_MESSAGES,
} from "./useMailchimpSubscribe";

export function NewsletterSignUp({ bordered }: { bordered?: boolean }) {
  const { subscribe, status, handleEmailChange } = useMailchimpSubscribe();

  return (
    <VStack justifyContent="stretch" width="100%" maxW="660px">
      <Flex
        gap={{
          base: 4,
          md: bordered ? 0 : 2,
        }}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        w="100%"
      >
        <Input
          bg="white"
          border={bordered ? "2px solid black" : 0}
          borderRadius={{
            base: 4,
            md: "4px 0 0 4px",
          }}
          flexGrow={1}
          borderRightWidth={
            bordered
              ? {
                  base: 2,
                  md: 0,
                }
              : undefined
          }
          color="black"
          height="72px"
          onChange={handleEmailChange}
          placeholder="Your Email Address"
          px={6}
          textStyle="md"
          type="text"
          textAlign={{
            base: "center",
            md: "left",
          }}
          _placeholder={{
            color: "#7F7F7F",
          }}
        />
        <chakra.button
          bg="pink.400"
          border={bordered ? "2px solid black" : 0}
          borderRadius={{
            base: 4,
            md: "0 4px 4px 0",
          }}
          color="black"
          height="72px"
          onClick={subscribe}
          px={10}
          textStyle="md"
          whiteSpace="nowrap"
          transition="background-color"
          transitionDuration="fast"
          _hover={{
            bg: "purple.500",
          }}
          _focus={{
            bg: "purple.500",
          }}
        >
          Subscribe
        </chakra.button>
      </Flex>

      {status in MAILCHIMP_MESSAGES && (
        <Box mt={4}>
          <Text>
            {MAILCHIMP_MESSAGES[status as keyof typeof MAILCHIMP_MESSAGES]}
          </Text>
        </Box>
      )}
    </VStack>
  );
}
