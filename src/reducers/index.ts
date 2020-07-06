import { combineReducers } from "redux";
import pokemonObject from "./pokemonObject";
import pokemonList from "./pokemonList";
import specieObject from "./specieObject";
import evolutionChainObject from "./evolutionChainObject";
import pokemonSearch from "./pokemonSearch";

const rootReducer = combineReducers({
  pokemonList,
  pokemonObject,
  specieObject,
  evolutionChainObject,
  pokemonSearch
});

export default rootReducer;
