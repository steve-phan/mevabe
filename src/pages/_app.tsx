import type { AppProps, AppContext } from "next/app";
import App from "next/app";

import { getAllPostsWithCategory } from "libs/contentful";
import { initialSideBarRoute } from "libs/Providers/AppRouteProvider/AppRouteProvider";
import { IPostCategory, RouteItem, SidebarContext } from "hooks/useAppRoute";

import "../styles/globals.css";

const CustomApp = ({
  Component,
  pageProps,
  sideBarRoute,
}: AppProps & { sideBarRoute: RouteItem }) => {
  return (
    <SidebarContext.Provider value={sideBarRoute || initialSideBarRoute}>
      <Component {...pageProps} />
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
