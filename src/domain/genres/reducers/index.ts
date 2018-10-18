import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";
import { State as GenresState, actions, Genre } from "@domain/genres";

const INITIAL_STATE: GenresState = {
  byId: {},
  idList: []
};

export default handleActions(
  {
    [actions.fetchGenres.success.type]: (
      payload: Genre[],
      state: GenresState
    ) => ({
      ...state,
      byId: indexBy("id", payload),
      idList: payload.map(genre => genre.id)
    })
  },
  INITIAL_STATE
);
