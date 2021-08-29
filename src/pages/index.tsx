import {
  Text,
  Box,
  HStack,
  Icon,
  Stack,
  SimpleGrid,
  Image,
  Skeleton,
  Divider,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";

import { Main } from "../components/wrapper/Main";
import { SiNextDotJs } from "react-icons/si";

import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { NOTION_PROJECTS } from "../constants/config";
import { useEffect } from "react";
import { useNotionAPI } from "../functions/swr/fetcher";
import { useDesktopWidthCheck } from "../functions/helpers/desktopWidthCheck";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useAppToast } from "../components/ui/AppToast";

const Index = () => {
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const { data, isLoading, isError } = useNotionAPI(
    `/table/${NOTION_PROJECTS}`
  );

  const dataProjects = data ?? [];

  useEffect(() => {
    if (isError && !isLoading) {
      toast({
        status:"warning",
        description: "Gagal load data, cek koneksi internet anda!"
      })
    }
  }, [data]);

  return (
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
        <SimpleGrid columns={isDesktopWidth ? 2 : 1} spacing={4}>
          {dataProjects.map((project, index) => {
            return (
              index < 2 && (
                <Skeleton isLoaded={!isLoading}>
                  <ChakraLink isExternal href={project.project_url}>
                    <Box
                      key={index}
                      p={2}
                      overflow="hidden"
                      borderRadius={10}
                      borderWidth={1}
                    >
                      <Stack spacing={3} align="center">
                        <Text textAlign="center" fontSize="lg">
                          <b>{project.project_title}</b>
                          <ExternalLinkIcon pl={1} />
                        </Text>
                        <Divider></Divider>
                        <Image
                          src={project.image_url[0].url}
                          objectFit="contain"
                          boxSize="150px"
                          align="center"
                        />
                      </Stack>
                    </Box>
                  </ChakraLink>
                </Skeleton>
              )
            );
          })}
        </SimpleGrid>

        <ChakraLink href="/projects">
          <Button variant="outline" width="100%">
            See More Projects
          </Button>
        </ChakraLink>
      </Stack>
    </Main>
  );
};

export default Index;
