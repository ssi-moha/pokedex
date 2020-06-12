import React from "react";
import { Pokemon, Specie } from "../types";
import { Row, Col } from "react-flexbox-grid";
import PokemonInformations from "./PokemonInformations";
import PokemonStats from "./PokemonStats";
import PokemonDescription from "./PokemonDescription";

interface Props {
  pokemon: Pokemon;
  specie: Specie;
}

const PokemonDetails: React.FC<Props> = ({ pokemon, specie }) => {
  return (
    <Row center="xs">
      <Col xs={12} sm={12} md={12} lg={4}>
        <PokemonDescription
          pokemon={pokemon}
          description={specie.flavor_text_entries[0].flavor_text}
        />
      </Col>
      <Col xs={12} sm={12} md={12} lg={8}>
        <PokemonInformations pokemon={pokemon} />
        <PokemonStats pokemon={pokemon} />
      </Col>
    </Row>
  );
};

export default PokemonDetails;
