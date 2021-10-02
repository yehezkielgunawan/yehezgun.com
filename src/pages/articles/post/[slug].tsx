import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  Img,
  Spinner,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import AppHeader from "components/ui/AppHeader";
import { Main } from "components/wrapper/Main";
import { getAllPosts, getBlocks } from "functions/lib/fetcher";
import { SingleArticle } from "functions/lib/types";
import NextLink from "next/link";
import { BlogJsonLd } from "next-seo";
import { ExtendedRecordMap } from "notion-types";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import {
  Code,
  Collection,
  CollectionRow,
  Equation,
  Modal,
  NotionRenderer,
  Pdf,
} from "react-notion-x";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Get all posts again

  // // Find the current blogpost by slug
  const post = await getAllPosts().then((posts) => {
    return posts.find((t) => t.slug === slug);
  });

  const blocks = await getBlocks(post.id);

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const table = await getAllPosts();
  return {
    paths: table.map((row) => `/articles/post/${row.slug}`),
    fallback: true,
  };
}

const BlogPost: React.FC<{ post: SingleArticle; blocks: ExtendedRecordMap }> =
  ({ post, blocks }) => {
    const { colorMode } = useColorMode();

    if (!post) return <Spinner />;

    return (
      <Main>
        <Stack spacing={3} px={2} py={4} borderRadius={4}>
          <AppHeader
            pageTitle={post.title}
            pageDesc="Yehezkiel Gunawan's Article Post"
            route={`articles/post/${post.slug}`}
          />
          <BlogJsonLd
            url={`https://yehezgun.com/articles/post/${post.slug}`}
            title={`${post.title} | yehezgun`}
            images={[]}
            datePublished={new Date(post.date).toISOString()}
            dateModified={new Date(post.date).toISOString()}
            authorName="Yehezkiel Gunawan"
            description={`A blog post by Yehezkiel Gunawan explaining about ${post.title}`}
          />

          <NextLink href="../" passHref>
            <Text
              as="a"
              _hover={{
                color: "gray.500",
              }}
              w="25%"
            >
              <ChevronLeftIcon /> Go Back
            </Text>
          </NextLink>
          <Heading as="h2" textAlign="center">
            {post.title}
          </Heading>
          {post.article_image && (
            <Img
              src={post.article_image[0].url}
              objectFit="contain"
              align="center"
              borderRadius={4}
            />
          )}
          {colorMode === "light" ? (
            <NotionRenderer
              recordMap={blocks}
              components={{
                pageLink: ({
                  href,
                  as,
                  passHref,
                  prefetch,
                  replace,
                  scroll,
                  shallow,
                  locale,
                  ...props
                }) => (
                  <NextLink
                    href={href}
                    as={as}
                    passHref={passHref}
                    prefetch={prefetch}
                    replace={replace}
                    scroll={scroll}
                    shallow={shallow}
                    locale={locale}
                  >
                    <a {...props} />
                  </NextLink>
                ),
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow,
                modal: Modal,
                pdf: Pdf,
                equation: Equation,
              }}
            />
          ) : (
            <NotionRenderer
              recordMap={blocks}
              components={{
                pageLink: ({
                  href,
                  as,
                  passHref,
                  prefetch,
                  replace,
                  scroll,
                  shallow,
                  locale,
                  ...props
                }) => (
                  <NextLink
                    href={href}
                    as={as}
                    passHref={passHref}
                    prefetch={prefetch}
                    replace={replace}
                    scroll={scroll}
                    shallow={shallow}
                    locale={locale}
                  >
                    <a {...props} />
                  </NextLink>
                ),
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow,
                modal: Modal,
                pdf: Pdf,
                equation: Equation,
              }}
              darkMode={true}
            />
          )}
          <NextLink href="../" passHref>
            <Button as="a" variant="ghost" leftIcon={<FaChevronLeft />} colorScheme="gray">
              Back to Articles
            </Button>
          </NextLink>
        </Stack>
      </Main>
    );
  };

export default BlogPost;
