import {
  EVOLUTION_CHAIN_REQUEST,
  EVOLUTION_CHAIN_SUCCESS,
  EVOLUTION_CHAIN_FAILURE,
} from ".";
import { Dispatch } from "redux";
import { PokeAPI } from "../config";

export function evolutionChainRequest() {
  return {
    type: EVOLUTION_CHAIN_REQUEST,
  };
}

export function evolutionChainSuccess(data: any) {
  return {
    type: EVOLUTION_CHAIN_SUCCESS,
    payload: data,
  };
}

export function evolutionChainFailure(error: any) {
  return {
    type: EVOLUTION_CHAIN_FAILURE,
    payload: error,
  };
}

export function fetchEvolutionChain(id: number) {
  return async function (dispatch: Dispatch) {
    dispatch(evolutionChainRequest());
    try {
      const response = await PokeAPI.getEvolutionChainById(id);
      dispatch(evolutionChainSuccess(response));
    } catch (error) {
      dispatch(evolutionChainFailure(error));
    }
  };
}
