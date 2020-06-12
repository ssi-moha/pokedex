import React from "react";
import { Pokemon } from "../types";
import styled from "styled-components";

interface Props {
  pokemon: Pokemon;
}

const ID = styled.p`
  float: left;
`;

const Name = styled.p`
  float: right;
  text-transform: capitalize;
`;

const PokemonID: React.FC<Props> = ({ pokemon }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <ID>#{pokemon.id}</ID>
      <Name className="title">{pokemon.name}</Name>
    </div>
  );
};

export default PokemonID;
