import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Heading,
  Image,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { BlockMapType, NotionRenderer } from "react-notion";
import { Main } from "../../../components/wrapper/Main";
import { getAllPosts, getBlocks } from "../../../functions/swr/fetcher";
import { SingleArticle } from "../../../functions/swr/types";

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

  if (!post) return <Spinner />;

  return (
    <Main
      spacing={4}
      bg={colorMode === "light" ? "white" : "gray.300"}
      textColor="black"
    >
      <NextLink href="../" passHref>
        <Text as="a">
          <ChevronLeftIcon /> Go Back
        </Text>
      </NextLink>
      <Heading as="h2" textAlign="center">
        {post.title}
      </Heading>
      {post.article_image && (
        <Image
          src={post.article_image[0].url}
          objectFit="contain"
          align="center"
        />
      )}
      <NotionRenderer blockMap={blocks} />
    </Main>
  );
};

export default BlogPost;
