import {Pokemon} from "@/interfaces/pokemon";

export const calculatePower = (pokemon: Pokemon): number =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;