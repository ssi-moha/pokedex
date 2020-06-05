import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../actions/pokemon";
import { connect } from "react-redux";
import { RootState } from "../types";
import PokemonList from "../components/PokemonList";
import useScrollEventListener from "../hooks/useScrollEventListener";

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
  const [offset, setOffset] = useState(0);
  useScrollEventListener(useOffsetToNextPage);

  function useOffsetToNextPage() {
    setOffset((prevOffset) => prevOffset + 21);
  }

  useEffect(() => {
    fetchPokemonList(21, offset);
  }, [fetchPokemonList, offset]);

  return <PokemonList pokemonList={pokemon?.pokemonList} />;
};

const mapStateToProps = (state: RootState) => ({ pokemon: state.pokemon });

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonList,
})(PokemonListContainer);
