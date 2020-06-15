import {
  POKEMON_OBJECT_REQUEST,
  POKEMON_OBJECT_SUCCESS,
  POKEMON_OBJECT_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  pokemon: {},
  error: null,
  loading: false,
};

export default function (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case POKEMON_OBJECT_REQUEST:
      return {
        ...state,
        pokemon: { ...state.pokemon },
        error: null,
        loading: true,
      };
    case POKEMON_OBJECT_SUCCESS:
      return {
        ...state,
        pokemon: { ...action.payload },
        error: null,
        loading: false,
      };
    case POKEMON_OBJECT_FAILURE:
      return {
        ...state,
        pokemon: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
