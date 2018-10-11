import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { actions, api, Genre } from "@domain/genres";

export default function* fetchList(): SagaIterator {
  yield put(actions.fetch.request());

  try {
    const result: Genre[] = yield call(api.fetchList);

    yield put(actions.fetch.success(result));
  } catch (exception) {
    yield put(actions.fetch.failure(exception));
  }
}
