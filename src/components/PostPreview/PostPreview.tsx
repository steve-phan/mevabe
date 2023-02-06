import Link from "next/link";

import { IBlogPost } from "libs/@types";
import { Avatar } from "libs/shared-UI/Avatar";
import { CoverImage } from "libs/shared-UI/CoverImage";
import { DateComponent } from "libs/shared-UI/DateComponent";

import { formatSlug } from "utils/fomatSlug";

type TPostPreviewProps = Omit<Omit<IBlogPost, "description">, "body">;

export const PostPreview = ({
  title,
  heroImage,
  publishDate,
  author,
  slug,
  category,
}: TPostPreviewProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/${formatSlug(category)}/${slug}`}
        className="hover:underline"
      >
        <div className="mb-5 h-64">
          <CoverImage
            category={category}
            title={title}
            alt={slug}
            url={heroImage?.url}
            width={400}
          />
        </div>
        <h3 className="text-2xl mb-3 leading-snug flex-grow">{title}</h3>
        <div className="max-w-2xl justify-items-center">
          <div className="flex items-center  mb-6">
            <DateComponent dateString={publishDate} />
            {author && <Avatar name={author.name} image={author.image} />}
          </div>
        </div>
      </Link>
    </div>
  );
};
