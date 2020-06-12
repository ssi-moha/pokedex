import React from "react";
import styled from "styled-components";
import { Pokemon } from "../types";

interface Props {
  types: Pokemon["types"];
}

const TypesBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    max-height: 28px;
    max-width: 64px;
  }
`;

const PokemonTypes: React.FC<Props> = ({ types }) => {
  return (
    <TypesBlock>
      {types.map((type) => (
        <img src={`/images/types/${type.type.name}.svg`} alt={type.type.name} />
      ))}
    </TypesBlock>
  );
};

export default PokemonTypes;
