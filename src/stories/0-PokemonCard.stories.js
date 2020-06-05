import React from "react";
import PokemonCard from "../components/PokemonCard";
import pokemon from "./pokemon.json";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "PokemonCard",
  component: PokemonCard,
};

export const Simple = () => (
  <Router>
    <div style={{ width: "300px" }}>
      <PokemonCard pokemon={pokemon} />
    </div>
  </Router>
);
