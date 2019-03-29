import { createActions } from "re-reduced";

import { Genre } from "@domain/genres/types";
import { PaginatedResult } from "@helpers/reducers";

export default createActions("GENRES", create => ({
  fetch: create.asyncAction<PaginatedResult<Genre>>(),
  fetchDetails: create.asyncAction<Genre, { id: string }>()
}));
