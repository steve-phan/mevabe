import React, { ReactNode } from "react";

interface ICategoryBoxProps {
  boxTitle: string;
  children: ReactNode;
}
/**
 *
 * Bear in mind the SAME bg-color of title and box
 *
 */
export const CategoryBox = ({ boxTitle, children }: ICategoryBoxProps) => {
  return (
    <div className="relative border rounded p-2 m-2">
      <p className="absolute -top-5 left-0 text-box-title bg-white  p-2 text-sm font-bold z-10">
        {boxTitle}
      </p>
      <div className="p-1">{children}</div>
    </div>
  );
};
