import React, {useState} from 'react';
import styled from "styled-components";
import {Pokemon} from "@/interfaces/pokemon";
import SearchInputs from "@/components/Inputs/SearchInputs";
import PokemonsTable from "@/components/Table/PokemonsTable";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 100px;
`;

const PokemonsListContainer = ({pokemons}: { pokemons: Pokemon[] }) => {

  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);

  return (
    <Container>
      <SearchInputs pokemons={pokemons} pokemonsFiltered={{filteredPokemons, setFilteredPokemons}}/>
      <PokemonsTable pokemons={filteredPokemons}/>
    </Container>
  );
};

export default PokemonsListContainer;
