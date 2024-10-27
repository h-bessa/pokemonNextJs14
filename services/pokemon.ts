import {Pokemon} from "@/interfaces/pokemon";
import {API_URL_POKEMON, API_URL_POKEMONS} from "@/constants";

const fetchApi = async<T> (url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
      throw new Error('Failed to fetch pokemons');
  }
  return await res.json() as Promise<T>
}

export const getPokemons = async (): Promise<Pokemon[]> => {
  return await fetchApi<Pokemon[]>(API_URL_POKEMONS)
};

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  return await fetchApi<Pokemon>(`${API_URL_POKEMON}/${id}`)
};
