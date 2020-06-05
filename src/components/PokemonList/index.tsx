import React from "react";
import { PokemonListState } from "../../types";
import PokemonCard from "../PokemonCard";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Spinner from "../Spinner";

interface Props {
  pokemonList?: PokemonListState;
}

const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 1472px) {
    max-width: 1344px;
    width: 1344px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1152px;
    width: 1152px;
  }

  @media screen and (min-width: 1088px) {
    max-width: 960px;
    width: 960px;
  }
`;

const PaddedCol = styled(Col)`
  padding: 0.75rem;
`;

const PokemonList: React.FC<Props> = ({ pokemonList }) => {
  if (!pokemonList) return null;
  if (pokemonList.pokemons.length === 0 && pokemonList.loading)
    return (
      <Container>
        <Spinner />
      </Container>
    );
  if (pokemonList.error) return null;

  return (
    <Container>
      <Row center="xs">
        {pokemonList.pokemons.map((pokemon) => (
          <PaddedCol xs={12} sm={12} md={12} lg={4}>
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          </PaddedCol>
        ))}
        {<Spinner />}
      </Row>
    </Container>
  );
};

export default PokemonList;
