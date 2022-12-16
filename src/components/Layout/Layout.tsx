import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Meta } from "components/Meta/Meta";
import { IChildrenProps } from "libs/@types";

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
