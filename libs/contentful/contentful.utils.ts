export const extractPostsFromEntries = (fetchResponse: Record<string, any>) => {
  return fetchResponse?.data?.blogPostCollection?.items;
};
