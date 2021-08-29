import { useToast, UseToastOptions } from "@chakra-ui/react";

export const useAppToast = (options?: UseToastOptions) =>
  useToast({
    variant: "top-accent",
    position: "top-right",
    isClosable: true,
    ...options,
  });
