import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonsTable from "@/components/Table/PokemonsTable";
import {mockPokemons} from "@/__test__/mock/mockPokemons";

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

jest.mock("@/utils/getPokemonTypeColor", () => ({
  getPokemonTypeColor: () => "blue"
}));

describe('PokemonsTable', () => {

  test('renders table with correct data', () => {
    render(<PokemonsTable pokemons={[mockPokemons[0]]} />);

    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Power')).toBeInTheDocument();

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('Poison')).toBeInTheDocument();
    expect(screen.getByText('HP: 45')).toBeInTheDocument();
    expect(screen.getByText('Attack: 49')).toBeInTheDocument();
  });

  test('shows See Details link', () => {
    render(<PokemonsTable pokemons={[mockPokemons[0]]} />);
    expect(screen.getByTestId('see-details')).toBeInTheDocument();
  });
});