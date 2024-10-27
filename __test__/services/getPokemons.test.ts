import { API_URL_POKEMONS } from '@/constants';
import { mockPokemons } from "@/__test__/mock/mockPokemons";
import { getPokemons } from "@/services/pokemon";

describe('getPokemons', () => {

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should fetch all pokemons successfully', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPokemons)
    } as Response);

    const result = await getPokemons();

    expect(global.fetch).toHaveBeenCalledWith(API_URL_POKEMONS);
    expect(result).toEqual(mockPokemons);
  });

  it('should handle error', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false
    } as Response);

    await expect(getPokemons()).rejects.toThrow('Failed to fetch pokemons');
  });

});
