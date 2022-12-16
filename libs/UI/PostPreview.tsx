import Link from "next/link";

import { IBlogPost } from "../@types";
import { Avatar } from "./Avatar";
import { CoverImage } from "./CoverImage";
import { DateComponent } from "./DateComponent";

type TPostPreviewProps = Omit<Omit<IBlogPost, "description">, "body">;

export const PostPreview = ({
  title,
  heroImage,
  publishDate,
  author,
  slug,
}: TPostPreviewProps) => {
  console.log({ slug });
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={heroImage?.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={publishDate} />
      </div>
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
      {author && <Avatar name={author.name} image={author?.image} />}
    </div>
  );
};
