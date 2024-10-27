import React from "react";
import styled from "styled-components";
import {PokemonStats, Pokemon, PokemonKeys, NumericStatKeys} from "@/interfaces/pokemon";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar as RechartsRadar,
  RadarChart,
  ResponsiveContainer
} from 'recharts';
import {getRandomColor} from "@/utils/getRandomColor";
import RadarLoading from "@/components/Loading/PokemonDetails/RadarLoading";
import {getStats} from "@/utils/getStats";


const ChartContainer = styled.div`
    flex: 1;
    height: 400px;
`;

const PokemonRadar = ({pokemon, maxPokemonsStat}: { pokemon: Pokemon, maxPokemonsStat: PokemonStats | null }) => {
  if(!maxPokemonsStat){
    return <RadarLoading/>
  }
  const stats = getStats(pokemon, [PokemonKeys.id, PokemonKeys.type]);
  const normalizedData = stats.map(stat => ({
    stat: stat.label,
    value: (stat.value as number / maxPokemonsStat[stat.key as NumericStatKeys]) * 100,
  }));

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={normalizedData}>
          <PolarGrid/>
          <PolarAngleAxis dataKey="stat"/>
          <PolarRadiusAxis />
          <RechartsRadar name={pokemon.name} dataKey="value" stroke="#8884d8" fill={getRandomColor()} fillOpacity={0.4}/>
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default PokemonRadar