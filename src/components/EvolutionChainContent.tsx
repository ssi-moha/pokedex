import React from "react";
import styled from "styled-components";

interface Props {
  evolutionData: any[];
}

const EvolutionImg = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
  align-self: center;
  align-items: center;
  flex-direction: column;
  img {
    transition: width 0.25s;
    width: 150px;
  }
`;

const EvolutionChainBlock = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const EvolutionChainContent: React.FC<Props> = ({ evolutionData }) => {
  console.log("data", evolutionData);

  return (
    <EvolutionChainBlock>
      {evolutionData.map((evolution, index) => (
        <EvolutionImg key={`evolution-${index}`}>
          <img
            src={`${process.env.PUBLIC_URL}/images/pokemons/${evolution.id}.svg`}
            alt=""
          />
          <p
            style={{
              textTransform: "capitalize",
              fontWeight: 700,
              padding: "0.5rem",
            }}
          >{`#${evolution.id} ${evolution.name}`}</p>
        </EvolutionImg>
      ))}
    </EvolutionChainBlock>
  );
};

export default EvolutionChainContent;
