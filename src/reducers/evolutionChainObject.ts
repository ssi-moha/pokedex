import {
  EVOLUTION_CHAIN_REQUEST,
  EVOLUTION_CHAIN_SUCCESS,
  EVOLUTION_CHAIN_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  evolutionChain: [],
  error: null,
  loading: false,
};

export default function (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case EVOLUTION_CHAIN_REQUEST:
      return {
        ...state,
        evolutionChain: { ...state.evolutionChain },
        error: null,
        loading: true,
      };
    case EVOLUTION_CHAIN_SUCCESS:
      return {
        ...state,
        evolutionChain: { ...action.payload },
        error: null,
        loading: false,
      };
    case EVOLUTION_CHAIN_FAILURE:
      return {
        ...state,
        evolutionChain: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
