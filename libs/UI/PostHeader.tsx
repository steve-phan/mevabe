import { Avatar } from "./Avatar";
import { CoverImage } from "./CoverImage";
import { DateComponent } from "./DateComponent";
import { PostTitle } from "./PostTitle";

interface IPostHeader {
  title: string;
  coverImage: {
    url: string;
  };
  date: Date;
  author: {
    name: string;
    picture: string;
  };
}

export const PostHeader = ({
  title,
  coverImage,
  date,
  author,
}: IPostHeader) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
};
