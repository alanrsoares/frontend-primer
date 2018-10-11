import { createAsyncActions } from "re-reduce";

import { Genre } from "@domain/genres";

export default {
  fetch: createAsyncActions<void, Genre[]>("FETCH", "GENRES")
};
