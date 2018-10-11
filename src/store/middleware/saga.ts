import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";

import core from "@domain/core/sagas";
import genres from "@domain/genres/sagas";

const sagaWatchers = [core, genres];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(fork));
}
