import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Main } from "../../components/wrapper/Main";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNotionAPI } from "../../functions/swr/fetcher";
import { DEFAULT_IMG, NOTION_PROJECTS } from "../../constants/config";
import { useAppToast } from "../../components/ui/AppToast";
import { useEffect } from "react";

function Projects() {
  const { data, isLoading, isError } = useNotionAPI(
    `/table/${NOTION_PROJECTS}`
  );
  const toast = useAppToast();
  const dataProjects = data ?? [];

  useEffect(() => {
    if (isError && !isLoading) {
      toast({
        status: "warning",
        description: "Gagal load data, cek koneksi internet anda!",
      });
    }
  }, [isError]);

  useEffect(() => {
    console.log(dataProjects[2]);
  }, []);

  return (
    <Main spacing={4}>
      <Text fontSize="2xl">
        <b>Projects </b>
      </Text>

      {dataProjects.map((project, index) => (
        <Skeleton key={index} isLoaded={!isLoading}>
          <ChakraLink isExternal href={project.project_url}>
            <Box p={2} overflow="hidden" borderRadius={10} borderWidth={2}>
              <Stack spacing={3} px={3}>
                <Flex justifyContent="space-between">
                  <Text fontSize="lg">
                    <b>{project.project_title}</b>
                  </Text>
                  <ExternalLinkIcon />
                </Flex>
                <Flex align="center" justifyContent="space-between">
                  <Text>{project.description}</Text>
                  {project.image_url ? (
                    <Image
                      src={project.image_url[1].url}
                      objectFit="contain"
                      boxSize="150px"
                      align="center"
                    />
                  ) : (
                    <Image
                      src={DEFAULT_IMG}
                      objectFit="contain"
                      boxSize="150px"
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
