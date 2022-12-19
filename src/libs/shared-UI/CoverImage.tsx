import Link from "next/link";
import cn from "classnames";

import { ContentfulImage } from "./ContentfulImage";

interface ICoverImageProps {
  alt: string;
  url: string;
  slug?: string;
  title?: string;
  width?: number;
  height?: number;
}

export const CoverImage = ({
  url,
  alt,
  slug,
  title,
  width,
  height,
}: ICoverImageProps) => {
  const image = (
    <ContentfulImage
      width={width || 680}
      height={height || 340}
      alt={alt}
      className={cn(
        "h-full",
        "w-full",
        "mx-auto",
        "shadow-small",
        "hover:shadow-medium transition-shadow duration-200"
      )}
      src={url}
    />
  );

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
};
