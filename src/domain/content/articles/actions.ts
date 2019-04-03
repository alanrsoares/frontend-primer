import { createActions } from "re-reduced";

import { PaginatedResult } from "@lib/types";
import { Article, ArticlesQuery } from "./types";

export default createActions("CONTENT/ARTICLES", create => ({
  fetch: create.asyncAction<PaginatedResult<Article[]>, ArticlesQuery>()
}));
