import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchAction } from "../../actions/search";

interface Props {}

const PokemonSearchBarInput = styled.input.attrs({
  type: "search",
})`
  border-radius: 10px;
  height: 24px;
  padding: 1px 10px;
`;

const PokemonSearchBar: React.FC<Props> = () => {
  const dispatch = useDispatch();

  function dispatchSearchBarValue(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchAction(e.target.value));
  }
  
  return <PokemonSearchBarInput onChange={dispatchSearchBarValue} />;
};

export default PokemonSearchBar;
