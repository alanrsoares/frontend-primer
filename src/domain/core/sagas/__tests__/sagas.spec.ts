import { testSaga } from "redux-saga-test-plan";

import { Feature } from "@domain/core/types";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

import fetchFeatures from "../fetchFeatures";

describe("Core.sagas", () => {
  describe("fetchFeatures", () => {
    it("should fetch features successfully", () => {
      const triggerAction = actions.features.fetch;
      const mockApiResponse: Feature[] = [{ id: "id-1", isEnabled: true }];

      testSaga(fetchFeatures, triggerAction())
        .next()
        .put(triggerAction.request())
        .next()
        .call(api.fetchFeatures)
        .next(mockApiResponse)
        .put(triggerAction.success(mockApiResponse))
        .next()
        .isDone();
    });
  });
});
