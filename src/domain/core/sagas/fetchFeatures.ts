import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { actions, api, Feature } from "@domain/core";

export default function* fetchList(): SagaIterator {
  yield put(actions.features.fetchList.request());

  try {
    const result: Feature[] = yield call(api.fetchFeatures);

    yield put(actions.features.fetchList.success(result));
  } catch (exception) {
    yield put(actions.features.fetchList.failure(exception));
  }
}
