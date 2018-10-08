import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";

import genres from "@domain/genres/sagas";

const sagaWatchers = [genres];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(fork));
}
