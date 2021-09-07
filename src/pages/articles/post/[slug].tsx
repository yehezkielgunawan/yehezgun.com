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
        {/* <Head>
          <link rel="icon" href="/assets/YG_logo.png"></link>
          <title>{post.title} | YehezGun</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <meta
            property="og:url"
            content={`https://yehezgun.com/articles/post/${post.slug}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${post.title} | YehezGun`} />
          <meta
            property="og:description"
            content="Yehezkiel Gunawan's Article Post"
          />

          <meta
            property="og:image"
            content={`https://yehez-og-image.yehezgun.com/**${post.title}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg`}
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={` ${post.title} | YehezGun`} />
          <meta
            name="twitter:description"
            content="Yehezkiel Gunawan's Article Post"
          />
          <meta
            name="twitter:image"
            content={`https://yehez-og-image.yehezgun.com/**${post.title}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg`}
          />
        </Head> */}
        <NextSeo
          title={`${post.title} | YehezGun`}
          description="Yehezkiel Gunawan's Article Post"
          openGraph={{
            url: `https://yehezgun.com/articles/post/${post.slug}`,
            title: `${post.title}`,
            description: `Yehezkiel Gunawan's Article Post`,
            type: `article`,
            images: [
              {
                url: `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(post.title)}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg`,
                alt: `${post.title} | YehezGun`,
              },
            ],
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
