import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";

import { Container } from "libs/shared-UI/Container";
import { PostTitle } from "libs/shared-UI/PostTitle";
import { PostBody } from "libs/shared-UI/PostBody";
import { SectionSeparator } from "libs/shared-UI/SectionSeparator";
import { getAllPostsWithSlug, getPostAndMorePosts } from "libs/contentful";
import { IBlogPost } from "libs/@types";
import { Layout } from "components/Layout/Layout";
import { PostHeader } from "components/PostHeader/PostHeader";
import { MoreStories } from "components/MoreStories/MoreStories";
import { useAppRoute } from "hooks/useAppRoute";

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

  const ctx = useAppRoute();
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
  const allPosts = (await getAllPostsWithSlug()) as IBlogPost[];

  const paths =
    allPosts?.map(({ slug }: { slug: string }) => `/posts/${slug}`) ?? [];

  return {
    paths,
    fallback: true,
  };
}
