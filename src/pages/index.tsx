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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";

import { Main } from "../components/wrapper/Main";

import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  NOTION_PROJECTS,
} from "../constants/config";
import { useEffect } from "react";
import { useNotionAPI } from "../functions/swr/fetcher";
import { useDesktopWidthCheck } from "../functions/helpers/desktopWidthCheck";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useAppToast } from "../components/ui/AppToast";
import { Projects } from "../functions/swr/types";
import { techStackList } from "../constants/techStacks";

const Index = () => {
  const { data, isLoading, isError } = useNotionAPI<Projects>(
    `/table/${NOTION_PROJECTS}`
  );
  const dataProjects = data ?? [];
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();

  useEffect(() => {
    if (isError && !isLoading) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [isError]);

  return (
    <Main>
      <Text fontSize="2xl">
        <b>Hi, I'm Yehezkiel Gunawan.</b>
      </Text>

      <Text fontSize="lg">A frontend engineer</Text>
      <Text fontSize="lg">A learner, not talented</Text>

      <Stack pt={12} spacing={2}>
        <Text>
          <b>Current Favourite Tech Stacks</b>
        </Text>
        <HStack spacing={4}>
          {techStackList.map((techStack, index) => (
            <Popover key={index} placement="top" trigger="hover">
              <PopoverTrigger>
                <Box as="button">
                  <Icon _hover={{
                    color:"gray.500"
                  }} as={techStack.icon} fontSize="4xl" />
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>{techStack.description}</PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </HStack>
      </Stack>

      <Stack spacing={3} pt={12}>
        <Text fontSize="lg">
          <b>Newest Projects</b>
        </Text>
        <SimpleGrid columns={isDesktopWidth ? 2 : 1} spacing={4}>
          {dataProjects.map((project, index) => {
            return (
              index < 2 && (
                <Skeleton key={index} isLoaded={!isLoading}>
                  <ChakraLink isExternal href={project.project_url}>
                    <Box
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

        <Button as="a" href="/projects" variant="outline" width="100%">
          See More Projects
        </Button>
      </Stack>
    </Main>
  );
};

export default Index;
