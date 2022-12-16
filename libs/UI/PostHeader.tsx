import { IBlogPost } from "../@types";
import { Avatar } from "./Avatar";
import { CoverImage } from "./CoverImage";
import { DateComponent } from "./DateComponent";
import { PostTitle } from "./PostTitle";

export const PostHeader = ({
  title,
  heroImage,
  publishDate,
  author,
  slug,
}: Omit<IBlogPost, "description" | "body">) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} image={author.image} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={heroImage.url} alt={slug} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} image={author.image} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={publishDate} />
        </div>
      </div>
    </>
  );
};
