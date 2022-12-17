import React from "react";

import { AppRouteProvider } from "../AppRouteProvider/AppRouteProvider";

interface IGlobalProviders {
  children: React.ReactNode;
}

export const GlobalProviders = ({ children }: IGlobalProviders) => {
  return <AppRouteProvider>{children}</AppRouteProvider>;
};
