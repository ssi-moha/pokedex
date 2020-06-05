import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAILURE,
  POKEMON_OBJECT_REQUEST,
  POKEMON_OBJECT_SUCCESS,
  POKEMON_OBJECT_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  pokemonList: {
    pokemons: [],
    error: null,
    loading: false,
  },
  pokemonObject: {
    pokemon: {},
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
    case POKEMON_OBJECT_REQUEST:
      return {
        ...state,
        pokemonObject: {
          pokemon: { ...state.pokemonObject.pokemon },
          error: null,
          loading: true,
        },
      };
    case POKEMON_OBJECT_SUCCESS:
      return {
        ...state,
        pokemonObject: {
          pokemon: { ...action.payload },
          error: null,
          loading: false,
        },
      };
    case POKEMON_OBJECT_FAILURE:
      return {
        ...state,
        pokemonObject: {
          pokemon: null,
          error: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
}
