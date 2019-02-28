import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/movies/actions";
import * as api from "@domain/movies/api";

export default apiWorkerFactory(actions.fetch, api.fetchMovies);
