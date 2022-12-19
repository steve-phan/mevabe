import { PostPreview } from "components/PostPreview/PostPreview";
import { IBlogPost } from "libs/@types";

interface IMoreStoriesProps {
  posts: IBlogPost[];
}

export const MoreStories = ({ posts }: IMoreStoriesProps) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            category={post.category}
            heroImage={post.heroImage}
            publishDate={post.publishDate}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};
