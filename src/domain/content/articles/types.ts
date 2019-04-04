import { PaginationQuery, UTCTimeStamp } from "../types";

import { AsyncCollection, Paginated, AsyncValue } from "@lib/types";
import { AuthorProfile } from "../profiles/types";

export interface Article {
  /**
   * id
   */
  slug: string;
  author: AuthorProfile;
  title: string;
  body: string;
  createdAt: UTCTimeStamp;
  updatedAt: UTCTimeStamp;
  favorited: boolean;
  favoritesCount: number;
  tagList: string[];
  description: string;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface ArticleResponse {
  article: Article;
}

export interface ArticlesQuery extends PaginationQuery {
  /**
   * use author's username
   */
  author?: string;
  tag?: string;
}

export type ArticlesState = Paginated<AsyncCollection<Article>> & {
  detail: AsyncValue<Article>;
};
