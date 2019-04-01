import { createActions } from "re-reduced";

import { PaginatedResult, PaginationQuery } from "@lib/types";
import { Genre } from "@domain/genres/types";

export default createActions("GENRES", create => ({
  fetch: create.asyncAction<PaginatedResult<Genre[]>, PaginationQuery>(),
  fetchDetails: create.asyncAction<Genre, { id: string }>()
}));
