import { formatSlug } from "./formatSlug";

describe("formatSlug", () => {
  it("should format Vietnamese slug as expected", () => {
    const expectedSlug = "xin-chao-vietnam";
    const result = formatSlug("xin chào ViệtNam");
    expect(result).toEqual(expectedSlug);
  });

  it("should format when a slug with a number and special char", () => {
    const expectedSlug = "xin-4-chao-vietnam";
    const result = formatSlug("xin_  4 chào ! ---@ViệtNam");
    expect(result).toEqual(expectedSlug);
  });
});
