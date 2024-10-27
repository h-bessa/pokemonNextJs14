import React from "react";
import '@testing-library/jest-dom';
import {render, screen, waitFor} from "@testing-library/react";
import PokemonDetails from "@/components/PokemonDetails";
import {mockPokemons} from "@/__test__/mock/mockPokemons";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('@/utils/sanitizeName', () => ({
  sanitizeName: jest.fn((name) => name.toLowerCase().replace(/ /g, "-")),
}));

jest.mock("next/image", () => (props:any) => <img {...props} />);

describe("PokemonDetails", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("displays pokemon with ID 1", async () => {
    render(<PokemonDetails pokemon={mockPokemons[0]}/>)
    await waitFor(() => {
      expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Bulbasaur')
      expect(screen.getByTestId('stat-1')).toHaveTextContent('Type: Grass, Poison')
    })
  });

  test("renders pokemon image", async () => {
    render(<PokemonDetails pokemon={mockPokemons[0]}/>);
    await waitFor(() => {
      expect(screen.getByTestId('image')).toHaveAttribute("src", "/images/pokemons/bulbasaur.jpg");
    })
  });

});
