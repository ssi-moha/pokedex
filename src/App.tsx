import React from "react";
import "./App.css";
import PokemonListPage from "./pages/PokemonListPage";
import { Switch, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PokemonListPage />
      </Route>
      <Route exact path="/pokemon/:name">
        <PokemonPage />
      </Route>
    </Switch>
  );
};

export default App;
