import React from "react";
import { Pokemon } from "../types";
import { Col, Row } from "react-flexbox-grid";
import Card from "./Card";
import styled from "styled-components";

interface Props {
  pokemon: Pokemon;
}

const AbilityText = styled.p`
  text-transform: capitalize;
`

const PokemonInformations: React.FC<Props> = ({ pokemon }) => {
  return (
    <Card title="Informations">
      <Row>
        <Col xs>
          <p className="gray">Height</p>
          <p>{(pokemon.height * 0.1).toFixed(1)} m</p>
          <p className="gray">Weight</p>
          <p>{(pokemon.weight * 0.1).toFixed(1)} kg</p>
        </Col>
        <Col xs>
          <p className="gray">Abilities</p>
          {pokemon.abilities.map((ability, index) => (
            <AbilityText key={`ability-${index}`}>{ability.ability.name}</AbilityText>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default PokemonInformations;
