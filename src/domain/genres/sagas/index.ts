import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import actions from "@domain/genres/actions";
import fetchList from "@domain/genres/sagas/fetchList";

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest(actions.fetchList.run.type, fetchList);
}
