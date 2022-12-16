import { GET_ALL_POSTS } from "./contentful.constants";
import { extractPost, extractPostsFromEntries } from "./contentful.utils";

export const fetchGraphQL = async (query: string, preview = false) => {
  try {
    const fetchResponse = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    );
    return await fetchResponse.json();
  } catch (error) {
    console.log({ error });
  }
};

export const getAllBlogPosts = async (preview: boolean) => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: publishDate_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
         ${GET_ALL_POSTS}
        }
      }
    }`,
    preview
  );
  return extractPostsFromEntries(entries);
};

export const getAllPostsWithSlug = async () => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_exists: true }, order: publishDate_DESC) {
        items {
          ${GET_ALL_POSTS}
        }
      }
    }`
  );
  return extractPostsFromEntries(entries);
};

export async function getPostAndMorePosts(slug: string, preview = true) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${GET_ALL_POSTS}
        }
      }
    }`,
    preview
  );
  console.log({ entry });
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_not_in: "${slug}" }, order: publishDate_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${GET_ALL_POSTS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostsFromEntries(entries),
  };
}
