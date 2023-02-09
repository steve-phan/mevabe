import React from "react";
import Image from "next/image";
import { Abril_Fatface } from "@next/font/google";

import { Sidebar } from "components/Sidebar/Sidebar";
import Link from "next/link";

const abril_fatface = Abril_Fatface({
  subsets: ["latin"],
  display: "optional",
  weight: ["400"],
});

export const Header = () => {
  return (
    <div
      role="banner"
      className="sticky top-0 left-0 right-0 h-12 z-50 bg-primary"
    >
      <div className="m-auto flex items-center lg:max-w-5xl">
        <Sidebar />
        <Link href={"/"} className="flex items-center">
          <Image
            src="/lotus-logo.png"
            width={48}
            height={48}
            alt="thongtin.de"
          />
          <div
            className={`pl-4 text-white font-bold text-xl tracking-wider cursor-pointer ${abril_fatface.className}`}
          >
            thongtin.de
          </div>
        </Link>
      </div>
    </div>
  );
};
