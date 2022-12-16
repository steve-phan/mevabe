import Link from "next/link";
import cn from "classnames";

import { ContentfulImage } from "./ContentfulImage";
import { IBlogPost } from "../@types";

interface ICoverImageProps {
  alt: string;
  url: string;
  slug?: string;
  title?: string;
}

export const CoverImage = ({ url, alt, slug, title }: ICoverImageProps) => {
  const image = (
    <ContentfulImage
      width={680}
      height={340}
      alt={alt}
      className={cn(
        "mx-auto",
        "shadow-small",
        "hover:shadow-medium transition-shadow duration-200"
      )}
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
