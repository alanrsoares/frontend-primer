import { SagaIterator } from "redux-saga";
import { all, takeLatest } from "redux-saga/effects";

import { apiWorkerFactory } from "re-reduced";

import actions from "./actions";
import api from "./api";

export const fetchDetail = apiWorkerFactory(
  actions.fetchDetail,
  api.fetchDetail
);

export default function* sagaWatcher(): SagaIterator {
  yield all([takeLatest(actions.fetchDetail.type, fetchDetail)]);
}
