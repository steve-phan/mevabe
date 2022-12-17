import { useContext, createContext } from "react";
import { useRouter } from "next/router";

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
  return {
    ...getAppRoutes(cleanedPath, routeTree),
  };
};

export const SidebarContext = createContext<RouteItem>({ title: "root" });

function getAppRoutes(
  searchPath: string,
  currentRoute: RouteItem,
  ctx: RouteMeta = {}
): RouteMeta {
  const { routes } = currentRoute;

  if (ctx.route && !ctx.nextRoute) {
    ctx.nextRoute = currentRoute;
  }

  if (currentRoute.path === searchPath) {
    ctx.route = currentRoute;
  }

  if (!ctx.route) {
    ctx.prevRoute = currentRoute;
  }

  if (!routes) {
    return ctx;
  }

  for (const route of routes) {
    getAppRoutes(searchPath, route, ctx);
  }

  return ctx;
}
