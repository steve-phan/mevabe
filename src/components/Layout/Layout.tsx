import { IChildrenProps } from "libs/@types";
import { Footer } from "components/Footer/Footer";
import { ScrollTopIcon } from "components/ScrollTopButton/ScrollTopIcon";
import { SEO } from "components/SEO/SEO";
import { Header } from "components/Header/Header";

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <>
      <SEO />
      <Header />
      <div className="grid m-auto lg:max-w-5xl">
        <div
          id="article_wrapper"
          className="flex flex-col min-h-screen pt-4
         lg:ml-4 lg:pt-4"
        >
          <article className="break-words grow">{children}</article>
          <ScrollTopIcon />
          <Footer />
        </div>
      </div>
    </>
  );
};
