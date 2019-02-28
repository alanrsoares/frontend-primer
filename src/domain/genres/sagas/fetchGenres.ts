import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/genres/actions";
import * as api from "@domain/genres/api";

export default apiWorkerFactory(actions.fetch, api.fetchGenres);
