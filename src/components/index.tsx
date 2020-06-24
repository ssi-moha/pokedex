import React from "react";
import { PokemonListState } from "../types";
import PokemonCard from "./PokemonCard";
import { Row } from "react-flexbox-grid";
import Spinner from "./Spinner";

interface Props {
  pokemonList?: PokemonListState;
}

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
      {pokemonList.pokemons
        .sort((a, b) => a.id - b.id)
        .map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      {pokemonList.loading && (
        <Row>
          <Spinner />
        </Row>
      )}
    </Row>
  );
};

export default PokemonList;
