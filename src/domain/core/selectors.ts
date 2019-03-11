import { createSelector } from "reselect";

import { RequestStatus } from "@lib/types";
import { State } from "@domain/types";

// first expose selectors for non-calculated state properties

export const getFeaturesById = (state: State) => state.core.features.byId;

export const getFeaturesIdList = (state: State) => state.core.features.idList;

export const getBreadcrumbs = (state: State) => state.core.app.breadcrumbs;

// then you'll be able to use those as base building blocks in composite selectors

export const getFeatures = createSelector(
  getFeaturesIdList,
  getFeaturesById,
  // combines the result of the previous combined selectors into a aggregator function
  (
    idList /* result of getFeaturesIdList */,
    byId /* result of getFeaturesById */
  ) => idList.map(id => byId[id])
);

export const getEnabledFeatures = createSelector(
  getFeatures,
  // just like the previous selector, it combines the result of the previous combined selectors into a aggregator function
  (features /* result of getFeatures */) =>
    features.filter(feature => feature.isEnabled)
);

export const getUserIsAuthenticated = <TOwnProps>(state: State) =>
  state.core.user.isAuthenticated;

export const getUserIsLoggingIn = (state: State) =>
  state.core.user.loginRequest.status === RequestStatus.Pending;

export const getAuthToken = (state: State) => state.core.user.token;

export const getIsBootstrapped = (state: State) =>
  state.core.app.isBootstrapped;

export const getIsFeatureEnabled = (state: State, ownProps: { key: string }) =>
  getEnabledFeatures(state).some(f => f.id === ownProps.key);
