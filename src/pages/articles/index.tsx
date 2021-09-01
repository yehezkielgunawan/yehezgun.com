import {
  Box,
  Center,
  Flex,
  Image,
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
      <Main justifyContent="center">
        <Center>
          <Spinner></Spinner>
        </Center>
      </Main>
    );

  return (
    <Main>
      <Text fontSize="2xl">
        <b>Articles</b>
      </Text>
      <Text fontSize="lg">Just some random thoughs.</Text>

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
            </NextLink>
          </Box>
        </Skeleton>
      ))}
    </Main>
  );
}

export default Articles;
