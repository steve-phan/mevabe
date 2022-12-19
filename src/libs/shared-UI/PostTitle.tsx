import { IChildrenProps } from "../@types";

export const PostTitle = ({ children }: IChildrenProps) => {
  return (
    <h1 className="mdx-heading mt-0 text-center text-primary dark:text-primary-dark -mx-.5 break-words text-4xl font-bold leading-tight">
      {children}
    </h1>
  );
};
