import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
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
import React from "react";
import { BlockMapType, NotionRenderer } from "react-notion";

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

const BlogPost: React.FC<{ post: SingleArticle; blocks: BlockMapType }> = ({
  post,
  blocks,
}) => {
  const { colorMode } = useColorMode();
  const divStyle = {
    WebkitTextFillColor: "white",
    color: "white",
  };

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
          title={`${post.title} | sozonome`}
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
          <NotionRenderer blockMap={blocks} />
        ) : (
          <div style={divStyle}>
            <NotionRenderer blockMap={blocks} />
          </div>
        )}
      </Stack>
    </Main>
  );
};

export default BlogPost;
