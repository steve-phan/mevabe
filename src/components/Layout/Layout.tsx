import { Footer } from "components/Footer/Footer";
import { Sidebar } from "components/Sidebar/Sidebar";
import { ScrollTopIcon } from "components/ScrollTopButton/ScrollTopIcon";
import { IChildrenProps } from "libs/@types";
import { SEO } from "components/SEO/SEO";
import { NewestStories } from "components/NewestStories/NewestStories";

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <>
      <SEO />
      <div className="grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
        <div className="fixed lg:sticky top-0 left-0 right-0 py-0 shadow lg:shadow-none z-50 bg-gray-400">
          <Sidebar />
        </div>
        {/* Add ml when screen is lg because of sidebar's scrollbar */}
        <div
          id="article_wrapper"
          className="flex flex-col min-h-screen pt-20
         lg:ml-4 lg:pt-4"
        >
          <article className="break-words grow">{children}</article>
          <ScrollTopIcon />
          <Footer />
        </div>
        <div className="hidden lg:max-w-xs 2xl:block border-l">
          <div className="fixed lg:max-w-xs w-full right-0 top-0 bottom-0">
            <h1 className="text-center py-3 text-lg font-bold border-b">
              Các bài đăng mới nhất
            </h1>
            <NewestStories />
          </div>
        </div>
      </div>
    </>
  );
};
