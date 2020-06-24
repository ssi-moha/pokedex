import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

export const PokemonImg = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
  align-self: center;
  img {
    transition: width 0.25s;
    width: 150px;
  }
`;

export const InformationsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PokemonCardBlock = styled(Link)`
  color: unset;
  text-decoration: unset;
  display: flex;
  position: relative;
  height: 500px;
  padding: 1.25rem;
  flex-direction: column;
  transition: box-shadow 0.3s;
  height: 100%;
  box-sizing: border-box;

  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    background: rgb(248, 248, 255, 0.5);
    ${PokemonImg} img {
      width: 175px;
      overflow: visible;
    }
  }
  text-align: center;
  justify-content: space-between;
  p {
    display: inline-block;
    vertical-align: top;
  }
`;

export const PaddedCol = styled(Col)`
  padding: 0.75rem;
`;