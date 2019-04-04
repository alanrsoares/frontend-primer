import { UTCTimeStamp } from "../types";
import { AuthorProfile } from "../profiles/types";
import { AsyncCollection } from "@lib/types";

export interface ArticleCommentsResponse {
  comments: ArticleComment[];
}

export interface ArticleComment {
  id: number;
  author: AuthorProfile;
  createdAt: UTCTimeStamp;
  updatedAt: UTCTimeStamp;
  body: string;
}

export type CommentsState = AsyncCollection<ArticleComment>;
