import {
  Box,
  Link as ChakraLink,
  Flex,
  HStack,
  Heading,
  Img,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Main } from "../../components/wrapper/Main";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { getAllProjects } from "../../functions/lib/fetcher";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG,
} from "../../constants/config";
import { useAppToast } from "../../components/ui/AppToast";
import { useEffect } from "react";
import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthCheck";
import { Projects as ProjectListType } from "../../functions/lib/types";
import AppHeader from "../../components/ui/AppHeader";

export async function getStaticProps() {
  const projectList = await getAllProjects();

  return {
    props: {
      projectList,
    },
    revalidate: 10,
  };
}

function Projects({ projectList }: { projectList: ProjectListType }) {
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const dataProjects = projectList ?? [];

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
        pageTitle="Projects"
        pageDesc="This is my personal projects that I've done before."
        route="projects"
      />

      <Heading as="h5" size="lg">
        <b>Projects</b>
      </Heading>

      {dataProjects.map((project, index) => (
        <Skeleton key={index} isLoaded={dataProjects ? true : false}>
          <ChakraLink isExternal href={project.project_url}>
            <Box
              _hover={{
                bg: "gray.500",
              }}
              p={4}
              overflow="hidden"
              borderRadius={10}
              borderWidth={2}
              w="100%"
            >
              <Stack spacing={3} px={3}>
                <Flex justifyContent="space-between">
                  <Text fontSize="xl">
                    <b>{project.project_title}</b>
                  </Text>
                  <ExternalLinkIcon fontSize="lg" />
                </Flex>
                <Flex gridGap={2} align="center" justifyContent="space-between">
                  <Stack spacing={3}>
                    <Text>{project.description}</Text>
                    <HStack>
                      {project.made_using.map((framework, index) => (
                        <Img
                          key={index}
                          src={framework.url}
                          bgColor="white"
                          borderRadius={8}
                          boxSize="40px"
                          fit="contain"
                        />
                      ))}
                    </HStack>
                  </Stack>
                  {project.image_url ? (
                    <Img
                      src={project.image_url[1].url}
                      objectFit="contain"
                      boxSize={isDesktopWidth ? "150px" : "100px"}
                      align="center"
                    />
                  ) : (
                    <Img
                      src={DEFAULT_IMG}
                      objectFit="contain"
                      boxSize={isDesktopWidth ? "150px" : "100px"}
                      align="center"
                    />
                  )}
                </Flex>
              </Stack>
            </Box>
          </ChakraLink>
        </Skeleton>
      ))}
    </Main>
  );
}

export default Projects;
