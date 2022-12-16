import { GET_ALL_POSTS } from "./contentful.constants";
import { extractPostsFromEntries } from "./contentful.utils";

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
