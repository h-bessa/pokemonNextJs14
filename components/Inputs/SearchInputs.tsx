import {Input, InputNumber, Tag, Typography} from "antd";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {calculatePower} from "@/utils/calculatePower";
import styled from "styled-components";
import {COUNT, MAX, MIN, POWER_TRESHOLD, SEARCH} from "@/constants";
import {Pokemon} from "@/interfaces/pokemon";
import {sanitizeName} from "@/utils/sanitizeName";

interface ISearchInputProps {
  pokemons: Pokemon[],
  pokemonsFiltered: {
    filteredPokemons: Pokemon[],
    setFilteredPokemons: (pokemons: Pokemon[]) => void
  }
}

const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px; 
      margin-top: 20px;
  `;

const StyledField = styled.div`
      width: 100%;
      margin-bottom: 15px;
  `;

const TagsContainer = styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
  `;


const SearchInputs = ({pokemons, pokemonsFiltered}: ISearchInputProps) => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [powerThreshold, setPowerThreshold] = useState<number | null>(null);
  const {filteredPokemons, setFilteredPokemons} = pokemonsFiltered


  const filterPokemonsByName = useCallback((): Pokemon[] => {
    return inputSearch
      ? pokemons.filter(pokemon =>
        sanitizeName(pokemon.name).includes(sanitizeName(inputSearch))
      )
      : pokemons;
  }, [inputSearch, pokemons]);

  const countOverThreshold = useMemo((): number => {
    return filterPokemonsByName().filter((pokemon: Pokemon) => calculatePower(pokemon) > (powerThreshold ?? 0)).length
  }, [powerThreshold, filterPokemonsByName]);

  const pokemonPowerArray = useCallback((): number[] => {
    return filteredPokemons.map((pokemon: Pokemon) => calculatePower(pokemon))
  }, [filteredPokemons])

  const minPower = useMemo((): number => {
    return filteredPokemons.length ? Math.min(...pokemonPowerArray()) : 0;
  }, [filteredPokemons]);

  const maxPower = useMemo((): number => {
    return filteredPokemons.length ? Math.max(...pokemonPowerArray()) : 0;
  }, [filteredPokemons]);

  useEffect(() => {
    setFilteredPokemons(filterPokemonsByName());
  }, [inputSearch]);


  return (
    <Container>
      <Typography.Title level={5}>{SEARCH}</Typography.Title>
      <StyledField>
        <Input
          data-testid='search-input'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </StyledField>

      <Typography.Title level={5}>{POWER_TRESHOLD}</Typography.Title>
      <StyledField>
        <InputNumber
          data-testid='powerThreshold-input'
          value={powerThreshold}
          onChange={(value) => setPowerThreshold(value || 0)}
          style={{width: '100%'}}
        />
      </StyledField>

      <TagsContainer>
        <Tag data-testid='count' color="blue">{COUNT}: {countOverThreshold}</Tag>
        <Tag data-testid='min' color="green">{MIN}: {minPower}</Tag>
        <Tag data-testid='max' color="red">{MAX}: {maxPower}</Tag>
      </TagsContainer>
    </Container>
  );
}

export default SearchInputs