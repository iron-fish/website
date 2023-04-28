import { Box, VStack, Text, HStack, Grid, GridItem } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  command: string;
  output: string | string[];
};

const dracula = {
  black: "#282a36",
  green: "#50fa7b",
  white: "#f8f8f2",
};

export function Terminal({ command, output }: Props) {
  return (
    <Box bg={dracula.black} my={6} borderRadius={8} p={4} pb={6}>
      <Grid templateColumns="1fr auto 1fr" mb={6}>
        <GridItem>
          <HStack>
            <Box bg="purple.900" borderRadius="full" w="10px" h="10px" />
            <Box bg="yellow.500" borderRadius="full" w="10px" h="10px" />
            <Box bg="green.900" borderRadius="full" w="10px" h="10px" />
          </HStack>
        </GridItem>
        <GridItem>
          <Text
            color="rgba(255, 255, 255, 0.7)"
            fontSize="xs"
            fontWeight="bold"
            aria-hidden="true"
            _selection={{
              bg: "blue",
              color: "white",
            }}
          >
            Terminal 🐟
          </Text>
        </GridItem>
      </Grid>
      <VStack
        alignItems="stretch"
        _selection={{
          bg: "blue",
          color: "white",
        }}
      >
        <TerminalText color={dracula.green} mb={2}>
          {">"} {command}
        </TerminalText>

        {typeof output === "string" ? (
          <TerminalText>{output}</TerminalText>
        ) : (
          <VStack alignItems="stretch">
            {output.map((item, i) => (
              <TerminalText key={i}>{item}</TerminalText>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
}

function TerminalText(props: ComponentProps<typeof Text>) {
  return (
    <Text
      fontFamily="monospace"
      whiteSpace="pre-wrap"
      color={dracula.white}
      fontSize="xs"
      _selection={{
        bg: "blue",
        color: "white",
      }}
      {...props}
    />
  );
}
