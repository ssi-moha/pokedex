import React from "react";
import PokemonStats from "../components/PokemonStats";
import pokemon from "./pokemon";

export default {
  title: "PokemonStats",
};


export const Simple = () => (
    <div>
      <PokemonStats pokemon={pokemon}  />
    </div>
);