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
  pokemonObject: RootState["pokemonObject"];
  specieObject: RootState["specieObject"];
}

type TotalProps = DispatchProps & StateProps;

const PokemonDetailsContainer: React.FC<TotalProps> = ({
  fetchPokemonObject,
  fetchPokemonSpecies,
  pokemonObject,
  specieObject,
}) => {
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    fetchPokemonObject(name);
    fetchPokemonSpecies(name);
  }, [name, fetchPokemonObject, fetchPokemonSpecies]);

  if (
    !pokemonObject ||
    !specieObject ||
    isEmpty(pokemonObject.pokemon) ||
    isEmpty(specieObject.specie)
  ) {
    return null;
  }

  return (
    <PokemonDetails
      pokemon={pokemonObject.pokemon as Pokemon}
      specie={specieObject.specie as Specie}
      loading={specieObject.loading || pokemonObject.loading}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  specieObject: state.specieObject,
  pokemonObject: state.pokemonObject,
});

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  fetchPokemonObject,
  fetchPokemonSpecies,
})(PokemonDetailsContainer);
