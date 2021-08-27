import { Text, Box, HStack, Icon, Stack } from "@chakra-ui/react";

import { Main } from "../components/wrapper/Main";
import { SiNextDotJs } from "react-icons/si";

import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const Index = () => (
  <>
    <Main>
      <Text fontSize="2xl">
        <b>Hi, I'm Yehezkiel Gunawan.</b>
      </Text>

      <Text fontSize="lg">A frontend engineer</Text>
      <Text fontSize="lg">A learner, not talented</Text>

      <Box pt={12}>
        <Text>
          <b>Current Favourite Tech Stacks</b>
        </Text>
        <HStack spacing="12px">
          <Icon w={12} h={12} as={FaReact} />
          <Icon w={12} h={12} as={FaJs} />
          <Icon w={12} h={12} as={FaNodeJs} />
          <Icon w={12} h={12} as={SiNextDotJs} />
        </HStack>
      </Box>

      <Stack spacing={3} pt={12}>
        <Text fontSize="lg">
          <b>Newest Projects</b>
        </Text>
      </Stack>
    </Main>
  </>
);

export default Index;
