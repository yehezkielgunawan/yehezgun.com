import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Main } from "../components/wrapper/Main";
import { Footer } from "../components/wrapper/Footer";
import NextLink from "next/link";

const Index = () => (
  <>
    <Hero title="HAH" />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
        <Code>typescript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <NextLink href="/aboutme">
            <ChakraLink> About ME</ChakraLink>
          </NextLink>
        </ListItem>
      </List>
    </Main>

    <Footer>
      <Text>2021 | Yehezkiel Gunawan</Text>
    </Footer>
  </>
);

export default Index;
