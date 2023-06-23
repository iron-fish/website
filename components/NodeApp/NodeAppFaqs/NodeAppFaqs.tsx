import { FaqMoreInfo } from "@/components/FaqMoreInfo/FaqMoreInfo";
import { Container, FAQItem, Text, Box } from "@/lib/ui";

export function NodeAppFaqs() {
  return (
    <Box borderBottom="1.5px solid black">
      <Container w="100%" maxW="container.xl" pt="150px">
        <Text as="h2" textStyle="h3" mb={12} textAlign="center">
          Node App FAQ
        </Text>
        <FAQItem title="How do I get started?">
          You can find the download links here [include]. Also check out our
          walkthrough.
        </FAQItem>
        <FAQItem title="Why opt in to telemetry?">
          Lorem ipusm dolor sit amet, consectetur adipiscing elit. Sed euismod
          nulla quis semper consectetur. Sed euismod nulla quis semper
          consectetur. Sed euismod nulla quis semper consectetur.
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

        <FaqMoreInfo />
      </Container>
    </Box>
  );
}
