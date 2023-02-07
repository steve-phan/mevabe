import React from "react";
import Link from "next/link";

import { useAppRoute } from "hooks/useAppRoute";
import { formatSlug } from "utils/fomatSlug";

export const NewestStories = () => {
  const { routes } = useAppRoute();

  return (
    <ul className="p-4">
      {routes?.slice(0, 10).map(({ category, title, slug }) => {
        return (
          <li
            key={slug}
            className="text-lg text-cyan-900 hover:text-cyan-400 mb-1"
          >
            <Link
              href={`/${formatSlug(category)}/${slug}`}
              className="hover:underline"
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
