import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
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
        <NextSeo
          title={`${post.title} | YehezGun`}
          description="Yehezkiel Gunawan's Article Post"
          canonical={`https://yehezgun.com/articles/post/${post.slug}`}
          openGraph={{
            url: `https://yehezgun.com/articles/post/${post.slug}`,
            title: `${post.title} | YehezGun`,
            description: `Yehezkiel Gunawan's Article Post`,
            type: `website`,
            images: [
              {
                url: `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
                  post.title.trim(),
                )}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg`,
                alt: `${post.title} | YehezGun`,
                width: 800,
                height: 600,
              },
            ],
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/assets/YG_logo.png",
            },
          ]}
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
          <div style={divStyle}>
            <NotionRenderer blockMap={blocks} />
          </div>
        )}
      </Stack>
    </Main>
  );
};

export default BlogPost;
