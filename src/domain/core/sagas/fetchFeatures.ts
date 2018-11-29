import { apiWorkerFactory } from "re-reduced";

import { actions, api } from "../../../domain/core";

const fetchFeaturesWorker = apiWorkerFactory(
  actions.features.fetch,
  api.fetchFeatures
);

export default fetchFeaturesWorker;
