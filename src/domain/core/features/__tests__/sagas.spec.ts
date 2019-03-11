import { testSaga } from "redux-saga-test-plan";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

import * as mocks from "@fixtures/mocks";

import { fetchFeatures } from "../sagas";

describe("Core.sagas", () => {
  describe("fetchFeatures", () => {
    it("should fetch features successfully", () => {
      const triggerAction = actions.features.fetch;

      testSaga(fetchFeatures, triggerAction())
        .next()
        .put(triggerAction.request())
        .next()
        .call(api.fetchFeatures)
        .next(mocks.features)
        .put(triggerAction.success(mocks.features))
        .next()
        .isDone();
    });
  });
});
