import { Text } from "@chakra-ui/react";

import { Footer } from "./wrapper/Footer";

export const FooterComponent = () => {
  return (
    <Footer>
      <Text>{new Date().getFullYear()} | Yehezkiel Gunawan</Text>
    </Footer>
  );
};
