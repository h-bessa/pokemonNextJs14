import getMaxPokemonsStats from "@/utils/getMaxPokemonsStats";
import { Pokemon } from "@/interfaces/pokemon";
import {mockPokemons} from "@/__test__/mock/mockPokemons";

describe("getMaxPokemonsStats", () => {
  test("returns the maximum stats across multiple pokemons", () => {
    const pokemons: Pokemon[] = [mockPokemons[0], mockPokemons[1], mockPokemons[2]]

    const result = getMaxPokemonsStats(pokemons);

    expect(result).toEqual({
      hp: 80,
      attack: 82,
      defense: 83,
      special_attack: 100,
      special_defense: 100,
      speed: 80,
    });
  })
})
