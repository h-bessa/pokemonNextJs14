import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {  Card, Tag } from "antd";
import { Pokemon } from "@/interfaces/pokemon";
import {colors} from "@/constants";
import {sanitizeName} from "@/utils/sanitizeName";
import {getStats} from "@/utils/getStats";

const DetailsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #333;
    text-align: center;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const TagContainer = styled(Tag)`
  white-space: nowrap;
`;

const PokemonDetails = ({ pokemon }: { pokemon: Pokemon}) => {
  const stats = getStats(pokemon);

  return (
    <DetailsContainer>
      <Title data-testid="pokemon-name">{pokemon.name}</Title>
        <Image
          data-testid="image"
          src={`/images/pokemons/${sanitizeName(pokemon.name)}.jpg`}
          alt={pokemon.name.toLowerCase()}
          width={128}
          height={128}
        />
      <Card style={{marginTop:"50px"}}>
        <TagsContainer>
          {stats.map((stat, index) => (
            <TagContainer data-testid={`stat-${index}`} color={colors[index % colors.length]} key={index}>
              {stat.label}: {stat.value}
            </TagContainer>
          ))}
        </TagsContainer>
      </Card>

    </DetailsContainer>
  );
};

export default PokemonDetails;
