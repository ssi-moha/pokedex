import React, { useEffect } from "react";
import { fetchEvolutionChain } from "../actions/evolutionChain";
import { connect } from "react-redux";
import { EvolutionChainState, RootState } from "../types";
import EvolutionChainContent from "../components/EvolutionChainContent";
import getIdFromUrl from "../utils/getIdFromUrl";

interface OwnProps {
  evolutionChainUrl: string | null;
}

interface DispatchProps {
  fetchEvolutionChain: (id: number) => void;
}

interface StateProps {
  evolutionChainObject: EvolutionChainState;
}

type TotalProps = DispatchProps & StateProps & OwnProps;

const EvolutionChainContainer: React.FC<TotalProps> = ({
  fetchEvolutionChain,
  evolutionChainUrl,
  evolutionChainObject,
}) => {
  function formatEvolutionData(): any[] {
    const newArray: any[] = [];
    let nextEvolution = null;

    if (
      !evolutionChainObject.evolutionChain ||
      !evolutionChainObject.evolutionChain.chain
    )
      return newArray;

    nextEvolution = evolutionChainObject.evolutionChain.chain;
    do {
      const evolution = {
        id: getIdFromUrl(nextEvolution.species.url),
        name: nextEvolution.species.name,
        details: nextEvolution.evolution_details[0] || null,
      };

      newArray.push(evolution);
      nextEvolution = nextEvolution.evolves_to[0];
    } while (nextEvolution);

    return newArray;
  }

  useEffect(() => {
    if (evolutionChainUrl) {
      fetchEvolutionChain(Number(evolutionChainUrl.split("/")[6]));
    }
  }, [fetchEvolutionChain, evolutionChainUrl]);

  if (!evolutionChainUrl) return null;

  return <EvolutionChainContent evolutionData={formatEvolutionData()} />;
};

const mapStateToProps = (state: any) => ({
  evolutionChainObject: state.evolutionChainObject,
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  { fetchEvolutionChain }
)(EvolutionChainContainer);
