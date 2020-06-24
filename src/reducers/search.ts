import { UPDATE_SEARCH } from "../actions";

const INITIAL_STATE = null;

export default function (
  state = INITIAL_STATE,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
