import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { Main } from "../components/wrapper/Main";
import NextLink from "next/link";

const Index = () => (
  <>
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
  </>
);

export default Index;
