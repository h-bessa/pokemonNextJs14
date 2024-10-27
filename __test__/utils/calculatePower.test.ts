import { calculatePower } from '@/utils/calculatePower';
import {mockPokemons} from "@/__test__/mock/mockPokemons";

describe('calculatePower', () => {
  test('should calculate power correctly', () => {
    expect(calculatePower(mockPokemons[0])).toBe(318);
  });
});