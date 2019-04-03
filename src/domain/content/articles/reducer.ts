import { createAsyncPaginatedCollectionReducer } from "@helpers/reducers";

import actions from "./actions";
import { Article, ArticlesQuery } from "./types";

export default createAsyncPaginatedCollectionReducer<Article, ArticlesQuery>(
  actions.fetch,
  "slug"
);
