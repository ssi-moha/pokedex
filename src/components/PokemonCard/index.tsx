import React from "react";
import styled from "styled-components";
import { Pokemon } from "../../types";
import { Link } from "react-router-dom";
import PokemonID from "../PokemonID";
import PokemonTypes from "../PokemonTypes";

interface Props {
  pokemon: Pokemon;
}

export const PokemonImg = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
  align-self: center;
  img {
    transition: width 0.25s;
    width: 150px;
  }
`;

const InformationsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PokemonCardBlock = styled(Link)`
  color: unset;
  text-decoration: unset;
  display: flex;
  position: relative;
  height: 500px;
  padding: 1.25rem;
  flex-direction: column;
  transition: box-shadow 0.3s;
  height: 100%;
    box-sizing: border-box;

  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    background: rgb(248, 248, 255, 0.5);
    ${PokemonImg} img {
      width: 175px;
      overflow: visible;
    }
  }
  text-align: center;
  justify-content: space-between;
  p {
    display: inline-block;
    vertical-align: top;
  }
`;

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <PokemonCardBlock to={`/pokemon/${pokemon.name}`}>
      <PokemonID pokemon={pokemon} />
      
      <PokemonImg>
        <img src={`${process.env.PUBLIC_URL}/images/pokemons/${pokemon.id}.svg`} alt={pokemon.name} />
      </PokemonImg>
      
      <InformationsBlock>
        <p>Height: {(pokemon.height * 0.1).toFixed(1)} m</p>
        <p>Weight: {(pokemon.weight * 0.1).toFixed(1)} kg</p>
      </InformationsBlock>
      
      <PokemonTypes types={pokemon.types} />
    </PokemonCardBlock>
  );
};

export default React.memo(PokemonCard);
