import { sanitizeName } from "@/utils/sanitizeName";

describe("sanitizeName", () => {
  test("removes dot and spaces and converts to lowercase", () => {
    const result = sanitizeName("Mr. Mime");
    expect(result).toBe("mrmime");
  });
})