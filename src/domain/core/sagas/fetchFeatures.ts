import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

const fetchFeaturesWorker = apiWorkerFactory(
  actions.features.fetch,
  api.fetchFeatures
);

export default fetchFeaturesWorker;
