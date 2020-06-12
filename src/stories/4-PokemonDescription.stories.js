import React from "react";
import PokemonDescription from "../components/PokemonDescription";
import pokemon from "./pokemon.json";
export default {
  title: "PokemonDescription",
};

export const Simple = () => (
  <div style={{ width: "300px" }}>
    <PokemonDescription
      pokemon={pokemon}
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    />
  </div>
);
