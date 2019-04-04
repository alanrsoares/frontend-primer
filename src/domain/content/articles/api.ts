import qs from "query-string";

import { get } from "@lib/apiClient";

import { Paginated } from "@lib/types";
import { Endpoints } from "@domain/core";

import {
  Article,
  ArticleResponse,
  ArticlesResponse,
  ArticlesQuery
} from "./types";

export default {
  fetch: get<
    ArticlesResponse,
    ArticlesQuery,
    ArticlesQuery,
    Paginated<Article[]>
  >(Endpoints.articles, {
    transformEndpoint: query => `${Endpoints.articles}?${qs.stringify(query)}`,
    transformResult: (result, query) => ({
      items: result.articles,
      pagination: {
        pageIndex: Math.ceil(query.offset / query.limit) + 1,
        pageSize: query.limit,
        total: result.articlesCount
      }
    })
  }),
  fetchDetail: get<ArticleResponse, string, string, Article>(
    Endpoints.articles,
    {
      transformEndpoint: slug => `${Endpoints.articles}/${slug}`,
      transformResult: result => result.article
    }
  )
};
