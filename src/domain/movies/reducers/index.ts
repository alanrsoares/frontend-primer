import { Movie } from "@domain/movies/types";
import actions from "@domain/movies/actions";

import { createAsyncPaginatedCollectionReducer } from "@helpers/reducers";

export default createAsyncPaginatedCollectionReducer<Movie>(
  actions.fetch,
  "id"
);
