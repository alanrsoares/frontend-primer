import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import saga from "@domain/core/redux/middleware/saga";

import core from "@domain/core/reducers";
import genres from "@domain/genres/reducers";

export * from "@domain/core/redux/types";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  core,
  genres
});

export function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(saga);

  return store;
}
