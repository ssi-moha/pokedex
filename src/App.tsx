import React from "react";
import "./App.css";
import PokemonListPage from "./pages/PokemonListPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 1088px) {
    max-width: 960px;
    width: 960px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1152px;
    width: 1152px;
  }

  @media screen and (min-width: 1472px) {
    max-width: 1344px;
    width: 1344px;
  }
`;

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Container>
        <section>
          <Switch>
            <Route exact path="/">
              <PokemonListPage />
            </Route>
            <Route exact path="/pokemon/:name">
              <PokemonPage />
            </Route>
          </Switch>
        </section>
      </Container>
    </HashRouter>
  );
};

export default App;
