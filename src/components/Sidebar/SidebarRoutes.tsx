import React, { useState } from "react";
import NextLink from "next/link";

import { useAppRoute } from "hooks/useAppRoute";
import { formatSlug } from "utils/fomatSlug";
import { IconPlus, IconMinus } from "Icons";

interface ICategoryOpenState {
  activeIndex: null | number;
}

export const SidebarRoutes = () => {
  const { appRoutes } = useAppRoute();

  const [categoryOpen, setCategoryOpen] = useState<ICategoryOpenState>({
    activeIndex: null,
  });

  const handleCategoryOpen = (index: number) => {
    const activeIndex = index === categoryOpen.activeIndex ? null : index;
    setCategoryOpen({ activeIndex });
  };
  return (
    <ul>
      {appRoutes.map((route, outerIndex) => {
        return (
          <li key={`${route?.category}-${outerIndex}`}>
            <div className="relative cursor-pointer p-2 pr-2 pl-5 w-full font-bold text-box-title">
              <NextLink
                key={`${route?.category}${outerIndex}`}
                href={`/${formatSlug(route.category)}`}
              >
                {route?.category}
              </NextLink>
              <div
                data-testid={`collapse-menu-${outerIndex}`}
                className="absolute right-2 top-2 w-6 h-6 text-black"
                onClick={() => handleCategoryOpen(outerIndex)}
              >
                {categoryOpen.activeIndex === outerIndex ? (
                  <IconMinus />
                ) : (
                  <IconPlus />
                )}
              </div>
            </div>
            <div className="cursor-pointer p-2 pr-2 pl-7 w-full">
              {outerIndex === categoryOpen.activeIndex &&
                route?.posts?.map(({ title, slug }, innerIndex) => {
                  return (
                    <NextLink
                      key={`${slug}${innerIndex}`}
                      href={`/${formatSlug(route.category)}/${slug}`}
                    >
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
