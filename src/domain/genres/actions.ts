import { createActions } from "re-reduced";

import { PaginatedResult } from "@lib/types";
import { Genre } from "@domain/genres/types";

export default createActions("GENRES", create => ({
  fetch: create.asyncAction<PaginatedResult<Genre[]>>(),
  fetchDetails: create.asyncAction<Genre, { id: string }>()
}));
