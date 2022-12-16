import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";

import { Layout } from "../../libs/UI/Layout";
import { Container } from "../../libs/UI/Container";
import { PostTitle } from "../../libs/UI/PostTitle";
import { PostHeader } from "../../libs/UI/PostHeader";
import { PostBody } from "../../libs/UI/PostBody";
import { SectionSeparator } from "../../libs/UI/SectionSeparator";
import { MoreStories } from "../../libs/UI/MoreStories";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../libs/contentful";
import { IBlogPost } from "../../libs/@types";

interface IStaticProps {
  params: {
    slug: string;
  };
  preview: boolean;
}

interface IPostProps {
  post: IBlogPost;
  morePosts: IBlogPost[];
  preview: boolean;
}

export default function Post({ post, morePosts, preview }: IPostProps) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                heroImage={post.heroImage}
                publishDate={post.publishDate}
                author={post.author}
                slug={post.slug}
              />

              <PostBody content={post.body} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  params,
  preview = false,
}: IStaticProps) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  const paths =
    allPosts?.map(({ slug }: { slug: string }) => `/posts/${slug}`) ?? [];

  return {
    paths,
    fallback: true,
  };
}
