import { createAsyncActions } from "re-reduced";

import { Genre } from "@domain/genres";

export default {
  fetch: createAsyncActions<void, Genre[]>("FETCH", "GENRES")
};
