import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {mockPokemons} from "@/__test__/mock/mockPokemons";
import SearchInputs from "@/components/Inputs/SearchInputs";
import {calculatePower} from "@/utils/calculatePower";


const setup = () => {
  const setFilteredPokemons = jest.fn();
  const filteredPokemon = [mockPokemons[325], mockPokemons[497], mockPokemons[498]];

  render(
    <SearchInputs
      pokemons={mockPokemons}
      pokemonsFiltered={{filteredPokemons: mockPokemons, setFilteredPokemons}}
    />
  );
  return {
    filteredPokemon,
    searchInput: screen.getByTestId('search-input'),
    powerThresholdInput: screen.getByTestId('powerThreshold-input'),
    countTag: screen.getByTestId('count'),
  };
};


describe('SearchInputs', () => {
  test('render 3 pokemons when typing "pig" in search input', async () => {
    const {searchInput, filteredPokemon} = setup();

    await userEvent.type(searchInput, 'pig');

    await waitFor(() => {
      expect(filteredPokemon).toHaveLength(3);
      expect(filteredPokemon.every(pokemon => pokemon.name.toLowerCase().includes('pig'))).toBe(true);
    });
  });

  test('updates the count based on power threshold', async () => {
    const {powerThresholdInput, countTag, searchInput} = setup();
    await userEvent.type(searchInput, 'pig');
    await userEvent.type(powerThresholdInput, '1');

    await waitFor(() => {
      expect(countTag).toHaveTextContent('Count: 3');
    });

    await userEvent.clear(powerThresholdInput)
    await userEvent.type(powerThresholdInput, '400');

    await waitFor(() => {
      expect(countTag).toHaveTextContent('Count: 2');
    });
  });

  test('displays correct min and max power values', async () => {
    const {filteredPokemon} = setup();

    await waitFor(() => {
      const powers = filteredPokemon.map(pokemon => calculatePower(pokemon));
      const minPower = Math.min(...powers);
      const maxPower = Math.max(...powers);

      expect(minPower).toBe(308);
      expect(maxPower).toBe(470);
    });
  });

})
;