import {
  Box,
  Container,
  Divider,
  Grid,
  ShadowBox,
  Text,
  ListItem,
  UnorderedList,
  chakra,
  Code,
} from "@/lib/ui";
import Head from "next/head";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  title: {
    id: "getstarted.title",
    defaultMessage: "Iron Fish | Get Started",
  },
  getStarted: {
    id: "GetStarted.getStarted",
    defaultMessage: "Get Started",
  },
  getStartedSubtitle: {
    id: "GetStarted.getStartedSubtitle",
    defaultMessage:
      "Iron Fish products offer unique benefits, use cases, and encryption levels, with node-based products providing enhanced security.",
  },
  chooseWallet: {
    id: "GetStarted.chooseWallet",
    defaultMessage: "Choose a wallet",
  },
  bridgeYourAssets: {
    id: "GetStarted.bridgeYourAssets",
    defaultMessage: "Bridge your assets",
  },
  oreoWallet: {
    id: "GetStarted.oreoWallet",
    defaultMessage: "Oreo Wallet",
  },
  oreoWalletDescription: {
    id: "GetStarted.oreoWalletDescription",
    defaultMessage:
      "Self-custody browser extension for secure asset transactions and storage.",
  },
  ironfishNodeApp: {
    id: "GetStarted.ironfishNodeApp",
    defaultMessage: "Iron Fish Node App",
  },
  ironfishNodeAppDescription: {
    id: "GetStarted.ironfishNodeAppDescription",
    defaultMessage:
      "GUI to transact and hold assets with the safety of running your own node.",
  },
  ironfishCLI: {
    id: "GetStarted.ironfishCLI",
    defaultMessage: "Iron Fish CLI",
  },
  ironfishCLIDescription: {
    id: "GetStarted.ironfishCLIDescription",
    defaultMessage:
      "A powerful command line interface for developers and advanced users.",
  },
  bridgingIn: {
    id: "GetStarted.bridgingIn",
    defaultMessage: "Bridging in",
  },
  bridgingOut: {
    id: "GetStarted.bridgingOut",
    defaultMessage: "Bridging out",
  },
  bridgingInDescription: {
    id: "GetStarted.bridgingInDescription",
    defaultMessage:
      "Use the Chainport bridge to encrypt your assets from over 20 chains.",
  },
  bridgingOutDescription: {
    id: "GetStarted.bridgingOutDescription",
    defaultMessage: "Bridge your assets to over 20 chains using Chainport.",
  },
  wIronContractAddresses: {
    id: "GetStarted.wIronContractAddresses",
    defaultMessage: "wIRON Contract Addresses",
  },
  wIronContractAddressesDescription: {
    id: "GetStarted.wIronContractAddressesDescription",
    defaultMessage:
      "Below are the contract addresses for wIRON on various chains. Please ensure you're using the correct address when buying or bridging wIRON.",
  },
});

const links = {
  oreowallet:
    "https://chromewebstore.google.com/detail/oreowallet/begbicabkddhcmhemihdnmdhadfkmdkf",
  ironfishnodeapp: "https://ironfish.network/use/node-app",
  ironfishcli: "https://ironfish.network/developers/documentation/install-npm",
  bridgingin: "https://app.chainport.io",
  bridgingout: "https://bridge.ironfish.network",
};

const wIronAddresses = [
  {
    chain: "Ethereum",
    address: "0x1b2b24bb39c20cb2cd9704b3e68f3d6a57ab3747",
    explorer: "https://etherscan.io/token/",
  },
  {
    chain: "Arbitrum",
    address: "0xda4ee8a7c25bafe80e03013da7c28a063bee8d65",
    explorer: "https://arbiscan.io/token/",
  },
  {
    chain: "Optimism",
    address: "0xd554d950e99e7f3b6dc3c8748cfb66ade4818206",
    explorer: "https://optimistic.etherscan.io/token/",
  },
  {
    chain: "Base",
    address: "0x166e70941262ae7cbf9df5c8897a6242c546457d",
    explorer: "https://basescan.org/token/",
  },
];

