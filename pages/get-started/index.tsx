import Head from "next/head";
import { defineMessages, useIntl } from "react-intl";
import { Box } from "@/lib/ui";
import { GetStartedSteps } from "@/components/GetStarted/GetStartedSteps/GetStartedSteps";

const messages = defineMessages({
  title: {
    id: "getstarted.title",
    defaultMessage:
      "Iron Fish | Get Started",
  },
});

export default function GetStarted() {
  const { formatMessage } = useIntl();
  return (
    <Box>
      <Head>
        <title>{formatMessage(messages.title)}</title>
      </Head>

      <Box borderBottom="1px solid black">
        <GetStartedSteps />
      </Box>
    </Box>
  );
}
