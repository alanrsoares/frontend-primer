import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

const noopSaga = function*() {
  yield "test";
};

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest("SOME_ACTION_TYPE", noopSaga);
}
