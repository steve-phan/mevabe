import { ReactNode } from "react";

export interface IBlogPost {
  title: string;
  slug: string;
  description: string;
  body: string;
  publishDate: string;
  author: IAuthor;
  heroImage: IHeroImage;
}

export interface IHeroImage {
  url: string;
}

export interface IAuthor {
  name: string;
  company: string;
  title: string;
  facebook: string;
  image: {
    url: string;
  };
}

export interface IChildrenProps {
  children: ReactNode;
}
