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

function Projects() {
  return (
    <>
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

export default Projects;
