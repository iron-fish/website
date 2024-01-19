import { AppProps } from "next/app";
import Head from "next/head";
import { IronfishUIProvider, LoadFonts, MDXRenderer } from "@/lib/ui";
import { IntlProvider } from "../intl/IntlProvider";
import { GoogleAnalytics } from "nextjs-google-analytics";

import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
import rust from "highlight.js/lib/languages/rust";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MainLayout } from "../layouts/Main/Main";

import "../styles/global.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("rust", rust);

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Iron Fish | Private, anonymous, and easy to use cryptocurrency
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics gaMeasurementId="G-GJD73W9V3M" trackPageViews />
      <MDXRenderer.Provider>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            <IronfishUIProvider>
              <LoadFonts />
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </IronfishUIProvider>
          </QueryClientProvider>
        </IntlProvider>
      </MDXRenderer.Provider>
    </>
  );
}

export default App;
