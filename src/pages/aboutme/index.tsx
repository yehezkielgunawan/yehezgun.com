import {
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/wrapper/Main";
import NextLink from "next/link";
import { CheckCircleIcon } from "@chakra-ui/icons";

function AboutMe() {
  return (
    <>
      <Hero title="About Me" />
      <Main>
        <Text>Halaman Projects</Text>

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
}

export default AboutMe;
