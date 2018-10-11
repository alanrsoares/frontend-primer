import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { actions, api, Feature } from "@domain/core";

export default function* fetch(): SagaIterator {
  yield put(actions.features.fetch.request());

  try {
    const result: Feature[] = yield call(api.fetchFeatures);

    yield put(actions.features.fetch.success(result));
  } catch (exception) {
    yield put(actions.features.fetch.failure(exception));
  }
}
