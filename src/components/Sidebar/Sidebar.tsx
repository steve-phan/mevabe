import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import cn from "classnames";

import { useSideBarScroll } from "hooks/useSideBarScroll";
import { IconHamburger, IconClose } from "Icons";
import { defaultSEO } from "components/SEO/SEO.config";

import { SidebarRoutes } from "./SidebarRoutes";

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
        "w-10 h-10 flex items-center justify-center",
        isOpen && "h-screen"
      )}
    >
      <nav className="bg-white">
        <div className="xl:w-full xl:max-w-xs flex items-center">
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className={cn("flex lg:hidden items-center h-full text-primary", {
              "mr-0": isOpen,
            })}
          >
            {isOpen ? <IconClose /> : <IconHamburger />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={scrollParentRef}
          className="fixed z-40 top-12 left-0 right-0 bottom-0 bg-white"
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
      )}
    </div>
  );
};
