export enum PokemonKeys {
  hp = 'hp',
  attack = 'attack',
  defense = 'defense',
  special_attack = 'special_attack',
  special_defense = 'special_defense',
  speed = 'speed',
  id = 'id',
  type = 'type'
}

export type NumericStatKeys = Exclude<PokemonKeys, PokemonKeys.id | PokemonKeys.type>;

export type PokemonStats = Record<NumericStatKeys, number>;

interface IBasicPokemonProperties {
  id: number;
  name: string;
  type: string[];
}

export type Pokemon = IBasicPokemonProperties & PokemonStats

