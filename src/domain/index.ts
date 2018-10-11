import { combineReducers } from "redux";

import {
  State as Core,
  actions as coreActions,
  reducers as coreReducers
} from "@domain/core";

import {
  State as Genres,
  actions as genresActions,
  reducers as genresReducers
} from "@domain/genres";

export interface State {
  core: Core;
  genres: Genres;
}

export const actions = {
  core: coreActions,
  genres: genresActions
};

export type Actions = typeof actions;

// combines all of the domain reducers into a single reducer function
export const rootReducer = combineReducers({
  core: coreReducers,
  genres: genresReducers
});
