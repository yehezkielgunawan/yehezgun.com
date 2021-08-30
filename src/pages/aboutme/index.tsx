import {
  Box,
  Link as ChakraLink,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Main } from "../../components/wrapper/Main";
import NextLink from "next/link";
import { useNotionAPI } from "../../functions/swr/fetcher";
import { NOTION_PROJECTS } from "../../constants/config";
import { useAppToast } from "../../components/ui/AppToast";
import { useEffect } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function AboutMe() {
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

  return (
    <Main>
      <Text fontSize="2xl">Halaman About Me</Text>

      {dataProjects.map((project, index) => (
        <Skeleton key={index} isLoaded={!isLoading}>
          <ChakraLink isExternal href={project.project_url}>
            <Box p={2} overflow="hidden" borderRadius={10} borderWidth={1}>
              <Stack spacing={3} align="center">
                <Text textAlign="center" fontSize="lg">
                  <b>{project.project_title}</b>
                  <ExternalLinkIcon pl={1} />
                </Text>
                <Text>{project.description}</Text>
              </Stack>
            </Box>
          </ChakraLink>
        </Skeleton>
      ))}
    </Main>
  );
}

export default AboutMe;
