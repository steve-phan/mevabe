export const extractPostsFromEntries = (fetchResponse: Record<string, any>) => {
  return fetchResponse?.data?.blogPostCollection?.items;
};

export const extractPost = (fetchResponse: Record<string, any>) => {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
};
