import { Container, Flex, HStack, Link, Text } from "@/lib/ui";
import { RightCaret } from "@/lib/ui/src/icons/RightCaret/RightCaret";
import { format } from "date-fns";

const HARDFORK_DATE = new Date("2024-04-02T12:00:00Z");

export function HardforkBanner() {
  if (new Date() > HARDFORK_DATE) {
    return null;
  }

  return (
    <Flex bg="black" h="52px" alignItems="center">
      <Container
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <HStack>
          <Text color="white">
            The hardfork is coming on {format(HARDFORK_DATE, "MMMM do, h b z")}
            .&nbsp;
          </Text>
          <Link href="/learn/blog/2024-02-26-testnet-hardfork">
            <HStack>
              <Text color="white">Learn more</Text>
              <RightCaret />
            </HStack>
          </Link>
        </HStack>
      </Container>
    </Flex>
  );
}
