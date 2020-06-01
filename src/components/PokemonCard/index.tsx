import React from "react";
import styled from "styled-components";
import { Pokemon } from "../../types";

interface Props {
  pokemon: Pokemon;
}

const PokemonCardBlock = styled.div`
  width: 300px;
  position: relative;
  height: 450px;
  padding: 1.25rem;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  text-align: center;
  p {
    display: inline-block;
    vertical-align: top;
  }
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  div {
    height: 50px;
  }
`;

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  console.log(pokemon.id);
  return (
    <PokemonCardBlock>
      <div>
        <p style={{ float: "left" }}>#{pokemon.id}</p>

        <p style={{ float: "right" }}>{pokemon.name}</p>
      </div>
      <img src={`/images/pokemons/${pokemon.id}.svg`} alt={pokemon.name} />
    </PokemonCardBlock>
  );
};

export default PokemonCard;
