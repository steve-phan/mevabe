import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "../styles/Home.module.css";
import { getAllBlogPosts } from "libs/contentful";
import { Container } from "libs/shared-UI/Container";
import Intro from "components/Intro/Intro";
import { HeroPost } from "libs/shared-UI/HeroPost";
import { IBlogPost } from "libs/@types";
import { Layout } from "components/Layout/Layout";
import { MoreStories } from "components/MoreStories/MoreStories";
import { useAppRoute } from "hooks/useAppRoute";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  allPosts: IBlogPost[];
  preview: boolean;
}

export default function Home({ allPosts, preview }: IHomeProps) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const ctx = useAppRoute();

  return (
    <>
      <Layout>
        <main className={styles.main}>
          <Container>
            <Intro />
            {/* {heroPost && <HeroPost {...heroPost} />} */}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllBlogPosts(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
