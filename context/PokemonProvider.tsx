import {ReactNode, useContext, useEffect, useState} from "react";
import {PokemonContext, initialAppContextState, AppContextType} from "./PokemonContext";
import {PokemonStats, Pokemon} from "@/interfaces/pokemon";
import {getPokemons} from "@/services/pokemon";
import getMaxPokemonsStats from "@/utils/getMaxPokemonsStats";

export const PokemonProvider = ({children}: { children: ReactNode }) => {

  const [apiState, setApiState] = useState<{
    pokemons: Pokemon[];
    loading: boolean;
    error: { status: boolean, message: string }
    maxPokemonsStat: PokemonStats | null
    pokemonsLength: number
  }>(initialAppContextState);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemons = await getPokemons();
        setApiState((prevState) => ({...prevState, pokemons, loading: false, maxPokemonsStat: getMaxPokemonsStats(pokemons), pokemonsLength: pokemons.length}));
      } catch (e) {
        console.error(`⚠️ Error during data fetch: ${e}`);
        setApiState({...initialAppContextState, error:{status:true, message:`⚠️ Error during data fetch: ${e}`}});
      }
    };

    fetchPokemons();
  }, []);


  return <PokemonContext.Provider value={apiState}>{children}</PokemonContext.Provider>;
};

export const usePokemonContext = ():AppContextType => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};