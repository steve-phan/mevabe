import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { Roboto } from "@next/font/google";

import { getAllPostsWithCategory } from "libs/contentful";
import { initialSideBarRoute } from "libs/Providers/AppRouteProvider/AppRouteProvider";
import { IPostCategory, RouteItem, SidebarContext } from "hooks/useAppRoute";

import "../styles/globals.css";

const montserrat = Roboto({
  subsets: ["vietnamese", "latin"],
  display: "optional",
  weight: ["100", "300", "500"],
});

const CustomApp = ({
  Component,
  pageProps,
  sideBarRoute,
}: AppProps & { sideBarRoute: RouteItem }) => {
  return (
    <SidebarContext.Provider value={sideBarRoute || initialSideBarRoute}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </SidebarContext.Provider>
  );
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const allPostsWithCategory = ((await getAllPostsWithCategory()) ??
    []) as IPostCategory[];

  if (initialSideBarRoute?.routes?.length === 0) {
    initialSideBarRoute?.routes.push(...allPostsWithCategory);
  }

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, sideBarRoute: initialSideBarRoute };
};

export default CustomApp;
