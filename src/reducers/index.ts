import { combineReducers } from "redux";
import pokemonObject from "./pokemonObject";
import pokemonList from "./pokemonList";
import specieObject from "./specieObject";
import evolutionChainObject from "./evolutionChainObject";

const rootReducer = combineReducers({
  pokemonList,
  pokemonObject,
  specieObject,
  evolutionChainObject
});

export default rootReducer;
