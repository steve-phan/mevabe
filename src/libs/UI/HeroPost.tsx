import Link from "next/link";
import { IBlogPost } from "../@types";
import { Avatar } from "./Avatar";

import { CoverImage } from "./CoverImage";
import { DateComponent } from "./DateComponent";

export const HeroPost = ({
  title,
  heroImage,
  publishDate,
  author,
  slug,
}: IBlogPost) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} alt={slug} url={heroImage?.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={publishDate} />
          </div>
        </div>
        <div>
          {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
          {author && <Avatar name={author.name} image={author.image} />}
        </div>
      </div>
    </section>
  );
};
