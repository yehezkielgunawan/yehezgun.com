// core styles shared by all of react-notion-x (required) - need to be improved here
// import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
// used for collection views (optional)
import "rc-dropdown/assets/index.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";
// // global style overrides for notion
import "styles/notion.css";

// // global style overrides for prism theme (optional)
// import "styles/prism-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import defaultSEOConfig from "../../next-seo.config";
import { Container } from "../components/wrapper/Container";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...defaultSEOConfig} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
