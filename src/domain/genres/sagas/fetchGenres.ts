import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/genres/actions";
import * as api from "@domain/genres/api";
import { PaginatedResult, PaginationQuery } from "@lib/types";
import { Genre } from "../types";

export default apiWorkerFactory<PaginatedResult<Genre[]>, PaginationQuery>(
  actions.fetch,
  api.fetchGenres
);
