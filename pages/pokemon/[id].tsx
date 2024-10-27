import React from 'react';
import PokemonInfoContainer from '@/components/PokemonInfoContainer';
import {getPokemonById} from "@/services/pokemon";
import {GetServerSideProps} from "next";
import {Pokemon} from "@/interfaces/pokemon";
import ErrorBoundary from "@/components/Error/ErrorBoundary";

interface PokemonPageProps {
  pokemon?: Pokemon;
  id: string;
  error?: { status: boolean; message: string };
}

const PokemonPageWrapper= ({ pokemon, id, error }:PokemonPageProps) => {
  return (
    <ErrorBoundary error={error}>
      {pokemon && <PokemonInfoContainer pokemon={pokemon} id={id} />}
    </ErrorBoundary>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  try {
    const pokemon = await getPokemonById(id);
    if (!pokemon) {
      return {
        props: {
          id,
          error: { status: true, message: 'Error when fetching one pokemon' },
        },
      };
    }

    return {
      props: {
        pokemon,
        id,
      },
    };
  } catch (err) {
    return {
      props: {
        id,
        error: { status: true, message: 'Error when fetching one pokemon' },
      },
    };
  }
};
export default PokemonPageWrapper;
