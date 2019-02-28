import { createReducer, match } from "re-reduced";

import { indexBy } from "@helpers/list";

import { State as GenresState } from "@domain/genres/types";
import actions from "@domain/genres/actions";

const INITIAL_STATE: GenresState = {
  byId: {},
  idList: []
};

export default createReducer<GenresState>(
  [
    match(actions.fetch.success, (_, payload) => ({
      byId: indexBy("id", payload),
      idList: payload.map(genre => genre.id)
    }))
  ],
  INITIAL_STATE
);
