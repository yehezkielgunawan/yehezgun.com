import { Flex, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

import { CTA } from "../CTA";
import { FooterComponent } from "../FooterComponent";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "white", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <CTA />
      {children}
      <FooterComponent />
    </Flex>
  );
};
