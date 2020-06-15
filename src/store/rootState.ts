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
};

export default rootState;
