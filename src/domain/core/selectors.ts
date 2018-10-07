import { createSelector } from "reselect";
import { State } from "@domain";

export const getFeatures = (state: State) => {
  const { features } = state.core;

  return features.idList.map(id => features.byId[id]);
};

export const getDisabledFeatures = createSelector(getFeatures, features =>
  features.filter(feature => feature.isEnabled)
);
