import { POKEMON_SPECIES_REQUEST, POKEMON_SPECIES_SUCCESS, POKEMON_SPECIES_FAILURE } from ".";
import { Dispatch } from "redux";
import { PokeAPI } from "../config";

export function pokemonSpeciesRequest() {
    return {
      type: POKEMON_SPECIES_REQUEST,
    };
  }
  
  export function pokemonSpeciesSuccess(data: any) {
    return {
      type: POKEMON_SPECIES_SUCCESS,
      payload: data,
    };
  }
  
  export function pokemonSpeciesFailure(error: any) {
    return {
      type: POKEMON_SPECIES_FAILURE,
      payload: error,
    };
  }

  export function fetchPokemonSpecies(name: string) {
    return async function (dispatch: Dispatch) {
      dispatch(pokemonSpeciesRequest());
      return await PokeAPI.getPokemonSpeciesByName(name)
        .then((response: any) => dispatch(pokemonSpeciesSuccess(response)))
        .catch((error: any) => dispatch(pokemonSpeciesFailure(error)));
    };
  }