import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { useAppRoute } from "hooks/useAppRoute";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const appRoutes = useAppRoute();
  return (
    <div
      className={cn(
        "sticky top-0 lg:bottom-0 lg:h-screen flex flex-col",
        isOpen && "h-screen"
      )}
    >
      <nav className="items-center w-full flex lg:block justify-between bg-wash dark:bg-wash-dark pt-0 lg:pt-4 pr-5 lg:px-5 z-50">
        <Link href="/" className="hover:underline">
          Sidebar
        </Link>

        <ul>
          {appRoutes.map((route, index) => {
            return (
              <li key={`${route?.category}-${index}`}>{route?.category}</li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
