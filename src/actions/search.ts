import { UPDATE_SEARCH } from ".";

export function searchAction(value: string) {
  return {
    type: UPDATE_SEARCH,
    payload: value,
  };
}
