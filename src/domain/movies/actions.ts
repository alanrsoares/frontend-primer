import { createActions } from "re-reduced";

import { PaginatedResult, PaginationQuery } from "@lib/types";
import { Movie } from "@domain/movies/types";

export default createActions("MOVIES", create => ({
  fetch: create.asyncAction<PaginatedResult<Movie[]>, PaginationQuery>(),
  fetchDetails: create.asyncAction<Movie, { id: string }>()
}));
