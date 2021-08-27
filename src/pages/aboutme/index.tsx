import {
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Main } from "../../components/wrapper/Main";
import NextLink from "next/link";
import { CheckCircleIcon } from "@chakra-ui/icons";

function AboutMe() {
  return (
    <>
      <Main>
        <Text>Halaman About Me</Text>

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
