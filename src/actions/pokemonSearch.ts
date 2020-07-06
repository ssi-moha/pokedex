import {
  ThunkRequestAction,
  ThunkFailureAction,
  ThunkSuccessAction,
} from "./types";
import {
  POKEMON_SEARCH_REQUEST,
  POKEMON_SEARCH_FAILURE,
  POKEMON_SEARCH_SUCCESS,
} from ".";
import { Dispatch } from "redux";
import { PokeAPI } from "../config";

export function pokemonSearchRequest(): ThunkRequestAction<
  typeof POKEMON_SEARCH_REQUEST
> {
  return {
    type: POKEMON_SEARCH_REQUEST,
  };
}

export function pokemonSearchFailure(
  error: Error
): ThunkFailureAction<typeof POKEMON_SEARCH_FAILURE> {
  return {
    type: POKEMON_SEARCH_FAILURE,
    payload: error,
  };
}

export function pokemonSearchSuccess(
  data: any
): ThunkSuccessAction<typeof POKEMON_SEARCH_SUCCESS, any> {
  return {
    type: POKEMON_SEARCH_SUCCESS,
    payload: data,
  };
}

export function fetchPokemonSearch(value: string) {
  return async function (dispatch: Dispatch) {
    dispatch(pokemonSearchRequest());
    try {
      const response = !isNaN(Number(value))
        ? await PokeAPI.getPokemonByName(value)
        : await PokeAPI.getPokemonById(value);
      dispatch(pokemonSearchSuccess(response));
    } catch (error) {
      dispatch(pokemonSearchFailure(error));
    }
  };
}
