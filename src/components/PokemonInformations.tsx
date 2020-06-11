import React from "react";
import { Pokemon } from "../types";
import { Col, Row } from "react-flexbox-grid";
import Card from "./Card";

interface Props {
  pokemon: Pokemon;
}

const PokemonInformations: React.FC<Props> = ({ pokemon }) => {
  return (
    <Card title="Informations">
      <Row>
        <Col xs>
          <p className="gray">Height</p>
          <p>{pokemon.height}</p>
          <p className="gray">Weight</p>
          <p>{pokemon.weight}</p>
        </Col>
        <Col xs>
          <p className="gray">Abilities</p>
          {pokemon.abilities.map((ability, index) => (
            <p key={index}>{ability.ability.name}</p>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default PokemonInformations;
