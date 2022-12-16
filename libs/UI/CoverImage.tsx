import Link from "next/link";
import cn from "classnames";

import { ContentfulImage } from "./ContentfulImage";
import { IBlogPost } from "../@types";

interface ICoverImageProps {
  title: string;
  url: string;
  slug: string;
}

export const CoverImage = ({ title, url, slug }: ICoverImageProps) => {
  console.log({ url });
  const image = (
    <ContentfulImage
      width={1600}
      height={800}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
