import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { RootState, Pokemon } from "../types";
import { fetchPokemonObject } from "../actions/pokemon";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import isEmpty from "../utils/isEmpty";

interface DispatchProps {
  fetchPokemonObject: (name: string) => void;
}

interface StateProps {
  pokemon: RootState["pokemon"];
}

type TotalProps = DispatchProps & StateProps;

const PokemonDetailsContainer: React.FC<TotalProps> = ({
  fetchPokemonObject,
  pokemon,
}) => {
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    fetchPokemonObject(name);
  }, [name]);

  if (!pokemon || isEmpty(pokemon.pokemonObject.pokemon)) {
    return null;
  }

  console.log(pokemon?.pokemonObject);
  return (
    <>
      <PokemonCard pokemon={pokemon.pokemonObject.pokemon as Pokemon} />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ pokemon: state.pokemon });

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonObject,
})(PokemonDetailsContainer);
