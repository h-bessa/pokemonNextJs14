import {getPokemonTypeColor} from "@/utils/getPokemonTypeColor";

describe("getPokemonTypeColor", () => {
  test("returns right color depending on the type Grass and Poison", () => {
    expect(getPokemonTypeColor("Grass")).toBe("#73d13d");
    expect(getPokemonTypeColor("Poison")).toBe("#d4380d");
  })

  test("returns default color for unknown types", () => {
    expect(getPokemonTypeColor("UnknownType")).toBe("#000000");
  });
})
