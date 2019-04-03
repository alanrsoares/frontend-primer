import qs from "query-string";

import { get } from "@lib/apiClient";

import { PaginatedResult } from "@lib/types";
import { Endpoints } from "@domain/core";

import { ArticlesResponse, ArticlesQuery, Article } from "./types";

export default {
  fetch: get<
    ArticlesResponse,
    ArticlesQuery,
    ArticlesQuery,
    PaginatedResult<Article[]>
  >(Endpoints.articles, {
    transformEndpoint: query => `${Endpoints.articles}?${qs.stringify(query)}`,
    transformResult: (result, query) => ({
      items: result.articles,
      pagination: { pageIndex: 0, pageSize: 10, total: result.articlesCount }
    })
  })
};
