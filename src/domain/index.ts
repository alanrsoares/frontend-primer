import { combineReducers } from "redux";

import * as core from "@domain/core";
import * as content from "@domain/content";

export const actions = {
  core: core.actions,
  content: content.actions
};

export const selectors = {
  ...core.selectors,
  ...content.selectors
};

// combines all of the domain reducers into a single reducer function
export const rootReducer = combineReducers({
  core: core.reducers,
  content: content.reducers
});
