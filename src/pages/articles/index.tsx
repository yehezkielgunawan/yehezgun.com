import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Main } from "../../components/wrapper/Main";
import { useNotionAPI } from "../../functions/swr/fetcher";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG_ARTICLE,
  NOTION_BLOG_ID,
} from "../../constants/config";
import NextLink from "next/link";
import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthCheck";
import { useAppToast } from "../../components/ui/AppToast";
import { Articles as ArticlesType } from "../../functions/swr/types";
import { useEffect } from "react";
import { formatDate } from "../../functions/helpers/formatDate";

function Articles() {
  const { data, isLoading, isError } = useNotionAPI<ArticlesType>(
    `/table/${NOTION_BLOG_ID}`
  );
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const dataArticles = data ?? [];

  useEffect(() => {
    if (isError && !isLoading) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [isError]);

  if (!dataArticles || dataArticles.length < 1)
    return (
      <Main justifyContent="center">
        <Spinner textAlign="center"></Spinner>
      </Main>
    );

  return (
    <Main>
      <Text fontSize="2xl">
        <b>Articles</b>
      </Text>
      <Text fontSize="lg">Just some random thoughs.</Text>

      {dataArticles.map((article, index) => (
        <Skeleton key={index} isLoaded={!isLoading}>
          <NextLink
            href={`/articles/post/${article.slug}`}
            as={`/articles/post/${article.slug}`}
          >
            <ChakraLink>
              <Box p={4} overflow="hidden" borderRadius={10} borderWidth={2}>
                <Flex gridGap={4} align="center">
                  {article.article_image ? (
                    <Image
                      src={article.article_image[0].url}
                      objectFit="contain"
                      boxSize={isDesktopWidth ? "150px" : "100px"}
                      align="center"
                    />
                  ) : (
                    <Image
                      src={DEFAULT_IMG_ARTICLE}
                      objectFit="contain"
                      boxSize={isDesktopWidth ? "150px" : "100px"}
                      align="center"
                    />
                  )}
                  <Stack spacing={2}>
                    <Text fontSize="lg">
                      <b>{article.title}</b>
                    </Text>
                    <Text>{formatDate(article.date)}</Text>
                  </Stack>
                </Flex>
              </Box>
            </ChakraLink>
          </NextLink>
        </Skeleton>
      ))}
    </Main>
  );
}

export default Articles;
