import React from "react";
import { Pokemon } from "../types";
import { Row, Col } from "react-flexbox-grid";
import PokemonCard from "./PokemonCard";
import PokemonInformations from "./PokemonInformations";
import PokemonStats from "./PokemonStats";

interface Props {
    pokemon: Pokemon;
}

const PokemonDetails: React.FC<Props> = ({ pokemon }) => {
    return <Row center="xs">
        <Col xs={12} sm={12} md={12} lg>
          <PokemonCard pokemon={pokemon} />  
        </Col>
        <Col xs={12} sm={12} md={12} lg>
          <PokemonInformations pokemon={pokemon} />  
          <PokemonStats pokemon={pokemon} />  
        </Col>
    </Row>;
}

export default PokemonDetails;