import { useMediaQuery } from "@chakra-ui/react";

export const useDesktopWidthCheck = () => {
  const [isDesktopWidth] = useMediaQuery("(min-width: 48em)");

  return isDesktopWidth;
};
