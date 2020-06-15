import { combineReducers } from "redux";
import pokemonObject from "./pokemonObject";
import pokemonList from "./pokemonList";
import specieObject from "./specieObject";

const rootReducer = combineReducers({
  pokemonList,
  pokemonObject,
  specieObject,
});

export default rootReducer;
