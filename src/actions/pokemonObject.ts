import {
  POKEMON_OBJECT_REQUEST,
  POKEMON_OBJECT_SUCCESS,
  POKEMON_OBJECT_FAILURE,
} from ".";
import { PokeAPI } from "../config";
import { Dispatch } from "redux";

export function pokemonObjectRequest() {
  return {
    type: POKEMON_OBJECT_REQUEST,
  };
}

export function pokemonObjectSuccess(data: any) {
  return {
    type: POKEMON_OBJECT_SUCCESS,
    payload: data,
  };
}

export function pokemonObjectFailure(error: any) {
  return {
    type: POKEMON_OBJECT_FAILURE,
    payload: error,
  };
}

export function fetchPokemonObject(name: string) {
  return async function (dispatch: Dispatch) {
    dispatch(pokemonObjectRequest());
    
    try {
      const response = await PokeAPI.getPokemonByName(name);
      dispatch(pokemonObjectSuccess(response));
      return response;
    } catch (error) {
      dispatch(pokemonObjectFailure(error));
    }
  };
}
