import { createActions } from "re-reduced";

import { Paginated } from "@lib/types";
import { Genre } from "@domain/genres/types";

export default createActions("GENRES", create => ({
  fetch: create.asyncAction<Paginated<Genre[]>>(),
  fetchDetails: create.asyncAction<Genre, { id: string }>()
}));
