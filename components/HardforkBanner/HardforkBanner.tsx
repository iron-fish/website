import { Box, Flex, Link, Text } from "@/lib/ui";
import { RightCaret } from "@/lib/ui/src/icons/RightCaret/RightCaret";
import { format } from "date-fns";

const HARDFORK_DATE = new Date("2024-04-02T12:00:00Z");

export function HardforkBanner() {
  if (new Date() > HARDFORK_DATE) {
    return null;
  }

  return (
    <Flex
      bg="black"
      color="white"
      minHeight={{
        base: "78px",
        sm: "52px",
      }}
      justifyContent={{
        sm: "center",
      }}
      alignItems="center"
      gap={1}
      flexWrap="wrap"
      padding={{
        base: 4,
        sm: 0,
      }}
    >
      <Text>
        The hardfork is coming on&nbsp;
        <Text color="purple.400" as="span">
          {format(HARDFORK_DATE, "MMMM do, h b z")}.
        </Text>
      </Text>
      <Link href="/learn/blog/2024-02-26-testnet-hardfork">
        <Flex justifyContent="center" alignItems="center">
          Learn more&nbsp;
          <Box as="span" marginTop={0.5}>
            <RightCaret />
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
}
