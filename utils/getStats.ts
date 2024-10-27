import { Pokemon, PokemonKeys } from "@/interfaces/pokemon";

interface IStatObject {
  label: string;
  value: string | number;
  key: PokemonKeys
}

const labelMapping: Record<PokemonKeys, string> = {
  [PokemonKeys.id]: 'ID',
  [PokemonKeys.type]: 'Type',
  [PokemonKeys.hp]: 'HP',
  [PokemonKeys.attack]: 'Attack',
  [PokemonKeys.defense]: 'Defense',
  [PokemonKeys.special_attack]: 'Spe. Att.',
  [PokemonKeys.special_defense]: 'Spe. Def.',
  [PokemonKeys.speed]: 'Speed',
};

export const getStats = (pokemon: Pokemon, excludeKeys: PokemonKeys[] = []): IStatObject[] => {
  const stats: IStatObject[] = [
    { key: PokemonKeys.id, label: labelMapping[PokemonKeys.id], value: pokemon.id },
    { key: PokemonKeys.type, label: labelMapping[PokemonKeys.type], value: pokemon.type.join(', ') },
    { key: PokemonKeys.hp, label: labelMapping[PokemonKeys.hp], value: pokemon.hp },
    { key: PokemonKeys.attack, label: labelMapping[PokemonKeys.attack], value: pokemon.attack },
    { key: PokemonKeys.defense, label: labelMapping[PokemonKeys.defense], value: pokemon.defense },
    { key: PokemonKeys.special_attack, label: labelMapping[PokemonKeys.special_attack], value: pokemon.special_attack },
    { key: PokemonKeys.special_defense, label: labelMapping[PokemonKeys.special_defense], value: pokemon.special_defense },
    { key: PokemonKeys.speed, label: labelMapping[PokemonKeys.speed], value: pokemon.speed },
  ];

  const excludeLabels = excludeKeys.map(key => labelMapping[key]);

  return stats.filter((el) => !excludeLabels.includes(el.label));
};
