import { combineReducers } from "redux";
import { createReducer, match } from "re-reduced";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { indexBy } from "@helpers/list";

import {
  State,
  UserState,
  FeaturesState,
  Breadcrumb,
  AuthState,
  RequestStatus
} from "@domain/core/types";
import actions from "@domain/core/actions";

export const persistConfig: PersistConfig = {
  storage,
  key: "@primer-v2:core",
  version: 1,
  blacklist: ["breadcrumbs", "isBootstrapped"]
};

const INITIAL_STATE: State = {
  isBootstrapped: false,
  features: {
    byId: {},
    idList: [],
    request: {
      status: RequestStatus.Idle
    }
  },
  user: {
    isAuthenticated: false,
    profile: undefined,
    isLoggingIn: false
  },
  auth: {
    token: undefined
  },
  breadcrumbs: []
};

const user = createReducer<UserState>(
  [
    match(actions.user.login.request, (state, _) => ({
      ...state,
      isLoggingIn: true
    })),
    match(actions.user.login.success, (_, { profile }) => ({
      profile,
      isAuthenticated: true,
      isLoggingIn: false
    })),
    match(actions.user.logout.success, () => INITIAL_STATE.user)
  ],
  INITIAL_STATE.user
);

const features = createReducer<FeaturesState>(
  [
    match(actions.features.fetch.success, (state, payload) => ({
      ...state,
      byId: indexBy("id", payload),
      idList: payload.map(feature => feature.id)
    }))
  ],
  INITIAL_STATE.features
);

const breadcrumbs = createReducer<Breadcrumb[]>(
  [match(actions.setBreadcrumbs, (_, payload) => payload)],
  INITIAL_STATE.breadcrumbs
);

const auth = createReducer<AuthState>(
  [
    match(actions.user.login.success, (_, { token }) => ({
      token
    })),
    match(actions.user.logout.success, () => INITIAL_STATE.auth)
  ],
  INITIAL_STATE.auth
);

const isBootstrapped = createReducer<boolean>(
  [match(actions.bootstrap.success, () => true)],
  INITIAL_STATE.isBootstrapped
);

const reducer = combineReducers<State>({
  breadcrumbs,
  features,
  user,
  auth,
  isBootstrapped
});

export default persistReducer(persistConfig, reducer);
