import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { actions, api, UserProfile } from "@domain/core";

export default function* login(): SagaIterator {
  yield put(actions.user.login.request());

  try {
    const result: UserProfile = yield call(api.fetchFeatures);

    yield put(actions.user.login.success(result));
  } catch (exception) {
    yield put(actions.user.login.failure(exception));
  }
}
