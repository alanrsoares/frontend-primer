import { all, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import { sagas as genres } from "@domain/genres";
import { sagas as movies } from "@domain/movies";
import { sagas as shows } from "@domain/shows";

const sagaWatchers = [genres, movies, shows];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(fork));
}
