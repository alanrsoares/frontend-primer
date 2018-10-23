import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";
import { State as GenresState, actions } from "@domain/genres";

const INITIAL_STATE: GenresState = {
  byId: {},
  idList: []
};

export default handleActions<GenresState>(
  actions.fetchGenres.success.reduce((payload, _) => ({
    byId: indexBy("id", payload),
    idList: payload.map(genre => genre.id)
  })),
  INITIAL_STATE
);
