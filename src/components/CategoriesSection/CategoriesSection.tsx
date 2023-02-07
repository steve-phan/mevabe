import React from "react";
import Link from "next/link";

import { useAppRoute } from "hooks/useAppRoute";
import { CategoryBox } from "libs/shared-UI/CategoryBox";
import { formatSlug } from "utils/fomatSlug";

export const CategoriesSection = () => {
  const { routes, appRoutes } = useAppRoute();
  return (
    <div className="flex flex-wrap">
      {appRoutes.map(({ category, posts }) => {
        return (
          <div className="w-full md:w-1/2 lg:w-1/3 p-1" key={category}>
            <CategoryBox boxTitle={category}>
              {posts?.slice(0, 5).map(({ title, slug }, index) => {
                return (
                  <Link
                    href={`/${formatSlug(category)}/${slug}`}
                    className="hover:underline text-sm font-normal"
                    key={slug}
                  >
                    {title}
                  </Link>
                );
              })}
            </CategoryBox>
          </div>
        );
      })}
    </div>
  );
};
