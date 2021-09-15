import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Container } from "../components/wrapper/Container";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://yehezgun.com/",
          site_name: "YehezGun",
        }}
      />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
