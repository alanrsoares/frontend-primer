import { createAsyncCollectionReducer } from "@helpers/reducers";

import actions from "./actions";
import { ArticleComment } from "./types";

export default createAsyncCollectionReducer<ArticleComment, string>(
  actions.fetch,
  "id"
);
