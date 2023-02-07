import { Container } from "libs/shared-UI/Container";
import Intro from "components/Intro/Intro";
import { IBlogPost } from "libs/@types";
import { CategoriesSection } from "components/CategoriesSection/CategoriesSection";

import styles from "../styles/Home.module.css";
interface IHomeProps {
  allPosts: IBlogPost[];
  preview: boolean;
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <CategoriesSection />
          <Intro />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
