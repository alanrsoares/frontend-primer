import { all, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import genres from "@domain/genres/sagas";
import movies from "@domain/movies/sagas";
import shows from "@domain/shows/sagas";

const sagaWatchers = [genres, movies, shows];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(fork));
}
