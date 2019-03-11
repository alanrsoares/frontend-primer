import { combineReducers } from "redux";

import * as core from "@domain/core";
import * as genres from "@domain/genres";
import * as movies from "@domain/movies";

export const actions = {
  core: core.actions,
  genres: genres.actions,
  movies: movies.actions
};

export const selectors = {
  ...core.selectors,
  ...genres.selectors,
  ...movies.selectors
};

// combines all of the domain reducers into a single reducer function
export const rootReducer = combineReducers({
  core: core.reducers,
  genres: genres.reducers,
  movies: movies.reducers
});
