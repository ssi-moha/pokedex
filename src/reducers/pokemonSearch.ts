import {
  UPDATE_SEARCH,
  POKEMON_SPECIES_REQUEST,
  POKEMON_SPECIES_SUCCESS,
  POKEMON_SPECIES_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  value: "",
  loading: false,
  error: null,
  result: {},
};

export default function (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    case POKEMON_SPECIES_REQUEST:
      return { ...state, loading: true, error: null };
    case POKEMON_SPECIES_SUCCESS:
      return {
        ...state,
        result: { ...action.payload },
        loading: false,
        error: null,
      };
    case POKEMON_SPECIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
