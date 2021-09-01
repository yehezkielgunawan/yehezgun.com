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
  Flex,
} from "@chakra-ui/react";

import { Main } from "../components/wrapper/Main";

import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  NOTION_PROJECTS,
} from "../constants/config";
import { useEffect } from "react";
import NextLink from "next/link";
import { useNotionAPI } from "../functions/lib/fetcher";
import { useDesktopWidthCheck } from "../functions/helpers/desktopWidthCheck";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useAppToast } from "../components/ui/AppToast";
import { Projects } from "../functions/lib/types";
import { techStackList } from "../constants/techStacks";

const Index = () => {
  const { data, isLoading, isError } = useNotionAPI<Projects>(
    `/table/${NOTION_PROJECTS}`,
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
      <Flex justifyContent="space-between" align="center" gridGap={4}>
        <Stack spacing={2}>
          <Text fontSize="2xl">
            <b>Hi, I'm Yehezkiel Gunawan.</b>
          </Text>

          <Text fontSize="md" textAlign="justify">
            Currently work as a frontend developer.
            <br />
            You've found my personal slice of the internet. Take a look and
            enjoy.
          </Text>
        </Stack>
        {isDesktopWidth && (
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78ZZR7LqHV1HwgAG8xhGoQt-CTeEVS0rmcG%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1"
            boxSize="12rem"
            objectFit="contain"
          />
        )}
      </Flex>

      <Stack pt={12} spacing={2}>
        <Text>
          <b>Current Favourite Tech Stacks</b>
        </Text>
        <HStack spacing={4}>
          {techStackList.map((techStack, index) => (
            <Popover key={index} placement="top" trigger="hover">
              <PopoverTrigger>
                <Box as="button">
                  <Icon
                    _hover={{
                      color: "gray.500",
                    }}
                    as={techStack.icon}
                    fontSize="4xl"
                  />
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
        <SimpleGrid columns={isDesktopWidth ? 2 : 1} spacing={3}>
          {dataProjects.map((project, index) => {
            return (
              index < 2 && (
                <Skeleton key={index} isLoaded={!isLoading}>
                  <ChakraLink isExternal href={project.project_url}>
                    <Box
                      p={2}
                      overflow="hidden"
                      borderRadius={10}
                      borderWidth={2}
                      _hover={{
                        bg: "gray.500",
                      }}
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

        <NextLink href="/projects" passHref>
          <Button as="a" variant="outline" width="100%">
            See More Projects
          </Button>
        </NextLink>
      </Stack>
    </Main>
  );
};

export default Index;
