import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  IronfishUIProvider,
  LoadFonts,
  MDXRenderer,
} from '@ironfish/website/ui';
import { IntlProvider } from '../intl/IntlProvider';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
import rust from 'highlight.js/lib/languages/rust';

import { MainLayout } from '../layouts/Main/Main';

import '../styles/global.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('rust', rust);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Iron Fish - Private, anonymous, and easy to use cryptocurrency
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
        />
      </Head>
      <MDXRenderer.Provider>
        <IntlProvider>
          <IronfishUIProvider>
            <LoadFonts />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </IronfishUIProvider>
        </IntlProvider>
      </MDXRenderer.Provider>
    </>
  );
}

export default App;
