import { createReducer, match } from "re-reduced";

import { indexBy } from "@helpers/list";
import { State as MoviesState } from "@domain/movies/types";
import actions from "@domain/movies/actions";

const INITIAL_STATE: MoviesState = {
  byId: {},
  idList: []
};

export default createReducer<MoviesState>(
  [
    match(actions.fetchMovies.success, (_, payload) => ({
      byId: indexBy("id", payload),
      idList: payload.map(genre => genre.id)
    }))
  ],
  INITIAL_STATE
);
