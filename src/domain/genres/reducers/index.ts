import { Genre } from "@domain/genres/types";
import actions from "@domain/genres/actions";
import { createAsyncPaginatedCollectionReducer } from "@helpers/reducers";

export default createAsyncPaginatedCollectionReducer<Genre>(
  actions.fetch,
  "id"
);
