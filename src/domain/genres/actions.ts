import { createAsyncActions } from "re-reduced";

import { Genre } from "@domain/genres";

export default {
  fetchGenres: createAsyncActions<void, Genre[]>("FETCH", "GENRES")
};
