import {
  Box,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
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
import MotionStack from "../../components/motion/MotionStack";

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
    <MotionStack
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Main spacing={4}>
        <AppHeader
          pageTitle="Projects"
          pageDesc="This is my personal projects that I've done before."
          route="projects"
        />

        <Text fontSize="2xl">
          <b>Projects</b>
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
              >
                <Stack spacing={3} px={3}>
                  <Flex justifyContent="space-between">
                    <Text fontSize="lg">
                      <b>{project.project_title}</b>
                    </Text>
                    <ExternalLinkIcon fontSize="lg" />
                  </Flex>
                  <Flex
                    gridGap={2}
                    align="center"
                    justifyContent="space-between"
                  >
                    <Stack spacing={3}>
                      <Text>{project.description}</Text>
                      <HStack>
                        {project.made_using.map((framework, index) => (
                          <Image
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
                      <Image
                        src={project.image_url[1].url}
                        objectFit="contain"
                        boxSize={isDesktopWidth ? "120px" : "100px"}
                        align="center"
                      />
                    ) : (
                      <Image
                        src={DEFAULT_IMG}
                        objectFit="contain"
                        boxSize={isDesktopWidth ? "120px" : "100px"}
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
    </MotionStack>
  );
}

export default Projects;
