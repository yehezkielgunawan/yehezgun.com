import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { CTA } from "../components/CTA";
import { Container } from "../components/wrapper/Container";
import { FooterComponent } from "../components/FooterComponent";
import "react-notion/src/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ChakraProvider resetCSS theme={theme}>
        <CTA />
        <Component {...pageProps} />

        <FooterComponent />
      </ChakraProvider>
    </Container>
  );
}

export default MyApp;
