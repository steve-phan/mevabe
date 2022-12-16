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
