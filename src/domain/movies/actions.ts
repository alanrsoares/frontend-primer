import { createActions } from "re-reduced";

import { Movie } from "./types";
import { PaginatedResult } from "@helpers/reducers";

export default createActions("MOVIES", create => ({
  fetch: create.asyncAction<PaginatedResult<Movie>>(),
  fetchDetails: create.asyncAction<Movie, { id: string }>()
}));
