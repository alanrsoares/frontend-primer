import { createReducer, match } from "re-reduced";

import { indexBy } from "@helpers/list";

import { MoviesState } from "@domain/movies/types";
import actions from "@domain/movies/actions";
import { RequestStatus } from "@lib/types";

const INITIAL_STATE: MoviesState = {
  byId: {},
  idList: [],
  request: {
    status: RequestStatus.Idle,
    error: undefined
  }
};

export default createReducer<MoviesState>(
  [
    match(actions.fetch.request, state => ({
      ...state,
      request: {
        status: RequestStatus.Pending,
        error: undefined
      }
    })),
    match(actions.fetch.success, (state, result) => ({
      ...state,
      byId: indexBy("id", result),
      idList: result.map(genre => genre.id),
      request: {
        status: RequestStatus.Fulfilled,
        error: undefined
      }
    })),
    match(actions.fetch.failure, (state, error) => ({
      ...state,
      request: {
        status: RequestStatus.Failed,
        error
      }
    }))
  ],
  INITIAL_STATE
);
