import "@fontsource/catamaran";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { body: "Catamaran", heading: "Catamaran" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts,
  breakpoints,
  config,
});

export default theme;
