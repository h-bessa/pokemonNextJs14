import Head from "next/head";
import {usePokemonContext} from "@/context/PokemonProvider";
import ErrorBoundary from "@/components/Error/ErrorBoundary";
import PokemonListLoading from "@/components/Loading/PokemonList/PokemonListLoading";
import PokemonsListContainer from "@/components/PokemonsListContainer";


export default function HomePage() {
  const { pokemons, loading, error } = usePokemonContext();
  return (
    <>
      <Head>
        <title>Pokemon NextJs 14</title>
        <meta name="description" content="pokemon app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary error={error}>
        {loading ? (
          <PokemonListLoading />
        ) : (
          <PokemonsListContainer pokemons={pokemons} />
        )}
      </ErrorBoundary>
    </>
  );
}
