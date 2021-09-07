import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { Container } from "../components/wrapper/Container";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { DefaultSeo } from "next-seo";

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
