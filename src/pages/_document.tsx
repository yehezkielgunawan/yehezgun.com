import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

const APP_NAME = "YehezGun | Frontend Engineer";
const APP_DESC = "Welcome to Yehezkiel Gunawan's profile website";

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/assets/YG.png"></link>
          <title>{APP_NAME}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content={APP_NAME} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yehezgun.com" />
          <meta property="og:image" content="/assets/yehez-profile.png" />
          <meta property="og:description" content={APP_DESC} />
          <meta name="theme-color" content="#FF0000" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="YehezGun | Frontend Engineer" />
          <meta
            name="twitter:description"
            content="Welcome to Yehezkiel Gunawan's profile website"
          />
          <meta name="twitter:image" content="/assets/yehez-profile.png" />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
