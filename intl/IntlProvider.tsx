import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";

type Props = {
  children: React.ReactNode;
};

export function IntlProvider({ children }: Props) {
  const router = useRouter();
  const [messages, setMessages] = useState<Record<string, string>>({});
  const locale = router.locale ?? "en";

  useEffect(() => {
    async function loadMessages() {
      let match;
      try {
        switch (locale) {
          case "en":
            match = (await import("./messages/en.json")).default;
            break;
          default:
            match = (await import("./messages/en.json")).default;
            break;
        }
      } catch (err) {
        console.log(err);
        match = (await import("./messages/en.json")).default;
      }
      setMessages(match);
    }

    loadMessages();
  }, [locale]);

  return (
    <ReactIntlProvider
      locale={locale}
      defaultLocale={router.defaultLocale}
      messages={messages}
    >
      {children}
    </ReactIntlProvider>
  );
}
