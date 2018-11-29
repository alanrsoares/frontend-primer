import { createReducer, match } from "re-reduced";

import { indexBy } from "../../../helpers/list";
import { State as GenresState } from "../types";
import actions from "../actions";

const INITIAL_STATE: GenresState = {
  byId: {},
  idList: []
};

export default createReducer<GenresState>(
  [
    match(actions.fetchGenres.success, (_, payload) => ({
      byId: indexBy("id", payload),
      idList: payload.map(genre => genre.id)
    }))
  ],
  INITIAL_STATE
);
