import { PokemonStats, Pokemon } from "@/interfaces/pokemon";

const getMaxPokemonsStats = (pokemons: Pokemon[]): PokemonStats => {
  const initialPokemonStats: PokemonStats = {
    hp: 0,
    attack: 0,
    defense: 0,
    special_attack: 0,
    special_defense: 0,
    speed: 0,
  };

  pokemons.forEach(pokemon => {
    if (pokemon.hp > initialPokemonStats.hp) {
      initialPokemonStats.hp = pokemon.hp;
    }
    if (pokemon.attack > initialPokemonStats.attack) {
      initialPokemonStats.attack = pokemon.attack;
    }
    if (pokemon.defense > initialPokemonStats.defense) {
      initialPokemonStats.defense = pokemon.defense;
    }
    if (pokemon.special_attack > initialPokemonStats.special_attack) {
      initialPokemonStats.special_attack = pokemon.special_attack;
    }
    if (pokemon.special_defense > initialPokemonStats.special_defense) {
      initialPokemonStats.special_defense = pokemon.special_defense;
    }
    if (pokemon.speed > initialPokemonStats.speed) {
      initialPokemonStats.speed = pokemon.speed;
    }
  });

  return initialPokemonStats;
};

export default getMaxPokemonsStats;
