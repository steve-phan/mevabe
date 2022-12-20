import NextLink from "next/link";
import { Suspense, useEffect, useState } from "react";
import cn from "classnames";

import { useSideBarScroll } from "hooks/useSideBarScroll";
import { IconHamburger, IconClose } from "Icons";
import { SidebarRoutes } from "./SidebarRoutes";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();
  const { scrollParentRef } = useSideBarScroll({ isOpen });

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [asPath]);

  return (
    <div
      className={cn(
        "sticky top-0 lg:bottom-0 lg:h-screen flex flex-col",
        isOpen && "h-screen"
      )}
    >
      <nav className="items-center w-full flex lg:block justify-between bg-wash dark:bg-wash-dark pt-0 lg:pt-4 pr-5 lg:px-5 z-50">
        <div className="xl:w-full xl:max-w-xs flex items-center">
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className={cn("flex lg:hidden items-center h-full px-4", {
              "text-link dark:text-link-dark mr-0": isOpen,
            })}
          >
            {isOpen ? <IconClose /> : <IconHamburger />}
          </button>
          <NextLink href="/">
            <div className="inline-flex text-lg font-bold items-center text-red-400 dark:text-primary-dark py-1 mr-0 sm:mr-3 whitespace-nowrap h-10 my-2">
              MeVaBe
            </div>
          </NextLink>
        </div>
      </nav>

      <div
        ref={scrollParentRef}
        className="overflow-y-scroll no-bg-scrollbar lg:w-[336px] grow bg-wash dark:bg-wash-dark"
      >
        <aside
          className={cn(
            `lg:grow lg:flex flex-col w-full pb-8 lg:pb-0 lg:max-w-xs z-10`,
            isOpen ? "block z-40" : "hidden lg:block"
          )}
        >
          <nav
            role="navigation"
            style={{ "--bg-opacity": ".2" } as React.CSSProperties}
            className="w-full lg:h-auto grow pr-0 lg:pr-5 pt-6 lg:py-6 md:pt-4 lg:pt-4 scrolling-touch scrolling-gpu"
          >
            <Suspense fallback={null}>
              <SidebarRoutes />
            </Suspense>
          </nav>
        </aside>
      </div>
    </div>
  );
};
