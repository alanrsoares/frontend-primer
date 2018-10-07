import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

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
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
}
