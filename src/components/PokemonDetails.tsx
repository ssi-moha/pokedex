import React from "react";
import { Pokemon, Specie } from "../types";
import { Row, Col } from "react-flexbox-grid";
import PokemonInformations from "./PokemonInformations";
import PokemonStats from "./PokemonStats";
import PokemonDescription from "./PokemonDescription";
import Card from "./Card";
import EvolutionChainContainer from "../containers/EvolutionChainContainer";
import Spinner from "./Spinner";

interface Props {
  pokemon: Pokemon;
  specie: Specie;
  loading: boolean;
}

const PokemonDetails: React.FC<Props> = ({ pokemon, specie, loading }) => {
  if (loading) {
    return (
      <Row center="xs">
        <Spinner />
      </Row>
    );
  }

  return (
    <>
      <Row center="xs">
        <Col xs={12} sm={12} md={12} lg={4}>
          <PokemonDescription
            pokemon={pokemon}
            description={specie.flavor_text_entries[0].flavor_text}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={8}>
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <PokemonInformations pokemon={pokemon} />
            <PokemonStats pokemon={pokemon} />
          </div>
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12}>
          <Card title="Evolutions" containerClassName="card-margin-top">
            <EvolutionChainContainer
              evolutionChainUrl={specie.evolution_chain.url}
              loading={loading}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PokemonDetails;
