import { IChildrenProps } from "../@types";

export const Container = ({ children }: IChildrenProps) => {
  return <div className="container mx-auto px-5">{children}</div>;
};
