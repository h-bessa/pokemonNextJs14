import type { NextApiRequest, NextApiResponse } from "next";

import Pokemons from "./data/pokemon.json";
import {Pokemon} from "@/interfaces/pokemon";
import cors, {runMiddleware} from "@/lib/cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  await runMiddleware(req, res, cors);
  res.status(200).json(Pokemons);
}
