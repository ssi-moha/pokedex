import React from "react";
import { PokemonListState } from "../../types";
import PokemonCard from "../PokemonCard";
import { Row, Col } from "react-flexbox-grid";

interface Props {
  pokemonList?: PokemonListState;
}

const PokemonList: React.FC<Props> = ({ pokemonList }) => {
  if (!pokemonList || pokemonList.error) return null;

  if (pokemonList.loading) return null;

  return (
    <Row>
      {pokemonList.pokemons.map((pokemon) => (
        <Col xs={3} xsOffset={1}>
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
