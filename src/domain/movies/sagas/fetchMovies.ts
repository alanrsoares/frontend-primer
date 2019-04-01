import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/movies/actions";
import * as api from "@domain/movies/api";
import { Movie } from "../types";
import { PaginatedResult, PaginationQuery } from "@lib/types";

export default apiWorkerFactory<PaginatedResult<Movie[]>, PaginationQuery>(
  actions.fetch,
  api.fetchMovies
);
