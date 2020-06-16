import {
  POKEMON_SPECIES_REQUEST,
  POKEMON_SPECIES_SUCCESS,
  POKEMON_SPECIES_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  specie: {
    flavor_text_entries: [{}],
    genera: [{}],
    evolution_chain: { name: null, url: null },
  },
  error: null,
  loading: false,
};

export default function (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case POKEMON_SPECIES_REQUEST:
      return {
        ...state,
        specie: {
          flavor_text_entries: [{}],
          genera: [{}],
          evolution_chain: { name: null, url: null },
        },
        error: null,
        loading: true,
      };
    case POKEMON_SPECIES_SUCCESS:
      return {
        ...state,
        specie: { ...action.payload },
        error: null,
        loading: false,
      };
    case POKEMON_SPECIES_FAILURE:
      return {
        ...state,
        specie: {
          flavor_text_entries: [{}],
          genera: [{}],
        },
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
