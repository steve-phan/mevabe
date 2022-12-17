import React from "react";

import { SidebarContext, RouteItem, IPostCategory } from "hooks/useAppRoute";

interface IAppRouteProviderProps {
  children: React.ReactNode;
}

export const initialSideBarRoute: RouteItem = {
  title: "Cuộc sống Đức",
  category: "cuộc sống Đức",
  heading: true,
  path: "/vn",
  routes: [] as unknown as IPostCategory[],
};

export const AppRouteProvider = ({ children }: IAppRouteProviderProps) => {
  return (
    <SidebarContext.Provider value={initialSideBarRoute}>
      {children}
    </SidebarContext.Provider>
  );
};
