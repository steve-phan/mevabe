import { Footer } from "./Footer";
import { Meta } from "./Meta";

export const Layout = ({ preview, children }) => {
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
