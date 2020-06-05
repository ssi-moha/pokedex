import { RootState } from "../types";

const rootState: RootState = {
  pokemon: {
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
  },
};

export default rootState;
