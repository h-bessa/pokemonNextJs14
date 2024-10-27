import {createContext} from "react";
import {PokemonStats, Pokemon} from "@/interfaces/pokemon";

export type AppContextType = {
  pokemons: Pokemon[];
  loading: boolean;
  error: { status: boolean, message: string };
  maxPokemonsStat: PokemonStats | null;
  pokemonsLength:number
};

export const initialAppContextState = {
  pokemons: [],
  loading: true,
  error: {status: false, message: ''},
  maxPokemonsStat: null,
  pokemonsLength: 0
}


export const PokemonContext = createContext<AppContextType>(initialAppContextState)