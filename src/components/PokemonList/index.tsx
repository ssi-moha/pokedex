import React from "react";
import { PokemonListState } from "../../types";
import PokemonCard from "../PokemonCard";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Spinner from "../Spinner";

interface Props {
  pokemonList?: PokemonListState;
}

const PaddedCol = styled(Col)`
  padding: 0.75rem;
`;

const PokemonList: React.FC<Props> = ({ pokemonList }) => {
  if (!pokemonList) return null;
  if (pokemonList.pokemons.length === 0 && pokemonList.loading)
    return (
      <Row center="xs">
        <Spinner />
      </Row>
    );
  if (pokemonList.error) return null;

  return (
    <Row center="xs">
      {pokemonList.pokemons.map((pokemon) => (
        <PaddedCol xs={12} sm={4} md={4} lg={4}>
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        </PaddedCol>
      ))}
      {<Spinner />}
    </Row>
  );
};

export default PokemonList;
