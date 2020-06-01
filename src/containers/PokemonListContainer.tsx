import React, { useEffect } from "react";
import { fetchPokemonList } from "../actions/pokemon";
import { connect } from "react-redux";
import { RootState } from "../types";
import PokemonList from "../components/PokemonList";

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
    fetchPokemonList(20, 0);
  }, [fetchPokemonList]);

  return <PokemonList pokemonList={pokemon?.pokemonList} />;
};

const mapStateToProps = (state: RootState) => ({ pokemon: state.pokemon });

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonList,
})(PokemonListContainer);
