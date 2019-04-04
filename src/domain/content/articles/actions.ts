import { createActions } from "re-reduced";

import { Paginated } from "@lib/types";
import { Article, ArticlesQuery } from "./types";

export default createActions("CONTENT/ARTICLES", create => ({
  fetch: create.asyncAction<Paginated<Article[]>, ArticlesQuery>(),
  fetchDetail: create.asyncAction<Article, string>()
}));
