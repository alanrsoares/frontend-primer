import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";

import tags from "./tags/sagas";
import articles from "./articles/sagas";
import comments from "./comments/sagas";
import profiles from "./profiles/sagas";

const sagaWatchers = [tags, articles, comments, profiles];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(fork));
}
