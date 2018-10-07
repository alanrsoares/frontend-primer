import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import saga from "@domain/core/redux/middleware/saga";

import genres from "@domain/genres/reducers";
import movies from "@domain/movies/reducers";
import shows from "@domain/genres/reducers";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  genres,
  movies,
  shows
});

export function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(saga);

  return store;
}
