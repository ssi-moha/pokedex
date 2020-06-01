import React from "react";
import styled from "styled-components";
import { Pokemon } from "../../types";

interface Props {
  pokemon: Pokemon;
}

const PokemonImg = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
  width: 350px;
  align-self: center;
  img {
    max-width: 300px;
    max-height: 350px;
  }
`;

const InformationsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TypesBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    max-height: 28px;
    max-width: 64px;
  }
`;

const PokemonCardBlock = styled.div`
  width: 350px;
  display: flex;
  position: relative;
  height: 600px;
  padding: 1.25rem;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  text-align: center;
  justify-content: space-between;
  p {
    display: inline-block;
    vertical-align: top;
  }
`;

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <PokemonCardBlock>
      <div>
        <p style={{ float: "left" }}>#{pokemon.id}</p>
        <p style={{ float: "right" }}>{pokemon.name}</p>
      </div>
      <PokemonImg>
        <img src={`/images/pokemons/${pokemon.id}.svg`} alt={pokemon.name} />
      </PokemonImg>

      <InformationsBlock>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </InformationsBlock>
      <TypesBlock>
        {pokemon.types.map((type) => (
          <img
            src={`/images/types/${type.type.name}.svg`}
            alt={type.type.name}
          />
        ))}
      </TypesBlock>
    </PokemonCardBlock>
  );
};

export default PokemonCard;
