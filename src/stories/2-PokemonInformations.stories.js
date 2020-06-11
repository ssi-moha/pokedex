import React from "react";
import PokemonInformations from "../components/PokemonInformations";
import pokemon from "./pokemon";

export default {
  title: "PokemonInformations",
};


export const Simple = () => (
    <div>
      <PokemonInformations pokemon={pokemon}  />
    </div>
);