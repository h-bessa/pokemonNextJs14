import type { NextApiRequest, NextApiResponse } from "next";
import Pokemons from "../data/pokemon.json";
import { Pokemon } from "@/interfaces/pokemon";
import cors, {runMiddleware} from "@/lib/cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon | { error: string }>
) {
  await runMiddleware(req, res, cors);

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  const parsedId = parseInt(id as string);
  if (isNaN(parsedId)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const pokemon = Pokemons.find((p) => p.id === parsedId);

  if (!pokemon) {
    return res.status(404).json({ error: "Pokemon not found" });
  }

  res.status(200).json(pokemon);
}
