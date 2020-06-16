import React from "react";
import styled from "styled-components";
import { Pokemon } from "../types";

interface Props {
  types: Pokemon["types"];
}

const TypesBlock = styled.div`
  img {
    max-height: 28px;
    max-width: 64px;
    margin: 0 0.25rem;
  }
`;

const PokemonTypes: React.FC<Props> = ({ types }) => {
  return (
    <TypesBlock>
      {types.map((type) => (
        <img
          src={`${process.env.PUBLIC_URL}/images/types/${type.type.name}.svg`}
          alt={type.type.name}
          key={`key-${type.type.name}`}
        />
      ))}
    </TypesBlock>
  );
};

export default PokemonTypes;