export default function GetStarted() {
  const { formatMessage } = useIntl();
  return (
    <Box>
      <Head>
        <title>{formatMessage(messages.title)}</title>
      </Head>

      <Container w="100%" maxW="container.xl" px={16} pt={20} pb={32}>
        <Text textStyle="h3" mb={2}>
          {formatMessage(messages.getStarted)}
        </Text>
        <Text textStyle="h6" mb={10} maxW="550px">
          {formatMessage(messages.getStartedSubtitle)}
        </Text>

        <Text textStyle="h4" mb={6}>
          1. {formatMessage(messages.chooseWallet)}
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            xl: "repeat(3, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
          mb={10}
        >
          <ShadowBox
            as="a"
            href={links.oreowallet}
            target="_blank"
            rel="noreferrer"
            shadowColor="white"
            borderWidth="2px"
            borderRadius="4px"
            h="222px"
            cursor="pointer"
            hoverShadowColor="black"
            transition="transform 0.2s"
          >
            <Box
              p={8}
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <div>
                <Box
                  bg="#FFCD8580"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  px={3}
                  py={1}
                  borderRadius="full"
                  mb={8}
                  width="fit-content"
                >
                  <Star />
                  <Text color="#97641B" fontSize="xs">
                    User friendly
                  </Text>
                </Box>
              </div>
              <Box>
                <Text
                  fontFamily="FavoritExtendedIF"
                  fontSize={{
                    base: "16px",
                    sm: "20px",
                  }}
                  mb={2}
                >
                  {formatMessage(messages.oreoWallet)}
                </Text>
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                  }}
                >
                  {formatMessage(messages.oreoWalletDescription)}
                </Text>
              </Box>
            </Box>
          </ShadowBox>
          <ShadowBox
            as="a"
            href={links.ironfishnodeapp}
            target="_blank"
            rel="noreferrer"
            shadowColor="white"
            borderWidth="2px"
            borderRadius="4px"
            h="222px"
            cursor="pointer"
            transition="transform 0.2s"
            hoverShadowColor="black"
          >
            <Box
              p={8}
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <div>
                <Box
                  bg="#FFCD8580"
                  width="fit-content"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  px={3}
                  py={1}
                  borderRadius="full"
                  mb={8}
                >
                  <Star />
                  <Text color="#97641B" fontSize="xs">
                    Completely private
                  </Text>
                </Box>
              </div>
              <Box>
                <Text
                  fontFamily="FavoritExtendedIF"
                  fontSize={{
                    base: "16px",
                    sm: "20px",
                  }}
                  mb={2}
                >
                  {formatMessage(messages.ironfishNodeApp)}
                </Text>
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                  }}
                >
                  {formatMessage(messages.ironfishNodeAppDescription)}
                </Text>
              </Box>
            </Box>
          </ShadowBox>

          <ShadowBox
            as="a"
            href={links.ironfishcli}
            target="_blank"
            rel="noreferrer"
            shadowColor="white"
            borderWidth="2px"
            borderRadius="4px"
            h="222px"
            cursor="pointer"
            transition="transform 0.2s"
            hoverShadowColor="black"
          >
            <Box
              p={8}
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-end"
            >
              <Box>
                <Text
                  fontFamily="FavoritExtendedIF"
                  fontSize={{
                    base: "16px",
                    sm: "20px",
                  }}
                  mb={2}
                >
                  {formatMessage(messages.ironfishCLI)}
                </Text>
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                  }}
                >
                  {formatMessage(messages.ironfishCLIDescription)}
                </Text>
              </Box>
            </Box>
          </ShadowBox>
        </Grid>

        <Text textStyle="h4" mb={6}>
          2. {formatMessage(messages.bridgeYourAssets)}
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            xl: "repeat(3, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
          mb={10}
        >
          <ShadowBox
            as="a"
            href={links.bridgingin}
            target="_blank"
            rel="noreferrer"
            shadowColor="white"
            borderWidth="2px"
            borderRadius="4px"
            h="222px"
            cursor="pointer"
            transition="transform 0.2s"
            hoverShadowColor="black"
          >
            <Box
              p={8}
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-end"
            >
              <Box>
                <Text
                  fontFamily="FavoritExtendedIF"
                  fontSize={{
                    base: "16px",
                    sm: "20px",
                  }}
                  mb={2}
                >
                  {formatMessage(messages.bridgingIn)}
                </Text>
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                  }}
                >
                  {formatMessage(messages.bridgingInDescription)}
                </Text>
              </Box>
            </Box>
          </ShadowBox>
          <ShadowBox
            as="a"
            href={links.bridgingout}
            target="_blank"
            rel="noreferrer"
            shadowColor="white"
            borderWidth="2px"
            borderRadius="4px"
            h="222px"
            cursor="pointer"
            transition="transform 0.2s"
            hoverShadowColor="black"
          >
            <Box
              p={8}
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-end"
            >
              <Box>
                <Text
                  fontFamily="FavoritExtendedIF"
                  fontSize={{
                    base: "16px",
                    sm: "20px",
                  }}
                  mb={2}
                >
                  {formatMessage(messages.bridgingOut)}
                </Text>
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                  }}
                >
                  {formatMessage(messages.bridgingOutDescription)}
                </Text>
              </Box>
            </Box>
          </ShadowBox>
        </Grid>

        <Divider my={10} />

        <Text textStyle="h4" mb={6}>
          {formatMessage(messages.wIronContractAddresses)}
        </Text>

        <Text textStyle="h6" mb={6} maxW="550px">
          {formatMessage(messages.wIronContractAddressesDescription)}
        </Text>

        <UnorderedList spacing={2}>
          {wIronAddresses.map(({ chain, address, explorer }) => (
            <ListItem key={chain}>
              <chakra.span fontWeight="bold">{chain}:&nbsp;</chakra.span>
              <Code
                as="a"
                href={`${explorer}${address}`}
                target="_blank"
                rel="noreferrer"
                wordBreak="break-word"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {address}
              </Code>
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
    </Box>
  );
}

const Star = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.28816 12.7556C4.13685 12.8468 3.95018 12.7114 3.99 12.5392L4.93969 8.43365C4.95639 8.36148 4.93182 8.28599 4.87585 8.23747L1.69049 5.47585C1.55699 5.3601 1.62818 5.14076 1.80421 5.12548L6.01347 4.76009C6.08731 4.75368 6.15154 4.70697 6.1804 4.6387L7.81594 0.76889C7.88477 0.606037 8.11556 0.606037 8.18438 0.768891L9.81993 4.6387C9.84878 4.70697 9.91302 4.75368 9.98685 4.76009L14.1961 5.12548C14.3721 5.14076 14.4433 5.3601 14.3098 5.47585L11.1245 8.23747C11.0685 8.28599 11.0439 8.36148 11.0606 8.43365L12.0103 12.5392C12.0501 12.7114 11.8635 12.8468 11.7122 12.7556L8.10347 10.5787C8.03993 10.5403 7.96039 10.5403 7.89686 10.5787L4.28816 12.7556Z"
        fill="#97641B"
      />
    </svg>
  );
};
