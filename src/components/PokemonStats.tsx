import React from "react";
import { Pokemon } from "../types";
import Card from "./Card";
import { Range } from "./Range";

interface Props {
  pokemon: Pokemon;
}

const PokemonStats: React.FC<Props> = ({ pokemon }) => {
  return (
    <Card title="Stats">
      {pokemon.stats.map((stat) => (
        <>
          <p className="gray">{stat.stat.name.toUpperCase()}</p>
          <Range value={stat.base_stat} />
        </>
      ))}
    </Card>
  );
};

export default PokemonStats;
