import { testSaga } from "redux-saga-test-plan";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

import { features } from "../../../../__fixtures__/api.mocks";

import fetchFeatures from "../fetchFeatures";

describe("Core.sagas", () => {
  describe("fetchFeatures", () => {
    it("should fetch features successfully", () => {
      const triggerAction = actions.features.fetch;

      testSaga(fetchFeatures, triggerAction())
        .next()
        .put(triggerAction.request())
        .next()
        .call(api.fetchFeatures)
        .next(features)
        .put(triggerAction.success(features))
        .next()
        .isDone();
    });
  });
});
