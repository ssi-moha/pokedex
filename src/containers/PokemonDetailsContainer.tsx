import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { RootState, Pokemon, Specie } from "../types";
import { fetchPokemonObject } from "../actions/pokemonObject";
import isEmpty from "../utils/isEmpty";
import PokemonDetails from "../components/PokemonDetails";
import { fetchPokemonSpecies } from "../actions/specie";

interface DispatchProps {
  fetchPokemonObject: (name: string) => void;
  fetchPokemonSpecies: (name: string) => void;
}

interface StateProps {
  pokemon: RootState["pokemon"];
}

type TotalProps = DispatchProps & StateProps;

const PokemonDetailsContainer: React.FC<TotalProps> = ({
  fetchPokemonObject,
  fetchPokemonSpecies,
  pokemon,
}) => {
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    fetchPokemonObject(name);
    fetchPokemonSpecies(name);
  }, [name, fetchPokemonObject, fetchPokemonSpecies]);

  if (!pokemon || isEmpty(pokemon.pokemonObject.pokemon)) {
    return null;
  }

  return (
    <PokemonDetails
      pokemon={pokemon.pokemonObject.pokemon as Pokemon}
      specie={pokemon.specieObject.specie as Specie}
    />
  );
};

const mapStateToProps = (state: RootState) => ({ pokemon: state.pokemon });

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonObject,
  fetchPokemonSpecies
})(PokemonDetailsContainer);
