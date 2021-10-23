import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  Link as ChakraLink,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import AppHeader from "components/ui/AppHeader";
import { useAppToast } from "components/ui/AppToast";
import { Main } from "components/wrapper/Main";
import { CHECK_YOUR_CONNECTION_MESSAGE, DEFAULT_IMG } from "constants/config";
import { getAllProjects } from "functions/lib/fetcher";
import { Projects as ProjectListType } from "functions/lib/types";
import React, { useEffect } from "react";

export async function getStaticProps() {
  const projectList = await getAllProjects();

  return {
    props: {
      projectList,
    },
    revalidate: 30,
  };
}

function Projects({ projectList }: { projectList: ProjectListType }) {
  const toast = useAppToast();
  const dataProjects = projectList ?? [];

  useEffect(() => {
    if (!projectList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [projectList, toast]);

  return (
    <Main>
      <AppHeader
        pageTitle="Projects"
        pageDesc="This is my personal projects that I've done before."
        route="projects"
      />

      <Heading as="h5" size="xl">
        <b>Projects</b>
      </Heading>
      <Text fontSize="lg">
        This is my personal, experiment, and freelance{" "}
        <i> (if it&apos;s a public project) </i> project list.
      </Text>

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
                  <Text fontSize={["lg", "xl"]}>
                    <b>{project.project_title}</b>
                  </Text>
                  <ExternalLinkIcon fontSize="lg" />
                </Flex>
                <Flex gridGap={2} align="center" justifyContent="space-between">
                  <Stack spacing={3}>
                    <Text fontSize={["md", "lg"]}>{project.description}</Text>
                    <Flex gridGap={2}>
                      {project.made_using.map((framework, frameworkIndex) => (
                        <Image
                          key={frameworkIndex}
                          src={framework.url}
                          bgColor="white"
                          rounded="lg"
                          boxSize="40px"
                          fit="contain"
                          alt="project-image"
                          boxShadow="lg"
                        />
                      ))}
                    </Flex>
                  </Stack>
                  <Img
                    src={
                      project.image_url ? project.image_url[1].url : DEFAULT_IMG
                    }
                    objectFit="cover"
                    boxSize={["100px", "120px"]}
                    align="center"
                    rounded="2xl"
                  />
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
