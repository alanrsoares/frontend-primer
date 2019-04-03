import { PaginationQuery, UTCTimeStamp } from "../types";
import { AuthorProfile } from "../profile/types";
import { AsyncCollection, PaginatedResult } from "@lib/types";

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
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface ArticlesQuery extends PaginationQuery {
  /**
   * use author's username
   */
  author?: string;
}

export type ArticlesState = PaginatedResult<AsyncCollection<Article>>;
