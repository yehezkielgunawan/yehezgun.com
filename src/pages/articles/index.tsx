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
import AppHeader from "components/ui/AppHeader";
import { useAppToast } from "components/ui/AppToast";
import { Main } from "components/wrapper/Main";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG_ARTICLE,
} from "constants/config";
import { formatDate } from "functions/helpers/formatDate";
import { getAllPosts } from "functions/lib/fetcher";
import { Articles as ArticlesType } from "functions/lib/types";
import NextLink from "next/link";
import React, { useEffect } from "react";

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
  const toast = useAppToast();
  const dataArticles = articleList ?? [];

  useEffect(() => {
    if (!articleList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [articleList, toast]);

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
      <Heading as="h5" size="xl">
        <b>Articles</b>
      </Heading>
      <Text fontSize="lg">
        Just some random thoughts. Mostly, the articles are written in Bahasa.
      </Text>

      <Text fontSize="sm">
        (Soon there is a feature to choose articles language)
      </Text>
      {dataArticles.map((article, index) => (
        <Skeleton key={index} isLoaded={articleList ? true : false}>
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
                <Img
                  src={
                    article.article_image
                      ? article.article_image[0].url
                      : DEFAULT_IMG_ARTICLE
                  }
                  objectFit="contain"
                  boxSize={["100px", "140px"]}
                  align="center"
                />

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
