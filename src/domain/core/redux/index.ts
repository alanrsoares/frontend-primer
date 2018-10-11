import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import saga from "@domain/core/redux/middleware/saga";
import logger from "@domain/core/redux/middleware/logger";

import core from "@domain/core/reducers";
import genres from "@domain/genres/reducers";

// combines all of the domain reducers into a single reducer function
const rootReducer = combineReducers({
  core,
  genres
});

// set-up redux middlewares

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

export function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(saga);

  return store;
}
