import { State } from "@domain";
import { createSelector } from "reselect";

export const getFeatures = (state: State) => {
  const { features } = state.core;

  return features.idList.map(id => features.byId[id]);
};

export const getDisabledFeatures = createSelector(getFeatures, features =>
  features.filter(feature => feature.isEnabled)
);

export const getIsLoggedIn = (state: State) => state.core.auth.isLoggedIn;
