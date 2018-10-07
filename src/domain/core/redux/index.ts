import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "@domain/core/redux/middleware/saga";

import { reducers as genres } from "@domain/genres";
import { reducers as movies } from "@domain/movies";
import { reducers as shows } from "@domain/genres";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  genres,
  movies,
  shows
});

export function configureStore() {
  const storeEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
