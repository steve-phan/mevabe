import { formatSlug } from "./fomatSlug";

describe("fomatSlug", () => {
  const testcasesMapping = {
    "Hello wOrld": "hello-world",
    "Ein scHöne ;; tAg": "ein-schone-tag",
    "nice-slug": "nice-slug",
  };

  test.each(Object.entries(testcasesMapping))(
    "format  *** %s *** to be *** %s ***",
    (key, value) => {
      expect(formatSlug(key)).toBe(value);
    }
  );
});
