import { useContext, createContext } from "react";
import { useRouter } from "next/router";

import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

export type RouteTag =
  | "thủ tục đức"
  | "visa đức"
  | "du học đức"
  | "điều dưỡng đức"
  | "cuộc sống đức";

export interface IPostCategory {
  title: string;
  slug: string;
  category: string;
}

export interface RouteItem {
  category?: string;
  title: string;
  description?: string;
  tags?: RouteTag[];
  path?: string;
  heading?: boolean;
  routes?: IPostCategory[];
}

export interface Routes {
  routes: RouteItem[];
}

export interface RouteMeta {
  prevRoute?: RouteItem;
  nextRoute?: RouteItem;
  route?: RouteItem;
  breadcrumbs?: RouteItem[];
}

export const useAppRoute = (rootRoute?: RouteItem) => {
  const sidebarContext = useContext(SidebarContext);
  const routeTree = rootRoute || sidebarContext;
  const router = useRouter();
  const cleanedPath = router.asPath.split(/[\?\#]/)[0];
  const appRoutes = getAppRoutes(cleanedPath, routeTree);
  return { appRoutes, routes: routeTree?.routes };
};

export const SidebarContext = createContext<RouteItem>({ title: "root" });

interface IAppRoutes {
  category: string;
  posts: {
    title: string;
    slug: string;
  }[];
}

function getAppRoutes(
  searchPath: string,
  currentRoute: RouteItem,
  ctx: RouteMeta = {}
): IAppRoutes[] {
  const { routes } = currentRoute;
  const categoryMapping = {} as Record<any, any>;

  if (routes) {
    routes.forEach((route) => {
      const newRoute = {
        title: route.title,
        slug: route.slug,
      };
      const oldRoutes = categoryMapping[route?.category];
      categoryMapping[route?.category] = Boolean(oldRoutes)
        ? [...oldRoutes, newRoute]
        : [newRoute];
    });
  }

  return Object.entries(categoryMapping).map(([category, posts]) => {
    return {
      category: capitalizeFirstLetter(category),
      posts,
    };
  });
}
