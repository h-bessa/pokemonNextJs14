import { getRandomColor } from "@/utils/getRandomColor";
import { colors } from "@/constants";

describe("getRandomColor", () => {
  test("returns a color from the colors array", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    const color = getRandomColor();

    expect(colors).toContain(color);

    (Math.random as jest.Mock).mockRestore();
  })
})