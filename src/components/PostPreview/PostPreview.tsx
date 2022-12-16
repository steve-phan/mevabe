import { IBlogPost } from "libs/@types";
import { Avatar } from "libs/shared-UI/Avatar";
import { CoverImage } from "libs/shared-UI/CoverImage";
import { DateComponent } from "libs/shared-UI/DateComponent";
import Link from "next/link";

type TPostPreviewProps = Omit<Omit<IBlogPost, "description">, "body">;

export const PostPreview = ({
  title,
  heroImage,
  publishDate,
  author,
  slug,
}: TPostPreviewProps) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} alt={slug} url={heroImage?.url} />
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
