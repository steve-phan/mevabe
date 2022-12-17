import { Footer } from "components/Footer/Footer";
import { Sidebar } from "components/Sidebar/Sidebar";
import { Meta } from "components/Meta/Meta";
import { IChildrenProps } from "libs/@types";

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <>
      <Meta />
      <div className="grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
        <div className="fixed lg:sticky top-0 left-0 right-0 py-0 shadow lg:shadow-none z-50 bg-gray-400">
          <Sidebar />
        </div>
        <div className="min-h-screen bg-pink-200">
          <article className="break-words">{children}</article>
          <Footer />
        </div>
        <div className="hidden lg:max-w-xs 2xl:block bg-red-400">
          <h1>Toc component</h1>
        </div>
      </div>
    </>
  );
};
