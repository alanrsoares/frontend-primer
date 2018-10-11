import { State } from "@domain";
import { createSelector } from "reselect";

export const getFeaturesById = (state: State) => state.core.features.byId;

export const getFeaturesIdList = (state: State) => state.core.features.idList;

export const getFeatures = createSelector(
  getFeaturesIdList,
  getFeaturesById,
  // combines the result of the previous combined selectors into a aggregator function
  (
    idList /* result of getFeaturesIdList */,
    byId /* result of getFeaturesById */
  ) => idList.map(id => byId[id])
);

export const getDisabledFeatures = createSelector(getFeatures, features =>
  features.filter(feature => feature.isEnabled)
);

export const getIsAuthenticated = (state: State) =>
  state.core.user.isAuthenticated;
