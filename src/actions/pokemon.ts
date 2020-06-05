import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAILURE,
  POKEMON_OBJECT_REQUEST,
  POKEMON_OBJECT_SUCCESS,
  POKEMON_OBJECT_FAILURE,
} from ".";
import { PokeAPI } from "../config";
import { Dispatch } from "redux";

export function pokemonListRequest() {
  return {
    type: POKEMON_LIST_REQUEST,
  };
}

export function pokemonListSuccess(data: any) {
  return {
    type: POKEMON_LIST_SUCCESS,
    payload: data,
  };
}

export function pokemonListFailure(error: any) {
  return {
    type: POKEMON_LIST_FAILURE,
    payload: error,
  };
}

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

export function fetchPokemonList(limit: number, offset: number) {
  return async function (dispatch: Dispatch) {
    dispatch(pokemonListRequest());
    const interval = {
      limit: limit,
      offset: offset,
    };

    try {
      const response = await PokeAPI.getPokemonsList(interval);
      response.results.map(async (pokemon: any) => {
        return await PokeAPI.getPokemonByName(pokemon.name)
          .then((response: any) => {
            dispatch(pokemonListSuccess(response));
          })
          .catch((error: any) => dispatch(pokemonListFailure(error)));
      });
    } catch (error) {
      dispatch(pokemonListFailure(error));
    }
  };
}
