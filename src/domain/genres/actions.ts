import { createActions } from "re-reduced";

import { Genre } from "@domain/genres/types";
import { Paginated } from "@helpers/reducers";

export default createActions("GENRES", create => ({
  fetch: create.asyncAction<Paginated<Genre>>(),
  fetchDetails: create.asyncAction<Genre, { id: string }>()
}));
