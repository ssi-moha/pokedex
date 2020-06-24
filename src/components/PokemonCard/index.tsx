import React from "react";

import { Pokemon } from "../../types";
import PokemonID from "../PokemonID";
import PokemonTypes from "../PokemonTypes";
import {
  PaddedCol,
  PokemonCardBlock,
  PokemonImg,
  InformationsBlock,
} from "./style";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <PaddedCol xs={12} sm={4} md={4} lg={4}>
      <PokemonCardBlock to={`/pokemon/${pokemon.name}`}>
        <PokemonID pokemon={pokemon} />

        <PokemonImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/pokemons/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
        </PokemonImg>

        <InformationsBlock>
          <p>Height: {(pokemon.height * 0.1).toFixed(1)} m</p>
          <p>Weight: {(pokemon.weight * 0.1).toFixed(1)} kg</p>
        </InformationsBlock>

        <PokemonTypes types={pokemon.types} />
      </PokemonCardBlock>
    </PaddedCol>
  );
};

export default React.memo(PokemonCard);
