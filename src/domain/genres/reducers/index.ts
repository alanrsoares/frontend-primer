import { handleActions } from "re-reduce";

import { State as GenresState, actions, Genre } from "@domain/genres";

const INITIAL_STATE: GenresState = {
  byId: {},
  idList: []
};

const indexBy = <T>(idKey: string, list: T[]) =>
  list.reduce((acc, item) => {
    return {
      ...acc,
      [item[idKey]]: item
    };
  }, {});

export default handleActions(
  {
    [actions.fetch.success.type]: (payload: Genre[], state: GenresState) => ({
      ...state,
      byId: indexBy("id", payload),
      idList: payload.map(genre => genre.id)
    })
  },
  INITIAL_STATE
);
