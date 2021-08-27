import { useMediaQuery } from "@chakra-ui/react";

export const useDesktopWidthCheck = () => {
  const [isDesktopWidth] = useMediaQuery("(min-width: 40em)");

  return isDesktopWidth;
};
