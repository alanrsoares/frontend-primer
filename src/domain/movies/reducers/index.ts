import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";
import { State as MoviesState, actions } from "@domain/movies";

const INITIAL_STATE: MoviesState = {
  byId: {},
  idList: []
};

export default handleActions<MoviesState>(
  actions.fetchMovies.success.reduce((_, payload) => ({
    byId: indexBy("id", payload),
    idList: payload.map(genre => genre.id)
  })),
  INITIAL_STATE
);
