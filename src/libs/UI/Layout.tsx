import { IChildrenProps } from "../@types";
import { Footer } from "./Footer";
import { Meta } from "./Meta";

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
