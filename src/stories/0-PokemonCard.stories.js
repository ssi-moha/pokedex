import React from "react";
import PokemonCard from "../components/PokemonCard";
import pokemon from "./pokemon.json";
export default {
  title: "PokemonCard",
  component: PokemonCard,
};

export const Simple = () => <PokemonCard pokemon={pokemon} />;
