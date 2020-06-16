import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

interface Props {
  evolutionData: any[];
  loading: boolean;
}

const EvolutionBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

const EvolutionImg = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  align-self: center;
  align-items: center;
  flex-direction: column;
  img {
    transition: width 0.25s;
    width: 150px;
  }

  img:hover {
    width: 175px;
  }
`;

const EvolutionChainBlock = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 300px;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
  align-items: center;
  justify-content: center;
`;

const EvolutionChainContent: React.FC<Props> = ({ evolutionData, loading }) => {
  if (loading) {
    return (
      <EvolutionChainBlock>
        <Spinner />
      </EvolutionChainBlock>
    );
  }

  return (
    <EvolutionChainBlock>
      {evolutionData.map((evolution, index) => (
        <EvolutionBlock key={`evolution-${index}`}>
          <Link to={`/pokemon/${evolution.name}`}>
            <EvolutionImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/pokemons/${evolution.id}.svg`}
                alt=""
              />
            </EvolutionImg>
            <p
              style={{
                textTransform: "capitalize",
                fontWeight: 700,
                padding: "0.5rem",
              }}
            >{`#${evolution.id} ${evolution.name}`}</p>
          </Link>
        </EvolutionBlock>
      ))}
    </EvolutionChainBlock>
  );
};

export default EvolutionChainContent;
