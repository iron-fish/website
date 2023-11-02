import { FaqMoreInfo } from "@/components/FaqMoreInfo/FaqMoreInfo";
import { Container, FAQItem, Text, Box, Link } from "@/lib/ui";
import { CONSTANTS } from "@/shared/constants";

export function NodeAppFaqs() {
  return (
    <Box borderBottom="1.5px solid black">
      <Container w="100%" maxW="container.xl" pt="150px">
        <Text
          id="node-app-faq"
          as="h2"
          textStyle="h3"
          mb={12}
          textAlign="center"
        >
          Node App FAQ
        </Text>
        <FAQItem title="Why opt in to telemetry?">
          Opting into telemetry allows us to continuously enhance your
          experience by collecting anonymous data. This data includes valuable
          metrics such as node performance, block information, and overall
          health indicators. By enabling telemetry, you contribute to the
          ongoing improvement of our services. You can easily control your
          participation in telemetry by enabling or disabling it at any time
          through the node settings page.
        </FAQItem>
        <FAQItem title="Can I run the node app on my mobile device?">
          The node app requires a desktop, as it runs a full node (the most
          secure option).
        </FAQItem>
        <FAQItem title="Can I mint and burn assets in the node app?">
          That functionality is not yet available in the app. You need to
          mint/burn via the command line, but you can then access and transact
          with minted assets in the app.
        </FAQItem>
        <FAQItem title="The app crashes on startup with the error: A JavaScript error occurred in the main process">
          If you&apos;re on Windows and seeing this error, please install the
          Visual C++ Redistributable and try again. You can download it from
          Microsoft{" "}
          <Link
            isExternal
            href="https://aka.ms/vs/17/release/vc_redist.x64.exe"
            color="#3344dd"
            _visited={{ color: "#884488" }}
          >
            right here
          </Link>
          .
        </FAQItem>
        <FAQItem title="Where can I ask for help with the Node App?">
          If you have any questions or need additional help, you can talk to us
          on about the Node App on{" "}
          <Link
            isExternal
            href={CONSTANTS.SOCIAL_LINKS.discord}
            color="#3344dd"
            _visited={{ color: "#884488" }}
          >
            Discord
          </Link>{" "}
          in the #node-app channel.
        </FAQItem>
        <FaqMoreInfo />
      </Container>
    </Box>
  );
}
