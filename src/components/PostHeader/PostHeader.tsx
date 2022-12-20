import { IBlogPost } from "libs/@types";
import { Avatar } from "libs/shared-UI/Avatar";
import { CoverImage } from "libs/shared-UI/CoverImage";
import { DateComponent } from "libs/shared-UI/DateComponent";
import { PostTitle } from "libs/shared-UI/PostTitle";

export const PostHeader = ({
  title,
  heroImage,
  publishDate,
  author,
  slug,
  category,
}: Omit<IBlogPost, "description" | "body">) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center  mb-6 justify-center">
          <DateComponent dateString={publishDate} />
          {author && <Avatar name={author.name} image={author.image} />}
        </div>
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          category={category}
          title={title}
          url={heroImage.url}
          alt={slug}
        />
      </div>
    </>
  );
};
