import { SagaIterator } from "redux-saga";
import { all, spawn } from "redux-saga/effects";

import core from "@domain/core/sagas";
import genres from "@domain/genres/sagas";
import movies from "@domain/movies/sagas";

const sagaWatchers = [core, genres, movies];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(spawn));
}
