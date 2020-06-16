import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../actions/pokemonList";
import { connect } from "react-redux";
import { RootState } from "../types";
import PokemonList from "../components/PokemonList";
import useScrollEventListener from "../hooks/useScrollEventListener";

interface DispatchProps {
  fetchPokemonList: (limit: number, offset: number) => void;
}

interface StateProps {
  pokemonList: RootState["pokemonList"];
}

type TotalProps = DispatchProps & StateProps;

const PokemonListContainer: React.FC<TotalProps> = ({
  fetchPokemonList,
  pokemonList,
}) => {
  const [offset, setOffset] = useState<number>(pokemonList ? pokemonList.pokemons.length : 0);
  useScrollEventListener(useOffsetToNextPage);

  function useOffsetToNextPage() {
    setOffset((prevOffset) => prevOffset + 21);
  }

  useEffect(() => {
    fetchPokemonList(21, offset > 649 ? 649 : offset);
  }, [fetchPokemonList, offset]);

  return <PokemonList pokemonList={pokemonList} />;
};

const mapStateToProps = (state: RootState) => ({ pokemonList: state.pokemonList });

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonList,
})(PokemonListContainer);
