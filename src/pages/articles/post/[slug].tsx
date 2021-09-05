import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { BlockMapType, NotionRenderer } from "react-notion";
import { Main } from "../../../components/wrapper/Main";
import { getAllPosts, getBlocks } from "../../../functions/lib/fetcher";
import { SingleArticle } from "../../../functions/lib/types";

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
    <Main>
      <Stack spacing={3} px={2} py={4} borderRadius={4}>
        <Head>
          <link rel="icon" href="/assets/YG.png"></link>
          <title>{post.title} | YehezGun</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <meta
            property="og:url"
            content={`https://yehezgun.com/articles/post/${post.slug}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`YehezGun | ${post.title}`} />
          <meta
            property="og:description"
            content="Yehezkiel Gunawan's Article Post"
          />

          <meta
            property="og:image"
            content={`https://socialify.git.ci/yehezkielgunawan/yehezgun.com?description=1&descriptionEditable=${post.title}&font=KoHo&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa9%2FAssassination_Classroom_-_Koro-sensei_smiling_head.svg%2F950px-Assassination_Classroom_-_Koro-sensei_smiling_head.svg.png&pattern=Circuit%20Board&theme=Dark`}
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="YehezGun | Post" />
          <meta
            name="twitter:description"
            content="Yehezkiel Gunawan's Article Post"
          />
          <meta
            name="twitter:image"
            content={`https://socialify.git.ci/yehezkielgunawan/yehezgun.com?description=1&descriptionEditable=${post.title}&font=KoHo&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa9%2FAssassination_Classroom_-_Koro-sensei_smiling_head.svg%2F950px-Assassination_Classroom_-_Koro-sensei_smiling_head.svg.png&pattern=Circuit%20Board&theme=Dark`}
          />
        </Head>
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
          <Image
            src={post.article_image[0].url}
            objectFit="contain"
            align="center"
            borderRadius={4}
          />
        )}
        {colorMode === "light" ? (
          <NotionRenderer blockMap={blocks} />
        ) : (
          <div style={{ WebkitTextFillColor: "white" }}>
            <NotionRenderer blockMap={blocks} />
          </div>
        )}
      </Stack>
    </Main>
  );
};

export default BlogPost;
