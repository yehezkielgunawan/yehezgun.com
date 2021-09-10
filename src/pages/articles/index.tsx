import {
  Box,
  Center,
  Flex,
  Heading,
  Img,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Main } from "../../components/wrapper/Main";
import { getAllPosts } from "../../functions/lib/fetcher";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG_ARTICLE,
} from "../../constants/config";
import NextLink from "next/link";
import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthCheck";
import { useAppToast } from "../../components/ui/AppToast";
import { Articles as ArticlesType } from "../../functions/lib/types";
import { useEffect } from "react";
import { formatDate } from "../../functions/helpers/formatDate";
import AppHeader from "../../components/ui/AppHeader";

export async function getStaticProps() {
  const articleList = await getAllPosts();

  return {
    props: {
      articleList,
    },
    revalidate: 10,
  };
}

function Articles({ articleList }: { articleList: ArticlesType }) {
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const dataArticles = articleList ?? [];

  useEffect(() => {
    if (!articleList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [articleList]);

  if (!dataArticles || dataArticles.length < 1)
    return (
      <Main>
        <Center>
          <Spinner />
        </Center>
      </Main>
    );

  return (
    <Main>
      <AppHeader
        pageTitle="Articles"
        pageDesc="Just some random thoughts. (The articles is written is Bahasa)"
        route="articles"
      />
      <Heading as="h5" size="2xl">
        <b>Articles</b>
      </Heading>
      <Text fontSize="lg">
        Just some random thoughts. (The articles written in Bahasa)
      </Text>

      {dataArticles.map((article, index) => (
        <Skeleton key={index} isLoaded={dataArticles ? true : false}>
          <Box
            _hover={{
              bg: "gray.500",
            }}
            p={4}
            overflow="hidden"
            borderRadius={10}
            borderWidth={2}
          >
            <NextLink
              href={`/articles/post/${article.slug}`}
              as={`/articles/post/${article.slug}`}
              passHref
            >
              <Flex as="a" gridGap={4} align="center">
                {article.article_image ? (
                  <Img
                    src={article.article_image[0].url}
                    objectFit="contain"
                    boxSize={isDesktopWidth ? "180px" : "100px"}
                    align="center"
                  />
                ) : (
                  <Img
                    src={DEFAULT_IMG_ARTICLE}
                    objectFit="contain"
                    boxSize={isDesktopWidth ? "180px" : "100px"}
                    align="center"
                  />
                )}
                <Stack spacing={2}>
                  <Text fontSize="xl">
                    <b>{article.title}</b>
                  </Text>
                  <Text>{formatDate(article.date)}</Text>
                </Stack>
              </Flex>
            </NextLink>
          </Box>
        </Skeleton>
      ))}
    </Main>
  );
}

export default Articles;
