export const GET_ALL_POSTS = `
  title
  slug
  description
  body
  publishDate
  author {
    name
    company
    title
    facebook
    image {
      url
    }
  }
  heroImage {
    url
  }
`;

export const GET_CATEGORY_POSTS = `
  title
  slug
  category 
`;
