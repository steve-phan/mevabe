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
        {/* Add ml when screen is lg because of sidebar's scrollbar */}
        <div
          className="flex flex-col min-h-screen bg-pink-200 pt-20
         lg:ml-4 lg:pt-4"
        >
          <article className="break-words grow">{children}</article>
          <Footer />
        </div>
        <div className="hidden lg:max-w-xs 2xl:block bg-red-400">
          <h1>Toc component</h1>
        </div>
      </div>
    </>
  );
};
