import { ArticlesState } from "./articles/types";

/**
 * UTCTimestamp
 * @example 2019-04-02T20:29:24.326Z
 */
export type UTCTimeStamp = string;

export interface PaginationQuery {
  limit?: number;
  offset?: number;
}

export * from "./articles/types";
export * from "./comments/types";
export * from "./tags/types";

export interface ContentState {
  articles: ArticlesState;
}
