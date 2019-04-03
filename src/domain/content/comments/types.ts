import { UTCTimeStamp } from "../types";
import { AuthorProfile } from "../profile/types";

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
