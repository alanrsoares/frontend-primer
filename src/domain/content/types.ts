import { ArticlesState } from "./articles/types";
import { ProfilesState } from "./profiles/types";
import { CommentsState } from "./comments/types";
import { TagsState } from "./tags/types";

/**
 * UTCTimestamp
 * @example 2019-04-02T20:29:24.326Z
 */
export type UTCTimeStamp = string;

export interface PaginationQuery {
  limit: number;
  offset: number;
}

export * from "./articles/types";
export * from "./comments/types";
export * from "./tags/types";
export * from "./profiles/types";

export interface ContentState {
  articles: ArticlesState;
  profiles: ProfilesState;
  comments: CommentsState;
  tags: TagsState;
}
