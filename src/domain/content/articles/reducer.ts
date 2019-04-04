import {
  createAsyncCollectionReducer,
  createPaginationReducer,
  createAsyncValueReducer
} from "@helpers/reducers";

import actions from "./actions";
import { ArticlesState } from "./types";
import { combineReducers } from "redux";

export default combineReducers<ArticlesState>({
  items: createAsyncCollectionReducer(actions.fetch, "slug"),
  pagination: createPaginationReducer(actions.fetch),
  detail: createAsyncValueReducer(actions.fetchDetail)
});
