import {API_URL_POKEMON} from '@/constants';
import { mockPokemons } from "@/__test__/mock/mockPokemons";
import {getPokemonById, getPokemons} from "@/services/pokemon";

describe('getPokemons', () => {

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('should fetch one pokemon successfully', async () => {
    const id = "1"
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([mockPokemons[0]])
    } as Response);

    const result = await getPokemonById(id);

    expect(global.fetch).toHaveBeenCalledWith(`${API_URL_POKEMON}/${id}`);
    expect(result).toEqual([mockPokemons[0]]);
  });

  test('should handle error', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false
    } as Response);

    await expect(getPokemons()).rejects.toThrow('Failed to fetch pokemons');
  });

});
