import { RootState } from "../types";

const rootState: RootState = {
  pokemon: {
    pokemonList: {
      pokemons: [],
      error: null,
      loading: false,
    },
  },
};

export default rootState;
