import React from "react";
import Card from "./Card";
import { Pokemon } from "../types";
import PokemonID from "./PokemonID";
import styled from "styled-components";
import PokemonTypes from "./PokemonTypes";

interface Props {
  description: string;
  pokemon: Pokemon;
}

const SpaceBlocks = styled.div`
  div {
    margin: 14px auto !important;
  }
`;

const PokemonDescription: React.FC<Props> = ({ description, pokemon }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Card containerClassName="flex">
          <SpaceBlocks>
            <PokemonID pokemon={pokemon} />
            <div style={{ margin: "auto", width: "fit-content" }}>
              <img src={`/images/pokemons/${pokemon.id}.svg`} alt="test" />
            </div>
          </SpaceBlocks>

          <p>{description}</p>
        </Card>
      <Card>
        <PokemonTypes types={pokemon.types} />
      </Card>
    </div>
  );
};

export default PokemonDescription;
