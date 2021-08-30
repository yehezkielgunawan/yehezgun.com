import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button, Heading, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BlockMapType, NotionRenderer } from "react-notion";
import { Main } from "../../../components/wrapper/Main";
import { getAllPosts } from "../../../functions/swr/fetcher";
import { SingleArticle } from "../../../functions/swr/types";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Get all posts again
  // const posts = await getAllPosts();

  // // Find the current blogpost by slug
  // const post = posts.find((t) => t.slug === slug);
  const post = await getAllPosts().then((posts) => {
    return posts.find((t) => t.slug === slug);
  });

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post!.id}`
  ).then((res) => {
    return res.json();
  });

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
  useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  if (!post) return <Spinner />;

  return (
    <Main spacing={4}>
      <Button
        as="a"
        href="../"
        colorScheme="teal"
        size="md"
        w="25%"
        leftIcon={<ArrowLeftIcon />}
      >
        Kembali
      </Button>
      <Heading as="h2">{post.title}</Heading>

      <NotionRenderer blockMap={blocks} />
    </Main>
  );
};

export default BlogPost;
