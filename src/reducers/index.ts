import { combineReducers } from "redux";
import pokemonObject from "./pokemonObject";
import pokemonList from "./pokemonList";
import specieObject from "./specieObject";
import evolutionChainObject from "./evolutionChainObject";
import search from "./search";

const rootReducer = combineReducers({
  pokemonList,
  pokemonObject,
  specieObject,
  evolutionChainObject,
  search
});

export default rootReducer;
