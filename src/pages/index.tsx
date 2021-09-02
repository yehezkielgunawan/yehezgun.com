import {
  Text,
  Box,
  HStack,
  Icon,
  Stack,
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
  Img,
  SimpleGrid,
} from "@chakra-ui/react";

import { Main } from "../components/wrapper/Main";

import { CHECK_YOUR_CONNECTION_MESSAGE } from "../constants/config";
import { useEffect } from "react";
import NextLink from "next/link";
import { getAllProjects } from "../functions/lib/fetcher";
import { useDesktopWidthCheck } from "../functions/helpers/desktopWidthCheck";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Projects } from "../functions/lib/types";
import { techStackList } from "../constants/techStacks";
import { useAppToast } from "../components/ui/AppToast";
import AppHeader from "../components/ui/AppHeader";

export async function getStaticProps() {
  const projectList = await getAllProjects();
  const newestProjects = projectList.slice(0, 2);

  return {
    props: {
      newestProjects,
    },
    revalidate: 10,
  };
}

const Index = ({ newestProjects }: { newestProjects: Projects }) => {
  const dataProjects = newestProjects ?? [];
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();

  useEffect(() => {
    if (!dataProjects) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [dataProjects]);

  return (
    <Main>
      <AppHeader
        pageTitle="Home"
        pageDesc="Welcome to my personal site. Take a look and enjoy."
      />
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
            src="https://yt3.ggpht.com/a/AGF-l78ZZR7LqHV1HwgAG8xhGoQt-CTeEVS0rmcG=s900-c-k-c0xffffffff-no-rj-mo"
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
        <SimpleGrid columns={[1, null, 2]} spacing={3}>
          {dataProjects.map((project, index) => {
            return (
              <Skeleton key={index} isLoaded={dataProjects ? true : false}>
                <ChakraLink isExternal href={project.project_url}>
                  <Box
                    p={1}
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
                      <Img
                        src={project.image_url[0].url}
                        objectFit="contain"
                        w="100%"
                        h="150px"
                        align="center"
                      />
                    </Stack>
                  </Box>
                </ChakraLink>
              </Skeleton>
            );
          })}
        </SimpleGrid>

        <NextLink href="/projects" passHref>
          <Button as="a" variant="outline" width="">
            See More Projects
          </Button>
        </NextLink>
      </Stack>
    </Main>
  );
};

export default Index;
