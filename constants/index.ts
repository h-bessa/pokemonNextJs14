export const DEPLOYED_URL = "https://pokemon-nextjs-14.netlify.app"
const BASE_API_URL = process.env.NODE_ENV === 'production'
  ? `${DEPLOYED_URL}/api`
  : 'http://localhost:3000/api';

export const API_URL_POKEMONS = `${BASE_API_URL}/pokemons`;
export const API_URL_POKEMON = `${BASE_API_URL}/pokemon`;

export const PREVIOUS = "Previous"
export const NEXT = "Next"
export const BACK = "Back to homepage"
export const SEARCH = "Search"
export const POWER_TRESHOLD = "Power threshold"
export const MIN = "MIN"
export const MAX = "MAX"
export const COUNT = "Count"

export const colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple"
];

export const AUTHOR = "Hydris BESSA"

export const COMPANY = "GoldAvenue"