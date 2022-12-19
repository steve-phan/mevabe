import React from "react";
import NextLink from "next/link";

import { useAppRoute } from "hooks/useAppRoute";

export const SidebarRoutes = () => {
  const appRoutes = useAppRoute();

  return (
    <ul>
      {appRoutes.map((route, index) => {
        console.log({ route });
        return (
          <li key={`${route?.category}-${index}`}>
            <div className="cursor-pointer p-2 pr-2 pl-5 w-full font-bold text-link">
              {route?.category}
            </div>
            <div className="cursor-pointer p-2 pr-2 pl-7 w-full">
              {route?.posts &&
                route?.posts?.map(({ title, slug }, index) => {
                  return (
                    <NextLink key={`${slug}${index}`} href={slug}>
                      {title}
                    </NextLink>
                  );
                })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
