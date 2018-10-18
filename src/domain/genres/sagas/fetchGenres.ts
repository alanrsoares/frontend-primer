import { apiWorkerFactory } from "re-reduced";

import { actions, api } from "@domain/genres";

export default apiWorkerFactory(actions.fetchGenres, api.fetchGenres);
