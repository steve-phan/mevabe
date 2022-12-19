import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import NextLink from "next/link";

import styles from "../styles/Home.module.css";
import {
  getAllBlogPosts,
  getAllPostsWithCategory,
  getAllPostsWithSlug,
} from "libs/contentful";
import { Container } from "libs/shared-UI/Container";
import Intro from "components/Intro/Intro";
import { HeroPost } from "libs/shared-UI/HeroPost";
import { IBlogPost } from "libs/@types";
import { Layout } from "components/Layout/Layout";
import { MoreStories } from "components/MoreStories/MoreStories";
import { useAppRoute } from "hooks/useAppRoute";
import { formatSlug } from "utils/fomatSlug";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  allPosts: IBlogPost[];
  preview: boolean;
}

type TAllPostWithCategory = Pick<IBlogPost, "slug" | "title"> & {
  category: string;
};

export default function Category({
  posts,
  category,
}: {
  posts: TAllPostWithCategory[];
  category: string;
}) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  // const ctx = useAppRoute();

  return (
    <>
      <Layout>
        <ul>
          {posts.map((post, index) => {
            return (
              <NextLink
                key={`${post.slug}${index}`}
                href={`${category}/${post.slug}`}
              >
                {post?.title}{" "}
              </NextLink>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

interface IGetStaticProps {
  params: {
    category: string;
  };
}

export async function getStaticProps({ params }: IGetStaticProps) {
  const allPostsWithCategory =
    (await getAllPostsWithCategory()) as TAllPostWithCategory[];
  const posts = allPostsWithCategory.filter(
    (post) => formatSlug(post.category) === params?.category
  );

  return {
    props: {
      posts,
      category: params.category,
    },
  };
}

export async function getStaticPaths() {
  const allPostsWithCategory =
    (await getAllPostsWithCategory()) as TAllPostWithCategory[];
  const paths =
    allPostsWithCategory.map((post) => `/${formatSlug(post?.category)}`) || [];
  return {
    paths,
    fallback: true,
  };
}
