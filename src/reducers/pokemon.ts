import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  pokemonList: {
    pokemons: [],
    error: null,
    loading: false,
  },
};

export default function (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case POKEMON_LIST_REQUEST:
      return {
        ...state,
        pokemonList: {
          pokemons: [...state.pokemonList.pokemons],
          error: null,
          loading: true,
        },
      };
    case POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemonList: {
          pokemons: [...state.pokemonList.pokemons, action.payload],
          error: null,
          loading: false,
        },
      };
    case POKEMON_LIST_FAILURE:
      return {
        ...state,
        pokemonList: {
          pokemons: [],
          error: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
}
