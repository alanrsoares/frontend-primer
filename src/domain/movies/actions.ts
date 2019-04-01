import { createActions } from "re-reduced";

import { PaginatedResult } from "@lib/types";
import { Movie } from "./types";

export default createActions("MOVIES", create => ({
  fetch: create.asyncAction<PaginatedResult<Movie[]>>(),
  fetchDetails: create.asyncAction<Movie, { id: string }>()
}));
