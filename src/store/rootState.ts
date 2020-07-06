import { RootState } from "../types";

const rootState: RootState = {
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
  specieObject: {
    specie: {},
    error: null,
    loading: false,
  },
  evolutionChainObject: {
    evolutionChain: null,
    error: null,
    loading: false,
  },
  pokemonSearchState: {
    value: "",
    error: null,
    loading: false
  },
};

export default rootState;
