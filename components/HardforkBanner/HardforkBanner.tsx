import { Container, Flex, HStack, Link, Text } from "@/lib/ui";
import { RightCaret } from "@/lib/ui/src/icons/RightCaret/RightCaret";

export function HardforkBanner() {
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
            The hardfork is coming on April 2nd, 12 PM GMT.&nbsp;
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
