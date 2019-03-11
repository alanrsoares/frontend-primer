import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { CoreState } from "@domain/core/types";

import features from "./features/reducers";
import user from "./user/reducers";
import app from "./app/reducers";

export const persistConfig: PersistConfig = {
  storage,
  key: "@primer-v1:core",
  version: 1,
  blacklist: ["app"]
};

const reducer = combineReducers<CoreState>({
  app,
  user,
  features
});

export default persistReducer(persistConfig, reducer);
