import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { CTA } from "../components/CTA";
import { Container } from "../components/wrapper/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <CTA />

        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
