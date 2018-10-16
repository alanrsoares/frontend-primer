import { combineReducers } from "redux";
import { merge } from "ramda";

import * as core from "@domain/core";
import * as genres from "@domain/genres";

export interface State {
  core: core.State;
  genres: genres.State;
}

export const actions = {
  core: core.actions,
  genres: genres.actions
};

export const selectors = merge(core.selectors, genres.selectors);

export type Actions = typeof actions;

// combines all of the domain reducers into a single reducer function
export const rootReducer = combineReducers({
  core: core.reducers,
  genres: genres.reducers
});
