import React, { useEffect } from "react";
import { fetchPokemonList } from "../actions/pokemon";
import { connect } from "react-redux";
import { RootState } from "../types";

interface DispatchProps {
  fetchPokemonList: (limit: number, offset: number) => void;
}

interface StateProps {
  pokemon: RootState["pokemon"];
}

type TotalProps = DispatchProps & StateProps;

const PokemonListContainer: React.FC<TotalProps> = ({
  fetchPokemonList,
  pokemon,
}) => {
  useEffect(() => {
    fetchPokemonList(0, 20);
  }, [fetchPokemonList]);
  console.log(pokemon?.pokemonList);
  return <p>P</p>;
};

const mapStateToProps = (state: RootState) => ({ pokemon: state.pokemon });

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonList,
})(PokemonListContainer);
